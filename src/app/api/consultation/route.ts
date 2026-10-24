import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, channel, comment, honeypot } = body;

    // Honeypot check for spam bots
    if (honeypot) {
      return NextResponse.json({ success: true, message: "OK" });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Пожалуйста, укажите корректное имя (не менее 2 символов)" },
        { status: 400 }
      );
    }

    // Phone validation: extract digits
    const digitsOnly = (phone || "").replace(/\D/g, "");
    if (!phone || typeof phone !== "string" || digitsOnly.length < 7) {
      return NextResponse.json(
        { error: "Пожалуйста, укажите корректный номер телефона (не менее 7 цифр)" },
        { status: 400 }
      );
    }

    const leadData = {
      id: Date.now().toString(),
      name: name.trim(),
      phone: phone.trim(),
      service: service || "inspection",
      channel: channel || "telegram",
      comment: comment ? comment.trim() : "—",
      createdAt: new Date().toISOString(),
      tashkentTime: new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" }),
    };

    console.log("=== NEW CONSULTATION LEAD RECEIVED ===", leadData);

    // 1. Persistent storage: Append to data/leads.jsonl (Zero-lead-loss guarantee)
    try {
      const dataDir = path.join(process.cwd(), "data");
      await fs.mkdir(dataDir, { recursive: true });
      const filePath = path.join(dataDir, "leads.jsonl");
      await fs.appendFile(filePath, JSON.stringify(leadData) + "\n", "utf-8");
    } catch (fsError) {
      console.error("Warning: Failed to append lead to disk:", fsError);
    }

    // 2. Optional Telegram bot dispatch if credentials exist
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      try {
        const text = `🏢 *НОВАЯ ЗАЯВКА С САЙТА GONCHAROVA.EXPERT*\n\n` +
          `👤 *Имя:* ${leadData.name}\n` +
          `📞 *Телефон:* ${leadData.phone}\n` +
          `🛠 *Услуга:* ${leadData.service}\n` +
          `💬 *Канал связи:* ${leadData.channel}\n` +
          `📝 *Комментарий:* ${leadData.comment}\n` +
          `⏰ *Время (Ташкент):* ${leadData.tashkentTime}`;

        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "Markdown",
          }),
        });
      } catch (tgError) {
        console.error("Failed to forward lead to Telegram bot:", tgError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Заявка успешно принята",
      leadId: leadData.id,
    });
  } catch (error) {
    console.error("Error processing consultation lead:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка при отправке заявки. Пожалуйста, напишите нам напрямую в Telegram." },
      { status: 500 }
    );
  }
}

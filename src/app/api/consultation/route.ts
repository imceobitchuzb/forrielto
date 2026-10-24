import { NextResponse } from "next/server";

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
        { error: "Пожалуйста, укажите корректное имя" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { error: "Пожалуйста, укажите корректный номер телефона" },
        { status: 400 }
      );
    }

    const leadData = {
      name: name.trim(),
      phone: phone.trim(),
      service: service || "Не указана",
      channel: channel || "Telegram",
      comment: comment ? comment.trim() : "—",
      createdAt: new Date().toISOString(),
    };

    console.log("=== NEW CONSULTATION LEAD RECEIVED ===", leadData);

    // Optional Telegram notification if bot env credentials exist
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
          `⏰ *Время:* ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })}`;

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
      leadId: Date.now().toString(),
    });
  } catch (error) {
    console.error("Error processing consultation lead:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка при отправке заявки. Пожалуйста, напишите нам напрямую в Telegram." },
      { status: 500 }
    );
  }
}

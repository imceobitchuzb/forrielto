export interface FAQItem {
  id: string;
  category: "inspection" | "supervision" | "turnkey" | "general";
  categoryRu: string;
  categoryUz: string;
  questionRu: string;
  questionUz: string;
  answerRu: string;
  answerUz: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "when-to-inspect",
    category: "inspection",
    categoryRu: "Приёмка новостройки",
    categoryUz: "Yangi uyni qabul qilish",
    questionRu: "В какой момент нужно заказывать приёмку квартиры?",
    questionUz: "Xonadonni qabul qilishga qachon buyurtma berish kerak?",
    answerRu:
      "Оптимальный момент — как только застройщик пригласил вас на первичный осмотр или подписание акта приёма-передачи, но ДО того, как вы поставили свою подпись на акте. После подписания акта доказать вину застройщика в скрытых и механических дефектах становится значительно сложнее.",
    answerUz:
      "Eng to'g'ri vaqt — quruvchi sizni ko'rikka yoki qabul qilish dalolatnomasini imzolashga chaqirganida, ammo dalolatnomaga qo'l qo'yishdan OLDIN. Imzolangandan keyin quruvchiga nuqsonlarni isbotlash ancha murakkab bo'ladi.",
  },
  {
    id: "what-client-receives",
    category: "inspection",
    categoryRu: "Приёмка новостройки",
    categoryUz: "Yangi uyni qabul qilish",
    questionRu: "Что именно получает собственник по итогам проверки?",
    questionUz: "Tekshiruv natijasida mulkdor aynan nimalarni oladi?",
    answerRu:
      "Вы получаете официальный дефектный акт с перечнем всех выявленных нарушений, подкрепленный фотографиями и ссылками на действующие строительные нормы (ШНК/КМК). Этот документ передаётся представителю застройщика с установленным сроком устранения замечаний.",
    answerUz:
      "Siz aniqlangan barcha kamchiliklar ro'yxati, fotosuratlar va amaldagi qurilish me'yorlariga (ShNK/KMK) asoslangan rasmiy nuqsonlar dalolatnomasini olasiz. Ushbu hujjat quruvchiga bartaraf etish muddatlari bilan topshiriladi.",
  },
  {
    id: "accompany-handover",
    category: "inspection",
    categoryRu: "Приёмка новостройки",
    categoryUz: "Yangi uyni qabul qilish",
    questionRu: "Может ли эксперт лично присутствовать на приёмке вместе со мной?",
    questionUz: "Ekspert qabul qilish paytida men bilan birga qatnasha oladimi?",
    answerRu:
      "Да, это стандартный формат. Анна или ведущий инженер лично выезжает на объект в назначенный день со всем профессиональным диагностическим оборудованием и сопровождает вас на протяжении всего осмотра.",
    answerUz:
      "Ha, bu asosiy ish formati. Anna yoki yetakchi muhandis belgilangan kuni barcha diagnostika asboblari bilan obyektga shaxsan yetib boradi va butun ko'rik davomida sizga hamrohlik qiladi.",
  },
  {
    id: "supervision-workflow",
    category: "supervision",
    categoryRu: "Контроль ремонта",
    categoryUz: "Ta'mir nazorati",
    questionRu: "Как устроен технический надзор за ремонтом?",
    questionUz: "Ta'mir texnazorati qanday ishlaydi?",
    answerRu:
      "Надзор строится на регулярных контрольных выездах по ключевым контрольным точкам: до заливки стяжки (проверка шумо- и теплоизоляции), до зашивки гипсокартона (проверка электрики и сантехники), перед укладкой плитки (гидроизоляция) и на этапе чистовой отделки. По каждому визиту формируется отчет с фотофиксацией замечаний.",
    answerUz:
      "Nazorat muhim bosqichlarda amalga oshiriladi: pol stajkasi quyilishidan oldin, gipsokarton yopilishidan oldin (elektr va santexnika tekshiruvi), kafel yotqizishdan oldin (gidroizolyatsiya) va toza pardoz bosqichida. Har bir tashrif bo'yicha hisobot tuziladi.",
  },
  {
    id: "pricing-structure",
    category: "general",
    categoryRu: "Стоимость и условия",
    categoryUz: "Narxlar va shartlar",
    questionRu: "От чего зависит стоимость услуг?",
    questionUz: "Xizmatlar narxi nimalarga bog'liq?",
    answerRu:
      "Стоимость приёмки зависит от общей площади квартиры, типа сдачи (черновая, предчистовая White Box или с готовой отделкой от застройщика) и удаленности объекта. Для контроля ремонта стоимость рассчитывается исходя из количества выездов или формата помесячного ведения.",
    answerUz:
      "Qabul qilish narxi xonadon maydoni, topshirish holati (qora suvoq, White Box yoki tayyor pardoz) va obyekt joylashuviga bog'liq. Ta'mir nazorati uchun narx tashriflar soni yoki oylik kuzatuv formati bo'yicha hisoblanadi.",
  },
  {
    id: "turnkey-scope",
    category: "turnkey",
    categoryRu: "Ремонт под ключ",
    categoryUz: "Kalit ostida ta'mir",
    questionRu: "Берёте ли вы в работу небольшие квартиры под ключ?",
    questionUz: "Kichik maydondagi xonadonlarni ham kalit ostida qabul qilasizmi?",
    answerRu:
      "Да, мы работаем с объектами различного масштаба в Ташкенте — от компактных студий 45 м² до просторных резиденций и пентхаусов. Главное условие — стремление заказчика к бескомпромиссному качеству и соблюдению инженерных норм.",
    answerUz:
      "Ha, biz Toshkentdagi turli maydondagi obyektlar bilan ishlaymiz — 45 m² studiyalardan tortib to katta penthauslargacha. Asosiy shart — buyurtmachining yuqori sifat va muhandislik me'yorlariga rioya etish istagi.",
  },
  {
    id: "consultation-booking",
    category: "general",
    categoryRu: "Запись и консультация",
    categoryUz: "Yozilish va konsultatsiya",
    questionRu: "Как быстрее всего забронировать дату осмотра?",
    questionUz: "Ko'rik sanasini eng tez qanday band qilish mumkin?",
    answerRu:
      "Заполните форму на сайте или напишите напрямую в Telegram (@Anna_040506). Укажите название ЖК, площадь квартиры и ориентировочную дату осмотра от застройщика. Мы согласуем удобное окно в графике.",
    answerUz:
      "Saytdagi shaklni to'ldiring yoki to'g'ridan-to'g'ri Telegram (@Anna_040506) orqali yozing. Turar-joy majmuasi nomi, maydoni va taxminiy sanani ko'rsating. Biz jadvaldan qulay vaqtni belgilaymiz.",
  },
];

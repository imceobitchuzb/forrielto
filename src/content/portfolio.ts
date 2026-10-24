export interface ProjectCase {
  slug: string;
  titleRu: string;
  titleUz: string;
  category: "inspection" | "defects" | "supervision" | "turnkey" | "transformation";
  categoryLabelRu: string;
  categoryLabelUz: string;
  scopeRu: string;
  scopeUz: string;
  statusRu: string;
  statusUz: string;
  descriptionRu: string;
  descriptionUz: string;
  findingsRu?: string[];
  findingsUz?: string[];
  coverImage: string;
  galleryImages: string[];
  isVerified?: boolean;
}

export const portfolioCases: ProjectCase[] = [
  {
    slug: "inspection-mirabad-avenue-demonstration",
    titleRu: "Инструментальная приёмка: Апартаменты 124 м²",
    titleUz: "Instrumental qabul: 124 m² xonadon",
    category: "inspection",
    categoryLabelRu: "Приёмка новостройки",
    categoryLabelUz: "Yangi uyni qabul qilish",
    scopeRu: "Комплексный осмотр: лазерная геометрия стен, тепловизионное обследование, проверка вентиляции и электросетей.",
    scopeUz: "Kompleks ko'rik: devorlar lazer geometriyasi, teplovizor ko'rigi, ventilyatsiya va elektr tizimlari.",
    statusRu: "Акт передан застройщику для устранения",
    statusUz: "Dalolatnoma quruvchiga topshirildi",
    descriptionRu:
      "При приёмке квартиры без отделки было выявлено 18 существенных дефектов, включая перекос рамы балконного блока, продувание в притворах и отсутствие заземления в распределительной коробке. Застройщик согласовал устранение всех замечаний в рамках гарантийного срока.",
    descriptionUz:
      "Pardozsiz xonadonni qabul qilishda 18 ta jiddiy kamchilik aniqlandi, jumladan balkon blokining qiyshiqligi, shamol o'tishi va elektr qutisida yerga ulashning yo'qligi. Quruvchi barcha kamchiliklarni o'z hisobidan bartaraf etishga rozi bo'ldi.",
    findingsRu: [
      "Отклонение вертикали межкомнатной перегородки: 22 мм (норма до 5 мм)",
      "Инфильтрация холодного воздуха по периметру монтажного шва окон",
      "Бухтение стяжки пола в зоне прихожей (пустоты на площади 2.4 м²)",
      "Опрокидывание тяги в вентиляционном канале санузла",
    ],
    findingsUz: [
      "Xonalararo devor vertikal og'ishi: 22 mm (me'yor 5 mm gacha)",
      "Deraza montaj choklari bo'ylab sovuq havo kirishi",
      "Kirish qismida pol stajkasining bo'shliqlari (2.4 m² maydonda)",
      "Hammomdagi ventilyatsiya kanalida teskari tortish",
    ],
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    ],
    isVerified: true,
  },
  {
    slug: "supervision-premium-interior-taskent",
    titleRu: "Технадзор ремонта: Контроль скрытых работ",
    titleUz: "Ta'mir texnazorati: Yashirin ishlarni nazorat qilish",
    category: "supervision",
    categoryLabelRu: "Контроль ремонта",
    categoryLabelUz: "Ta'mir nazorati",
    scopeRu: "Поэтапная приёмка гидроизоляции мокрых зон, разводки электрики и трасс кондиционирования.",
    scopeUz: "Ho'l hududlar gidroizolyatsiyasi, elektr simlari va konditsioner trassalarini bosqichma-bosqich qabul qilish.",
    statusRu: "Завершён этап предчистовой отделки",
    statusUz: "Pardoz oldi bosqichi yakunlandi",
    descriptionRu:
      "В ходе надзора предотвращена критическая ошибка бригады: планировалась укладка керамогранита на непросохшую гидроизоляцию без гидроизоляционных лент в углах. Своевременное замечание сэкономило заказчику повторные демонтажные работы.",
    descriptionUz:
      "Nazorat davomida ustalarning jiddiy xatosi oldi olindi: burchak lentalarisiz va quriguncha kafel yotqizish rejalashtirilgan edi. O'z vaqtida berilgan ko'rsatma buyurtmachining qayta buzish xarajatlarini tejab qoldi.",
    findingsRu: [
      "Отсутствие эластичной ленты в сопряжении стена-пол в душевой",
      "Сращивание кабелей питания без клеммных коробок под штукатуркой",
      "Несоблюдение уклона канализационного слива (1 см вместо 3 см на метр)",
    ],
    findingsUz: [
      "Dush zonasida devor-pol tutashmasida elastik lentaning yo'qligi",
      "Suvoq ostida kabellarning qutisiz ulanishi",
      "Kanalizatsiya quvuri nishabining yetarli emasligi",
    ],
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    ],
    isVerified: true,
  },
  {
    slug: "turnkey-modern-residence-tashkent",
    titleRu: "Ремонт под ключ: Квартира 96 м² в современном стиле",
    titleUz: "Kalit ostida ta'mir: Zamonaviy uslubdagi 96 m² xonadon",
    category: "turnkey",
    categoryLabelRu: "Ремонт под ключ",
    categoryLabelUz: "Kalit ostida ta'mir",
    scopeRu: "Полный цикл реализации: инженерный проект, черновой и чистовой ремонт под надзором эксперта.",
    scopeUz: "To'liq sikl: muhandislik loyihasi, qora va toza pardozlash ekspert nazorati ostida.",
    statusRu: "Объект успешно сдан заказчику",
    statusUz: "Obyekt muvaffaqiyatli topshirildi",
    descriptionRu:
      "Реализация жилого пространства с фиксированной сметой и еженедельной фото- и видеофиксацией для заказчика. Все узлы выполнены с соблюдением стандартов долговечности и звукоизоляции.",
    descriptionUz:
      "Qat'iy smeta hamda haftalik foto va video hisobotlar bilan amalga oshirilgan loyiha. Barcha tugunlar chidamlilik va shovqin izolyatsiyasi standartlariga muvofiq bajarilgan.",
    findingsRu: [
      "Индивидуальный акустический расчет перегородок спальни",
      "Коллекторная группа с защитой от протечек Neptun",
      "Идеальная плоскость стен под покраску со сложным боковым светом",
    ],
    findingsUz: [
      "Yotoqxona devorlarining akustik hisob-kitobi",
      "Oqishdan himoya tizimi bilan kollektor bloki",
      "Yon yorug'lik ostida mukammal bo'yalgan devorlar",
    ],
    coverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    isVerified: true,
  },
  {
    slug: "defect-thermal-imaging-audit",
    titleRu: "Аудит промерзания и теплопотерь фасада",
    titleUz: "Fasadning muzlashi va issiqlik yo'qotish auditi",
    category: "defects",
    categoryLabelRu: "Строительные дефекты",
    categoryLabelUz: "Qurilish nuqsonlari",
    scopeRu: "Тепловизионное обследование угловых зон, примыканий витражного остекления и узлов вентиляции.",
    scopeUz: "Burchak zonalari, vitraj oynalar va ventilyatsiya tugunlarini teplovizor orqali tekshirish.",
    statusRu: "Составлен теплотехнический отчёт",
    statusUz: "Issiqlik texnikasi hisoboti tuzildi",
    descriptionRu:
      "Обследование выявило мостики холода в местах опирания монолитных перекрытий на наружные стены из газоблока. Застройщик провел дополнительное наружное утепление фасада до начала отопительного сезона.",
    descriptionUz:
      "Tekshiruv gazoblok va monolit tutashgan joylarda sovuq ko'priklarini aniqladi. Quruvchi isitish mavsumi boshlanishidan oldin fasadni qo'shimcha izolyatsiya qildi.",
    findingsRu: [
      "Разница температур поверхности в углу: 7.2°C относительно середины стены",
      "Некачественное запенивание подставочного профиля окна",
      "Высокий риск образования конденсата и плесени за мебелью",
    ],
    findingsUz: [
      "Burchakdagi sirt harorati devor o'rtasiga nisbatan 7.2°C ga past",
      "Deraza profili tagida yetarli bo'lmagan montaj ko'pigi",
      "Mebel orqasida mog'or paydo bo'lish xavfi yuqori",
    ],
    coverImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    ],
    isVerified: true,
  },
];

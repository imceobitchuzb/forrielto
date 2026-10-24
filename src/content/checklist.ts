export interface ChecklistCategory {
  id: string;
  titleRu: string;
  titleUz: string;
  iconName: string;
  itemsRu: { label: string; risk: string }[];
  itemsUz: { label: string; risk: string }[];
}

export const inspectionChecklist: ChecklistCategory[] = [
  {
    id: "geometry",
    titleRu: "Геометрия и плоскости",
    titleUz: "Geometriya va tekisliklar",
    iconName: "Maximize2",
    itemsRu: [
      {
        label: "Вертикальность стен и перегородок",
        risk: "Отклонения более 5-10 мм ведут к перерасходу штукатурки и неровной установке мебели.",
      },
      {
        label: "Углы 90° в зонах кухни и санузлов",
        risk: "Без прямого угла невозможно плотно установить кухонный гарнитур или ванну без щелей.",
      },
      {
        label: "Прочность и монолитность стяжки пола",
        risk: "Пустоты и трещины («бухтение») приводят к расколу дорогого керамогранита или ламината.",
      },
      {
        label: "Высота дверных проемов",
        risk: "Нестандартные проемы требуют дорогостоящего расширения бетона или заказных дверей.",
      },
    ],
    itemsUz: [
      {
        label: "Devorlarning vertikalligi",
        risk: "5-10 mm dan ortiq og'ishlar suvoq sarfini oshiradi va mebelni to'g'ri o'rnatishga to'sqinlik qiladi.",
      },
      {
        label: "Oshxona va hammomda 90° burchaklar",
        risk: "To'g'ri burchaksiz oshxona mebeli yoki vannani tirqishlarsiz o'rnatib bo'lmaydi.",
      },
      {
        label: "Pol stajkasining mustahkamligi",
        risk: "Bo'shliqlar va yoriqlar kafel yoki laminatning sinishiga olib keladi.",
      },
      {
        label: "Eshik oraliqlarining balandligi",
        risk: "Nostandart oraliqlar qimmatbaho kengaytirish ishlarini talab qiladi.",
      },
    ],
  },
  {
    id: "windows",
    titleRu: "Окна, витражи и двери",
    titleUz: "Derazalar, vitrajlar va eshiklar",
    iconName: "Grid",
    itemsRu: [
      {
        label: "Целостность стеклопакетов и профилей",
        risk: "Окалины от сварки, царапины и трещины требуют полной замены стеклопакета застройщиком.",
      },
      {
        label: "Герметичность притворов и уплотнителей",
        risk: "Продувание через щели приводит к потере тепла зимой и пыли с улицы летом.",
      },
      {
        label: "Качество монтажных швов и пароизоляции",
        risk: "Некачественная пена без защитной ленты разрушается от УФ-лучей, вызывая сырость и плесень.",
      },
      {
        label: "Работа фурнитуры и геометрия створок",
        risk: "Провисание створок приводит к заклиниванию и поломке замковых механизмов.",
      },
    ],
    itemsUz: [
      {
        label: "Oyna va profillarning butunligi",
        risk: "Payvandlash izlari, tirnalishlar va yoriqlar oynani to'liq almashtirishni talab qiladi.",
      },
      {
        label: "Zichlagichlar va qisqichlarning germetikligi",
        risk: "Tirqishlardan shamol o'tishi qishda sovuq, yozda esa chang kirishiga sabab bo'ladi.",
      },
      {
        label: "Montaj choklari sifati va bug' izolyatsiyasi",
        risk: "Himoyalanmagan ko'pik buziladi, namlik va mog'or keltirib chiqaradi.",
      },
      {
        label: "Furnitura ishlashi va tabaqalar geometriyasi",
        risk: "Tabaqalarning cho'kishi qulflarning sinishiga olib keladi.",
      },
    ],
  },
  {
    id: "engineering",
    titleRu: "Инженерия и электросети",
    titleUz: "Muhandislik va elektr tarmoqlari",
    iconName: "Zap",
    itemsRu: [
      {
        label: "Наличие заземления и срабатывание УЗО",
        risk: "Ошибки в заземлении опасны для жизни и могут вывести из строя дорогую бытовую технику.",
      },
      {
        label: "Маркировка и расключение автоматов",
        risk: "Неправильно подобранное сечение кабелей может привести к перегреву и возгоранию.",
      },
      {
        label: "Тяга в вентиляционных каналах",
        risk: "Опрокидывание тяги затягивает запахи от соседей и создает духоту в квартире.",
      },
      {
        label: "Состояние стояков и запорной арматуры",
        risk: "Микроподтекания или перекосы труб угрожают затоплением чистового ремонта.",
      },
    ],
    itemsUz: [
      {
        label: "Yerga ulash (zazemleniye) va UZO ishlashi",
        risk: "Xatolar hayot uchun xavfli va qimmatbaho texnikani ishdan chiqarishi mumkin.",
      },
      {
        label: "Avtomatlarning markirovkasi va ulanishi",
        risk: "Kabel kesimining noto'g'ri tanlanishi qizib ketish va yong'inga olib kelishi mumkin.",
      },
      {
        label: "Ventilyatsiya kanallaridagi havo tortishi",
        risk: "Teskari tortish qo'shnilarning hidlarini kiritadi va xonani dim qiladi.",
      },
      {
        label: "Trubalar va kranlarning holati",
        risk: "Kichik oqishlar tayyor ta'mirni suv bosish xavfini tug'diradi.",
      },
    ],
  },
  {
    id: "area",
    titleRu: "Реальная площадь и договор",
    titleUz: "Haqiqiy maydon va shartnoma",
    iconName: "Compass",
    itemsRu: [
      {
        label: "Контрольный лазерный замер площади",
        risk: "Расхождение с договором даже на 1-2 м² может означать существенную переплату застройщику.",
      },
      {
        label: "Сверка с проектной документацией",
        risk: "Несогласованные короба или смещенные перегородки крадут полезную жилую площадь.",
      },
    ],
    itemsUz: [
      {
        label: "Maydonni lazer bilan nazorat o'lchash",
        risk: "Shartnomadan hatto 1-2 m² ga farq qilish quruvchiga jiddiy ortiqcha pul to'lashni anglatadi.",
      },
      {
        label: "Loyiha hujjatlari bilan solishtirish",
        risk: "Kutilmagan qutilar yoki siljigan devorlar foydali maydonni qisqartiradi.",
      },
    ],
  },
];

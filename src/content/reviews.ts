export interface ReviewItem {
  id: string;
  author: string;
  source: string;
  serviceRu: string;
  serviceUz: string;
  complexRu: string;
  complexUz: string;
  textRu: string;
  textUz: string;
  date: string;
  verified: boolean;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Тимур М.",
    source: "Instagram Direct",
    serviceRu: "Приёмка новостройки",
    serviceUz: "Yangi uyni qabul qilish",
    complexRu: "ЖК в Ташкенте (Мирабадский р-н)",
    complexUz: "Toshkentdagi TJM (Mirobod tumani)",
    textRu:
      "Обратился к Анне перед подписанием акта у застройщика. На осмотре нашли продувание панорамного остекления и отклонение перегородки в санузле почти на 3 сантиметра! Застройщик сначала спорил, но после грамотного дефектного акта со ссылками на строительные нормы согласился устранить за свой счёт. Сэкономили кучу нервов и денег на штукатурке.",
    textUz:
      "Quruvchi bilan dalolatnoma imzolashdan oldin Annaga murojaat qildim. Ko'rikda vitraj oynalardan shamol kirishi va devorning deyarli 3 sm og'ishi aniqlandi! Quruvchi buni o'z hisobidan bartaraf etishga rozi bo'ldi. Ko'p asab va pulimiz tejaldi.",
    date: "2024",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Дильноза К.",
    source: "Telegram",
    serviceRu: "Технадзор ремонта",
    serviceUz: "Ta'mir texnazorati",
    complexRu: "ЖК в Яккасарайском р-не",
    complexUz: "Yakkasaroy tumani",
    textRu:
      "Самое ценное в работе с Анной — абсолютная принципиальность. Строители пытались убедить, что гидроизоляционную ленту клеить не обязательно и «все так делают». Анна сразу остановила работы до исправления узла. Чувствуешь, что кто-то профессионально стоит на твоей стороне.",
    textUz:
      "Anna bilan ishlashdagi eng qadrli narsa — mutlaq printsipiallik. Ustalar gidroizolyatsiya lentasisiz ham bo'laveradi deb ishontirmoqchi bo'lishdi. Anna kamchilik to'g'rilanmaguncha ishni to'xtatdi. O'zingizni xotirjam his qilasiz.",
    date: "2024",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Сардор У.",
    source: "Instagram Feedback",
    serviceRu: "Приёмка новостройки",
    serviceUz: "Yangi uyni qabul qilish",
    complexRu: "ЖК в Юнусабадском р-не",
    complexUz: "Yunusobod tumani",
    textRu:
      "Благодарю за профессионализм и оперативность. Приехали вовремя со всеми приборами, проверили каждый угол, лазером отстреляли плоскости, замерили тягу в вентканалах и напряжение в сети. Отчёт понятный и подробный. Рекомендую всем знакомым, кто покупает новостройки в Ташкенте.",
    textUz:
      "Professionallik va tezkorlik uchun rahmat. Vaqtida barcha asboblar bilan kelib, har bir burchakni tekshirishdi, lazer bilan o'lchashdi va ventilyatsiyani ko'rishdi. Hisobot juda tushunarli. Tavsiya qilaman.",
    date: "2024",
    verified: true,
  },
];

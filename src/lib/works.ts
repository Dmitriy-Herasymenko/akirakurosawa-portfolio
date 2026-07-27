export type WorkImage = {
  src: string;
  width: number;
  height: number;
  alt: { uk: string; en: string };
};

export type Work = {
  slug: string;
  seed: string;
  year: number;
  category: { uk: string; en: string };
  title: { uk: string; en: string };
  excerpt: { uk: string; en: string };
  description: { uk: string; en: string };
  cover: { width: number; height: number };
  gallery: WorkImage[];
};

function image(
  seed: string,
  index: number,
  width: number,
  height: number,
  alt: { uk: string; en: string },
): WorkImage {
  return {
    src: `https://picsum.photos/seed/${seed}-${index}/${width}/${height}`,
    width,
    height,
    alt,
  };
}

export const works: Work[] = [
  {
    slug: "silent-hours",
    seed: "silent-hours",
    year: 2025,
    category: { uk: "Пейзаж", en: "Landscape" },
    title: { uk: "Тихі години", en: "Silent Hours" },
    excerpt: {
      uk: "Світанки та сутінки українських Карпат.",
      en: "Dawns and dusks over the Ukrainian Carpathians.",
    },
    description: {
      uk: "Серія знята протягом трьох сезонів у Карпатах — момент, коли світло ледь торкається гір і все завмирає. Робота досліджує тишу як візуальну мову.",
      en: "Shot across three seasons in the Carpathians, this series captures the moment light barely touches the mountains and everything holds still. The work explores silence as a visual language.",
    },
    cover: { width: 1600, height: 2000 },
    gallery: [
      image("silent-hours", 1, 1600, 2000, {
        uk: "Туман над гірським хребтом на світанку",
        en: "Mist over a mountain ridge at dawn",
      }),
      image("silent-hours", 2, 2000, 1333, {
        uk: "Самотнє дерево в полі під час заходу сонця",
        en: "A lone tree in a field at sunset",
      }),
      image("silent-hours", 3, 1600, 2000, {
        uk: "Річка, що звивається між пагорбами",
        en: "A river winding between hills",
      }),
      image("silent-hours", 4, 2000, 1333, {
        uk: "Хмари, що торкаються вершини гори",
        en: "Clouds touching a mountain peak",
      }),
    ],
  },
  {
    slug: "concrete-portraits",
    seed: "concrete-portraits",
    year: 2024,
    category: { uk: "Портрет", en: "Portrait" },
    title: { uk: "Портрети бетону", en: "Concrete Portraits" },
    excerpt: {
      uk: "Люди на тлі архітектури Києва.",
      en: "People against Kyiv's architecture.",
    },
    description: {
      uk: "Проєкт про діалог між людиною і містом. Кожен портрет знятий на тлі модерністської архітектури, що формує характер моделі так само, як і навпаки.",
      en: "A project about the dialogue between people and the city. Each portrait is framed against modernist architecture that shapes the subject's character as much as the reverse.",
    },
    cover: { width: 1600, height: 2000 },
    gallery: [
      image("concrete-portraits", 1, 1600, 2000, {
        uk: "Портрет жінки на тлі бетонної стіни",
        en: "Portrait of a woman against a concrete wall",
      }),
      image("concrete-portraits", 2, 1600, 2000, {
        uk: "Чоловік у тіні архітектурної арки",
        en: "A man in the shadow of an architectural arch",
      }),
      image("concrete-portraits", 3, 2000, 1333, {
        uk: "Група людей на сходах адміністративної будівлі",
        en: "A group of people on the steps of an administrative building",
      }),
    ],
  },
  {
    slug: "coastal-light",
    seed: "coastal-light",
    year: 2024,
    category: { uk: "Пейзаж", en: "Landscape" },
    title: { uk: "Прибережне світло", en: "Coastal Light" },
    excerpt: {
      uk: "Одеське узбережжя у різні пори року.",
      en: "The Odesa coastline through the seasons.",
    },
    description: {
      uk: "Двохрічне спостереження за Чорним морем — від штормових зим до спекотних літ. Серія про мінливість світла на воді.",
      en: "A two-year observation of the Black Sea — from stormy winters to hot summers. A series about the ever-changing light on water.",
    },
    cover: { width: 2000, height: 1333 },
    gallery: [
      image("coastal-light", 1, 2000, 1333, {
        uk: "Хвилі, що розбиваються об скелястий берег",
        en: "Waves breaking against a rocky shore",
      }),
      image("coastal-light", 2, 1600, 2000, {
        uk: "Самотній маяк у сутінках",
        en: "A lone lighthouse at dusk",
      }),
      image("coastal-light", 3, 2000, 1333, {
        uk: "Відображення хмар на спокійній воді",
        en: "Clouds reflected on calm water",
      }),
      image("coastal-light", 4, 2000, 1333, {
        uk: "Рибальський човен на світанку",
        en: "A fishing boat at dawn",
      }),
    ],
  },
  {
    slug: "monochrome-streets",
    seed: "monochrome-streets",
    year: 2023,
    category: { uk: "Вулична фотографія", en: "Street" },
    title: { uk: "Монохромні вулиці", en: "Monochrome Streets" },
    excerpt: {
      uk: "Чорно-біла вулична серія зі Львова.",
      en: "A black-and-white street series from Lviv.",
    },
    description: {
      uk: "Прогулянки старим Львовом із камерою, зосереджені на контрасті світла й тіні, текстурі бруківки та ритмі повсякденного життя.",
      en: "Walks through old Lviv with a camera, focused on the contrast of light and shadow, cobblestone texture, and the rhythm of everyday life.",
    },
    cover: { width: 1600, height: 2000 },
    gallery: [
      image("monochrome-streets", 1, 1600, 2000, {
        uk: "Перехожий у вузькій вулиці старого міста",
        en: "A passerby in a narrow old-town street",
      }),
      image("monochrome-streets", 2, 2000, 1333, {
        uk: "Тіні від дерев на бруківці",
        en: "Tree shadows cast on cobblestones",
      }),
      image("monochrome-streets", 3, 1600, 2000, {
        uk: "Кав'ярня вранці, чорно-біле фото",
        en: "A café in the morning, black and white",
      }),
    ],
  },
  {
    slug: "quiet-interiors",
    seed: "quiet-interiors",
    year: 2023,
    category: { uk: "Інтер'єр", en: "Interior" },
    title: { uk: "Тихі інтер'єри", en: "Quiet Interiors" },
    excerpt: {
      uk: "Мінімалістичні простори та природне світло.",
      en: "Minimalist spaces and natural light.",
    },
    description: {
      uk: "Дослідження порожніх кімнат, де головним героєм стає світло, що проходить крізь вікна. Серія знята для кількох архітектурних студій.",
      en: "An exploration of empty rooms where the protagonist is the light passing through the windows. Shot for several architecture studios.",
    },
    cover: { width: 2000, height: 1333 },
    gallery: [
      image("quiet-interiors", 1, 2000, 1333, {
        uk: "Порожня кімната з довгими тінями",
        en: "An empty room with long shadows",
      }),
      image("quiet-interiors", 2, 1600, 2000, {
        uk: "Вікно з м'яким ранковим світлом",
        en: "A window with soft morning light",
      }),
      image("quiet-interiors", 3, 2000, 1333, {
        uk: "Мінімалістичний коридор",
        en: "A minimalist hallway",
      }),
    ],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

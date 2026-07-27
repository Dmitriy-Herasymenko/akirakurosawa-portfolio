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
      uk: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    description: {
      uk: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      uk: "Ut enim ad minim veniam, quis nostrud exercitation.",
      en: "Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    description: {
      uk: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      en: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      uk: "Duis aute irure dolor in reprehenderit in voluptate.",
      en: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    description: {
      uk: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
      uk: "Excepteur sint occaecat cupidatat non proident.",
      en: "Excepteur sint occaecat cupidatat non proident.",
    },
    description: {
      uk: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      en: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      uk: "Sed ut perspiciatis unde omnis iste natus error.",
      en: "Sed ut perspiciatis unde omnis iste natus error.",
    },
    description: {
      uk: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
      en: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
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

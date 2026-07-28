export type Category = {
  slug: string;
  label: { uk: string; en: string };
};

export const categories: Category[] = [
  { slug: "landscape", label: { uk: "Пейзаж", en: "Landscape" } },
  { slug: "portrait", label: { uk: "Портрет", en: "Portrait" } },
  { slug: "street", label: { uk: "Вулична фотографія", en: "Street" } },
  { slug: "interior", label: { uk: "Інтер'єр", en: "Interior" } },
];

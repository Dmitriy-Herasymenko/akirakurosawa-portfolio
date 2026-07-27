export type PricingTier = {
  slug: string;
  name: { uk: string; en: string };
  price: { uk: string; en: string };
  unit: { uk: string; en: string };
  description: { uk: string; en: string };
  features: { uk: string[]; en: string[] };
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    slug: "portrait",
    name: { uk: "Портрет", en: "Portrait" },
    price: { uk: "€180", en: "€180" },
    unit: { uk: "/ сесія", en: "/ session" },
    description: {
      uk: "Індивідуальна фотосесія в студії або на локації.",
      en: "A one-on-one shoot in studio or on location.",
    },
    features: {
      uk: [
        "До 90 хвилин зйомки",
        "1 локація або студія",
        "20 оброблених фото",
        "Онлайн-галерея за 5 днів",
      ],
      en: [
        "Up to 90 minutes of shooting",
        "1 location or studio",
        "20 edited photos",
        "Online gallery in 5 days",
      ],
    },
  },
  {
    slug: "editorial",
    name: { uk: "Editorial", en: "Editorial" },
    price: { uk: "€450", en: "€450" },
    unit: { uk: "/ день", en: "/ day" },
    description: {
      uk: "Повний день зйомки для бренду, модельного портфоліо чи журналу.",
      en: "A full-day shoot for a brand, model portfolio, or magazine.",
    },
    features: {
      uk: [
        "До 6 годин зйомки",
        "2–3 локації",
        "50 оброблених фото",
        "Онлайн-галерея за 7 днів",
        "Консультація щодо стилю та кадрування",
      ],
      en: [
        "Up to 6 hours of shooting",
        "2–3 locations",
        "50 edited photos",
        "Online gallery in 7 days",
        "Styling and shot-list consultation",
      ],
    },
    featured: true,
  },
  {
    slug: "campaign",
    name: { uk: "Кампанія", en: "Campaign" },
    price: { uk: "від €900", en: "from €900" },
    unit: { uk: "/ проєкт", en: "/ project" },
    description: {
      uk: "Багатоденний проєкт для рекламної кампанії чи агенції.",
      en: "A multi-day project for an ad campaign or agency.",
    },
    features: {
      uk: [
        "2+ дні зйомки",
        "Необмежена кількість локацій",
        "Повний пакет обробки",
        "Ліцензія на комерційне використання",
        "Персональний менеджер проєкту",
      ],
      en: [
        "2+ shooting days",
        "Unlimited locations",
        "Full editing package",
        "Commercial usage license",
        "Dedicated project manager",
      ],
    },
  },
];

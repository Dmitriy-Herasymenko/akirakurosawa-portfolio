export type FaqItem = {
  question: { uk: string; en: string };
  answer: { uk: string; en: string };
};

export const faqItems: FaqItem[] = [
  {
    question: {
      uk: "Як забронювати дату зйомки?",
      en: "How do I book a shoot date?",
    },
    answer: {
      uk: "Напишіть через форму на сторінці контактів або на пошту — я підтверджу дату протягом доби та надішлю деталі щодо передоплати.",
      en: "Reach out via the contact form or by email — I'll confirm the date within a day and send details on the deposit.",
    },
  },
  {
    question: {
      uk: "Який термін очікування готових фото?",
      en: "How long until I receive the final photos?",
    },
    answer: {
      uk: "Онлайн-галерея з обробленими фото готова за 5–7 днів залежно від пакету. Для кампаній термін узгоджується окремо.",
      en: "The edited online gallery is ready in 5–7 days depending on the package. Campaign timelines are agreed separately.",
    },
  },
  {
    question: {
      uk: "Чи виїжджаєте на зйомку за межі Кракова?",
      en: "Do you travel outside Kraków for shoots?",
    },
    answer: {
      uk: "Так, доступний для зйомок по всій Європі. Витрати на проїзд і проживання обговорюються окремо від вартості пакету.",
      en: "Yes, available for shoots across Europe. Travel and accommodation costs are discussed separately from the package price.",
    },
  },
  {
    question: {
      uk: "Що входить у передоплату?",
      en: "What does the deposit cover?",
    },
    answer: {
      uk: "Передоплата 30% фіксує дату у графіку та враховується у фінальній вартості. Вона не повертається у разі скасування пізніше ніж за 48 годин.",
      en: "A 30% deposit secures the date in the schedule and is credited toward the final price. It's non-refundable if cancelled within 48 hours of the shoot.",
    },
  },
  {
    question: {
      uk: "Чи можна отримати необроблені файли (RAW)?",
      en: "Can I get the unedited RAW files?",
    },
    answer: {
      uk: "За замовчуванням передаються лише оброблені фото. RAW-файли можна додати за окрему домовленість.",
      en: "By default only edited photos are delivered. RAW files can be added by separate arrangement.",
    },
  },
];

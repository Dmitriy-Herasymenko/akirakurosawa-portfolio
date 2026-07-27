"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`${t("submit")} — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="text-sm text-muted">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("namePlaceholder")}
          className="mt-2 w-full border-b border-foreground/20 bg-transparent py-2 outline-none transition-colors focus:border-foreground"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-muted">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("emailPlaceholder")}
          className="mt-2 w-full border-b border-foreground/20 bg-transparent py-2 outline-none transition-colors focus:border-foreground"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-muted">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("messagePlaceholder")}
          className="mt-2 w-full resize-none border-b border-foreground/20 bg-transparent py-2 outline-none transition-colors focus:border-foreground"
        />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="w-fit border border-foreground px-6 py-3 text-sm tracking-wide transition-colors hover:bg-foreground hover:text-background"
        >
          {t("submit")}
        </button>
        <p className="text-xs text-muted">{t("note")}</p>
      </div>
    </form>
  );
}

"use client";

import { usePathname } from "next/navigation";

const EMAIL = "contato@lifetransformers.com.br";

export function ContactForm({
  type,
}: {
  type: "general" | "partnership";
}) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";
  const isPt = locale === "pt";
  const email = EMAIL;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const subject = encodeURIComponent(String(data.subject || ""));
    const body = encodeURIComponent(
      `${isPt ? "Nome" : "Name"}: ${data.name}\n` +
      `${isPt ? "E-mail" : "Email"}: ${data.email}\n` +
      (data.organization ? `${isPt ? "Organizacao" : "Organization"}: ${data.organization}\n` : "") +
      `\n${data.message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
          {isPt ? "Nome" : "Name"} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-card border border-line rounded-xl text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-forest transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
          {isPt ? "E-mail" : "Email"} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-card border border-line rounded-xl text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-forest transition-colors"
        />
      </div>

      {type === "partnership" && (
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-ink mb-1.5">
            {isPt ? "Organizacao" : "Organization"}
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="w-full px-4 py-3 bg-card border border-line rounded-xl text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-forest transition-colors"
          />
        </div>
      )}

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink mb-1.5">
          {isPt ? "Assunto" : "Subject"} *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 bg-card border border-line rounded-xl text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-forest transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          {isPt ? "Mensagem" : "Message"} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-card border border-line rounded-xl text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-forest transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-forest text-cream font-semibold rounded-xl hover:bg-forest-light transition-colors"
      >
        {isPt ? "Enviar" : "Send"}
      </button>
    </form>
  );
}

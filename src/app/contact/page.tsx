"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = t.contactPage.title.includes("İletişim")
        ? "Lütfen adınızı ve soyadınızı belirtin."
        : "Please provide your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = t.contactPage.title.includes("İletişim")
        ? "Lütfen geçerli bir e-posta adresi girin."
        : "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = t.contactPage.title.includes("İletişim")
        ? "Lütfen en az 10 karakterden oluşan bir mesaj yazın."
        : "Please enter a message with at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setServerMessage("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
        setErrors({});
      } else {
        setStatus("error");
        setServerMessage(data.error || t.contactPage.form.errorMessage);
      }
    } catch {
      setStatus("error");
      setServerMessage(t.contactPage.form.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            badge={t.nav.contact}
            title={t.contactPage.title}
            description={t.contactPage.description}
            className="mb-14"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <ScrollReveal delay={0.1}>
            <Card className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot field (hidden from real users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_field">Do not fill this</label>
                  <input
                    id="hp_field"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    {t.contactPage.form.successMessage}
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400 font-medium">
                    {serverMessage || t.contactPage.form.errorMessage}
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                    {t.contactPage.form.name} *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={t.contactPage.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full rounded-lg border bg-[var(--bg-color)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] ${
                      errors.name ? "border-red-500" : "border-[var(--border-color)]"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                    {t.contactPage.form.email} *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={t.contactPage.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full rounded-lg border bg-[var(--bg-color)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] ${
                      errors.email ? "border-red-500" : "border-[var(--border-color)]"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                    {t.contactPage.form.subject}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder={t.contactPage.form.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-color)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                    {t.contactPage.form.message} *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder={t.contactPage.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full rounded-lg border bg-[var(--bg-color)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] resize-y ${
                      errors.message ? "border-red-500" : "border-[var(--border-color)]"
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? t.contactPage.form.submittingBtn : t.contactPage.form.submitBtn}
                </Button>
              </form>
            </Card>
          </ScrollReveal>

          {/* Direct Contact Details */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <Card>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-6 pb-3 border-b border-[var(--border-color)]">
                  {t.footer.contactHeading}
                </h3>

                <div className="space-y-5">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)] block mb-1">
                      E-Posta / Email
                    </span>
                    <a
                      href={`mailto:${t.contactPage.info.directEmail}`}
                      className="font-display text-base font-semibold text-[var(--text-primary)] hover:underline break-all"
                    >
                      {t.contactPage.info.directEmail}
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-color)]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)] block mb-1">
                      Telefon / Phone
                    </span>
                    <a
                      href={`tel:${t.contactPage.info.directPhone.replace(/\s+/g, "")}`}
                      className="font-display text-base font-semibold text-[var(--text-primary)] hover:underline"
                    >
                      {t.contactPage.info.directPhone}
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-color)]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)] block mb-1">
                      Konum / Location
                    </span>
                    <p className="font-display text-base font-semibold text-[var(--text-primary)]">
                      {t.contactPage.info.location}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-color)]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)] block mb-1">
                      {t.contactPage.info.workingHours}
                    </span>
                    <p className="font-body text-sm text-[var(--text-muted)]">
                      {t.contactPage.info.workingHoursVal}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

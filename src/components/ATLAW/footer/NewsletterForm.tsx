import { useState } from "react";
import { ArrowRight } from "./icons";

// NOTE: this is a static Vite/React-Router SPA — there is no backend or
// serverless function, so there is no real subscribe endpoint to POST to and
// no email provider is configured. Rather than fake a "you're on the list"
// success state, we validate the address client-side and then tell the visitor
// the honest status, pointing them at a real inbox. Wire a provider here when
// one exists (e.g. POST to a hosted form/Mailchimp endpoint) and swap the
// "notice" branch for genuine loading/success/error handling.
export const NewsletterForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "invalid" | "notice">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("invalid");
      return;
    }
    setStatus("notice");
  };

  const describedBy = status === "idle" ? undefined : "newsletter-status";

  return (
    <form onSubmit={handleSubmit} className="w-full" aria-label="Newsletter signup">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Email address"
          value={email}
          aria-invalid={status === "invalid"}
          aria-describedby={describedBy}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          className="h-[54px] w-full rounded-full border border-white/25 bg-white/10 px-6 font-sans text-[15px] text-white placeholder:text-white/50 outline-none transition focus:border-[#B88A2D] focus:ring-2 focus:ring-[#B88A2D]/30 sm:w-[260px] lg:w-[280px]"
        />
        <button
          type="submit"
          className="group inline-flex h-[54px] shrink-0 items-center justify-center rounded-full bg-white px-8 font-sans text-[15px] font-medium text-[#0B1F3A] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#FFFFFF] hover:shadow-[0_8px_24px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3A]"
        >
          Subscribe
          <ArrowRight className="ml-2 group-hover:translate-x-1" />
        </button>
      </div>

      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={`mt-2.5 text-[13px] leading-[1.5] transition ${
          status === "idle" ? "h-0 overflow-hidden opacity-0" : "opacity-100"
        } ${status === "invalid" ? "text-[#F2A3A9]" : ""} ${
          status === "notice" ? "text-white/75" : ""
        }`}
      >
        {status === "invalid" && "Please enter a valid email address."}
        {status === "notice" && (
          <>
            Subscriptions are launching soon — email us at{" "}
            <a
              href="mailto:info@atlawgroup.com"
              className="font-medium text-[#B88A2D] underline underline-offset-2 transition hover:text-white"
            >
              info@atlawgroup.com
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
};

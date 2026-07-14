import { useEffect, useSyncExternalStore } from "react";
import { INTAKE_FORMS } from "../../data/intake";

// Tiny external store so any button anywhere can open the intake chooser
// without prop drilling or context. Mount <IntakeModal /> once at app root.
let isOpen = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function openIntakeModal() {
  isOpen = true;
  emit();
}

export function closeIntakeModal() {
  isOpen = false;
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return isOpen;
}

const ArrowRight = () => (
  <svg
    aria-hidden="true"
    className="h-[14px] w-[14px] shrink-0 opacity-60 transition-transform duration-200 group-hover:translate-x-1 group-hover:opacity-100"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

export const IntakeModal = (): JSX.Element | null => {
  const open = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeIntakeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      aria-labelledby="intake-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center p-5"
      role="dialog"
    >
      <button
        aria-label="Close"
        className="absolute inset-0 h-full w-full cursor-default bg-[rgba(8,15,30,0.72)] backdrop-blur-sm"
        onClick={closeIntakeModal}
        tabIndex={-1}
        type="button"
      />

      <div className="intake-modal-rise relative w-full max-w-[420px] overflow-hidden rounded-[20px] border border-white/10 bg-[#0e1b33] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
        <div className="flex items-start justify-between gap-4 px-7 pt-7">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6A04A]">
              Free Case Review
            </p>
            <h2
              className="mt-2 font-serifDisplay text-[26px] leading-[1.1] tracking-[-0.01em] text-white"
              id="intake-modal-title"
            >
              Choose your language
            </h2>
          </div>
          <button
            aria-label="Close"
            className="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A04A]"
            onClick={closeIntakeModal}
            type="button"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeWidth={1.5} />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-3 px-7 pb-7 pt-6">
          {INTAKE_FORMS.map((form) => (
            <a
              className="group flex items-center justify-between gap-3 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-4 transition-all duration-200 hover:border-[#C6A04A]/60 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A04A]"
              dir={form.dir}
              href={form.url}
              key={form.url}
              onClick={closeIntakeModal}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="flex flex-col">
                <span className="font-serifDisplay text-[20px] leading-none text-white">
                  {form.lang}
                </span>
                <span className="mt-1 font-sans text-[11px] uppercase tracking-[0.12em] text-white/40">
                  {form.hint}
                </span>
              </span>
              <ArrowRight />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

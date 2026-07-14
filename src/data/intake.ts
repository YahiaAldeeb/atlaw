// Intake / free case review forms (cxplegaltech), one per language.
// Client-confirmed routing — replaces the old single Typeform link.
export interface IntakeForm {
  lang: string; // native language label shown in the chooser
  hint: string; // English hint under the label
  url: string;
  dir: "ltr" | "rtl";
}

export const INTAKE_FORMS: IntakeForm[] = [
  {
    lang: "English",
    hint: "English",
    url: "https://api.cxplegaltech.com/widget/form/p8I425t1xUJ9BYSldnyS",
    dir: "ltr",
  },
  {
    lang: "العربية",
    hint: "Arabic",
    url: "https://api.cxplegaltech.com/widget/form/IbOrx6zWbMFldG88t1VR",
    dir: "rtl",
  },
  {
    lang: "Español",
    hint: "Spanish",
    url: "https://api.cxplegaltech.com/widget/form/jSJZNzL8NODrT4QaGPOL",
    dir: "ltr",
  },
];

// Default direct link (English) for contexts that need a plain href.
export const INTAKE_URL = INTAKE_FORMS[0].url;

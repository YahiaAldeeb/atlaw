import type { PracticeAreaPI } from "./types";
import { personalInjuryData } from "./personal-injury";
import { autoAccidentsData } from "./auto-accidents";
import { medicalMalpracticeData } from "./medical-malpractice";
import { wrongfulDeathData } from "./wrongful-death";
import { premisesLiabilityData } from "./premises-liability";
import { dogBitesData } from "./dog-bites";
import { workersCompensationData } from "./workers-compensation";

export const practiceAreaBySlug: Record<string, PracticeAreaPI> = {
  "personal-injury": personalInjuryData,
  "auto-accidents": autoAccidentsData,
  "medical-malpractice": medicalMalpracticeData,
  "wrongful-death": wrongfulDeathData,
  "premises-liability": premisesLiabilityData,
  "dog-bites": dogBitesData,
  "workers-compensation": workersCompensationData,
};

export const allPracticeAreas: PracticeAreaPI[] = Object.values(practiceAreaBySlug);

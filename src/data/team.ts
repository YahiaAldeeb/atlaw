export type TeamMember = {
  name: string;
  title: string;
  photo: string;
  role: "founder" | "attorney" | "staff";
};

export const founder: TeamMember = {
  name: "Dewnya Bazzi",
  title: "Founder & CEO",
  photo: "/assets/team/dewnya-bazzi.avif",
  role: "founder",
};

export const attorneys: TeamMember[] = [
  {
    name: "Deanna Leila",
    title: "Attorney — PI & Criminal",
    photo: "/assets/team/deanna-leila.avif",
    role: "attorney",
  },
  {
    name: "Hassan Harp",
    title: "Attorney",
    photo: "/assets/team/hassan-harp.avif",
    role: "attorney",
  },
  {
    name: "Ahmad Berry",
    title: "Attorney",
    photo: "/assets/team/ahmad-berry.avif",
    role: "attorney",
  },
];

export const staff: TeamMember[] = [
  {
    name: "Lamis Baydoun",
    title: "Senior Client Advocate",
    photo: "/assets/team/lamis-baydoun.avif",
    role: "staff",
  },
  {
    name: "Abeer Almalahi",
    title: "Paralegal",
    photo: "/assets/team/abeer-almalahi.avif",
    role: "staff",
  },
  {
    name: "Mazen Alsamawi",
    title: "Paralegal",
    photo: "/assets/team/mazen-alsamawi.avif",
    role: "staff",
  },
  {
    name: "Madison Misovich",
    title: "Client Advocate",
    photo: "/assets/team/madison-misovich.avif",
    role: "staff",
  },
];

export const members: TeamMember[] = [founder, ...attorneys, ...staff];

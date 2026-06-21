import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";

export const DogBitesPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Dog Bite Injury Attorney | ATLAW Group";
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0e1b33] pt-24 text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1
            className="font-serifDisplay text-4xl tracking-tight md:text-5xl"
            style={{ fontVariationSettings: "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0" }}
          >
            Dog Bite Injuries
          </h1>
          <p className="mt-6 font-sans text-lg text-white/70">
            Full page coming soon. If you or a loved one suffered a dog bite injury,
            contact us for a free consultation.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

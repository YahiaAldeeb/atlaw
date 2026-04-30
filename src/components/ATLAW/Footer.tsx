const links = [
  "About Us",
  "Capabilities",
  "News & Insights",
  "Global Reach",
  "Contact",
  "Careers",
  "Healthcare",
  "Newsletter",
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 border-b border-ivory/15 pb-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <img alt="ATLAW wordmark" className="h-7 w-auto" src="/assets/atlaw-wordmark.svg" />
            <p className="mt-4 max-w-sm text-sm text-ivory/70">
              A global law firm using advanced technology and data to provide expert legal services
              and solutions.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-xs uppercase tracking-[0.2em] text-ivory/60">Links</h3>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {links.map((link) => (
                <a className="transition hover:text-accent" href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-xs uppercase tracking-[0.2em] text-ivory/60">Social</h3>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="transition hover:text-accent" href="#">
                Instagram
              </a>
              <a className="transition hover:text-accent" href="#">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="pt-6 text-xs text-ivory/60">Copyright © 2022 ATLAW. All rights reserved.</p>
      </div>
    </footer>
  );
};

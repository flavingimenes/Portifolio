import { contactLinks } from "./data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#16181B] text-[#8A8C8F]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-6 py-8 text-[13px] sm:flex-row sm:items-center sm:justify-between">
        <p>
          Flávio Gabriel — {year}
        </p>
        <div className="flex gap-5">
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-[#FAFAF8]"
          >
            GitHub
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-[#FAFAF8]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contactLinks.email}`}
            className="transition-colors hover:text-[#FAFAF8]"
          >
            {contactLinks.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

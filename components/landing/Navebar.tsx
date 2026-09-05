import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { StickyNote } from 'lucide-react';


export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="flex items-center justify-between border border-black/10 bg-white/0 px-5 py-3 shadow-sm backdrop-blur-xl">
        <div className=" pl-10 flex items-center gap-6 text-black">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-all duration-200 hover:scale-110 hover:opacity-60"
          >
            <FaGithub size={38} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-all duration-200 hover:scale-110 hover:opacity-60"
          >
            <FaLinkedinIn size={38} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-all duration-200 hover:scale-110 hover:opacity-60"
          >
            <FaInstagram size={38} />
          </a>
        </div>


        <div className="ml-auto flex items-center gap-6 text-sm text-black/60">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-all duration-200 hover:scale-110 hover:opacity-60 text-yellow-600"
          >
            <MdEmail size={38} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-all duration-200 hover:scale-110 hover:opacity-60 text-yellow-600 flex items-center gap-2"
          >
            <StickyNote size={34} />
            <p className="font-semibold tracking-tight text-yellow-600 text-[18px] pt-1">
                Curriculo
            </p>
          </a>
            <span>
                |
            </span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-all duration-200 hover:scale-110 hover:opacity-60 text-yellow-600"
          >
            <FaGithub size={38} />
          </a>
        </div>
      </nav>
    </header>
  );
}
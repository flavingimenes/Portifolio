
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-black">
      <div className="w-full max-w-md text-center">
        <span className="text-sm font-medium uppercase tracking-[0.25em] text-black/40">
          Erro 404
        </span>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
          Página não encontrada
        </h1>

        <p className="mt-5 text-sm leading-relaxed text-black/50 md:text-base">
          A página que você está procurando não existe ou foi movida para outro
          lugar.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full border border-black/10 bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/90"
        >
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}

// components/EmDesenvolvimento.tsx

export default function EmDesenvolvimento() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-gray-950 px-4 text-center">
      <h1 className="text-2xl font-bold text-white md:text-4xl">
        Em obras, volte depois! <span className="text-[#2F5D50]">🚧</span>
      </h1>

      <img
        src="https://media1.giphy.com/media/Sm9AfJRiZofjlrkAAl/giphy.gif"
        alt="Gato trabalhando no computador"
        className="w-64 rounded-lg md:w-80"
      />
    </div>
  );
}
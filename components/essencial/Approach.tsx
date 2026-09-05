import { approachPoints } from "./data";

export function Approach() {
  return (
    <section className="border-t border-[#E4E2DD]">
      <div className="mx-auto grid max-w-[1100px] gap-6 px-6 py-16 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-24">
        <h2
          className="text-[22px] text-[#16181B]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Como trabalho
        </h2>

        <div className="grid gap-8 sm:grid-cols-3">
          {approachPoints.map((point) => (
            <div key={point.title}>
              <p className="text-[16px] text-[#16181B]">{point.title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6E7075]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

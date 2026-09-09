import { approachPoints } from "./data";

export function Approach() {
  return (
    <section className="border-t border-[#E4E2DD]">
      <div className="mx-auto grid max-w-275 gap-10 px-6 py-16 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-24">
        <h2
          className="text-3xl leading-tight text-[#16181B] font-sf"
        >
          Como trabalho
        </h2>

        <div className="grid sm:grid-cols-3">
          {approachPoints.map((point, index) => (
            <div
              key={point.title}
              className={`
                py-6
                sm:px-6 sm:py-2
                ${
                  index !== 0
                    ? "border-t border-[#E4E2DD] sm:border-l sm:border-t-0"
                    : ""
                }
              `}
            >
              <h3 className="text-[19px] font-sfMedium text-[#16181B]">
                {point.title}
              </h3>

              <p className="mt-3 max-w-xs text-[14px] leading-6 text-[#77787C]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { experienceItems } from "./data";

export function Experience() {
  return (
    <section id="formacao" className="border-t border-[#E4E2DD]">
      <div className="mx-auto grid max-w-[1100px] gap-6 px-6 py-16 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-24">
        <h2
          className="text-[22px] text-[#16181B]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Formação
        </h2>

        <div>
          {experienceItems.map((item) => (
            <div
              key={item.title}
              className="grid gap-1 border-t border-[#E4E2DD] py-6 first:border-t-0 first:pt-0 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6"
            >
              <p className="text-[13px] text-[#6E7075]">{item.period}</p>
              <div>
                <p className="text-[16px] text-[#16181B]">
                  {item.title}
                  <span className="text-[#6E7075]"> — {item.place}</span>
                </p>
                <p className="mt-2 max-w-[56ch] text-[15px] leading-relaxed text-[#3E4044]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

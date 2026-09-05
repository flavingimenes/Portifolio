import { skillGroups } from "./data";

export function Skills() {
  return (
    <section id="stack" className="border-t border-[#E4E2DD]">
      <div className="mx-auto grid max-w-[1100px] gap-6 px-6 py-16 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-24">
        <h2
          className="text-[22px] text-[#16181B]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Stack
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[13px] text-[#6E7075]">{group.label}</p>
              <ul className="mt-2 space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-[16px] text-[#16181B]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

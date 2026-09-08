import { skillGroups } from "./data";

export function Skills() {
  return (
    <section id="stack" className="border-t border-[#E4E2DD]">
      <div className="mx-auto grid max-w-275 gap-6 px-6 py-16 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-24">
        <h2
          className="text-3xl text-[#16181B] font-sf"
        >
          Stack
        </h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[14px] text-[#6E7075]">{group.label}</p>

              <ul className="mt-3 space-y-2">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 text-[16px] text-[#16181B]"
                    >
                      <Icon
                        className="h-4.5 w-4.5 shrink-0 text-[#6E7075]"
                        aria-hidden="true"
                      />

                      <span>{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
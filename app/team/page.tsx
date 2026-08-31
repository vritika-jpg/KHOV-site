import Band from "@/components/Band";
import FounderCard from "@/components/team/FounderCard";
import type { WordmarkLetter } from "@/lib/wordmark-letters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — KHOV Group",
};

const team: {
  name: string;
  role: string;
  initials: string;
  letter: WordmarkLetter;
  // Drop a headshot in /public/team/ and add its path here, e.g. "/team/megan.jpg".
  // Leave undefined to keep showing the initials placeholder.
  photo?: string;
}[] = [
  {
    name: "MEGAN HUBER",
    role: "Product",
    initials: "MH",
    letter: "H",
  },
  {
    name: "KHADIDIATOU DIA",
    role: "Operations",
    initials: "KD",
    letter: "K",
  },
  {
    name: "VRITIKA NARRA",
    role: "Finance and legal",
    initials: "VN",
    letter: "V",
  },
  {
    name: "O.J. IDOGUN",
    role: "Business development",
    initials: "OI",
    letter: "O",
  },
];

export default function Team() {
  return (
    <div>
      <Band tone="canvas" className="pt-24">
        <div className="grid gap-4 max-w-[640px]">
          <span className="text-xs font-semibold uppercase tracking-[1.5px] text-muted">
            Team
          </span>
          <h1 className="font-display text-[56px] leading-[1.05] tracking-[-2px] text-ink m-0">
            Four grads, one consulting firm
          </h1>
          <p className="text-base text-body m-0">
            We hold master&apos;s degrees in information systems and artificial intelligence
            from Johns Hopkins. We started KHOV Group to help businesses in the DMV area put
            AI to work.
          </p>
        </div>
      </Band>

      <Band tone="canvas" pad="none">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-24">
          {team.map((member) => (
            <FounderCard key={member.name} {...member} />
          ))}
        </div>
      </Band>
    </div>
  );
}

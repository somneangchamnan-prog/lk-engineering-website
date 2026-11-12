import Image from "next/image";
import { UserRound } from "lucide-react";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex h-full flex-col border border-steel-200 bg-white">
      <div className="relative aspect-[4/3] bg-steel-100">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-steel-400">
            <UserRound aria-hidden className="h-14 w-14" strokeWidth={1.2} />
            <span className="label !text-[0.6rem] text-amber-ink">[TEAM PHOTO]</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold">{member.name}</h3>
        <p className="label mt-1 text-volt-dark">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-steel-600">{member.bio}</p>
      </div>
    </article>
  );
}

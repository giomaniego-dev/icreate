import { PROFILE_SKILL_PILL_BG } from "./profile-theme";
import { ProfilePanel } from "./ProfilePanel";

type ProfileSkillsPanelProps = {
  title?: string;
  skills: string[];
};

export function ProfileSkillsPanel({
  title = "Skills",
  skills,
}: ProfileSkillsPanelProps) {
  return (
    <ProfilePanel className="flex h-full min-h-0 flex-col">
      <h3 className="text-center font-display text-[0.6875rem] font-normal uppercase tracking-[0.08em] text-black sm:text-xs md:text-[0.8125rem]">
        {title}
      </h3>
      <ul className="mt-5 flex flex-1 flex-col justify-center gap-2.5 sm:mt-6 md:mt-7 md:gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded px-4 py-2.5 text-center font-sans text-[0.6875rem] font-normal text-black sm:py-2.5 sm:text-xs md:py-3 md:text-[0.8125rem]"
            style={{ backgroundColor: PROFILE_SKILL_PILL_BG }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </ProfilePanel>
  );
}

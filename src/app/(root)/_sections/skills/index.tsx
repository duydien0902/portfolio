import { idScroll } from "@/utils/contants";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { SKILLS } from "@/app/(root)/_sections/skills/data";

export default function SkillsSection() {
  return (
    <section>
      <Container>
        <div className="pt-16" id={idScroll.SKILLS}>
          <div className="pt-28">
            <Title
              TitleBg="skills"
              classNameTitleBg="left-1/2 -translate-x-1/2"
              classNameTitle="text-center"
              classNameDes="text-center"
              description="Strong technical skills in software development."
            >
              skills
            </Title>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {SKILLS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    className="col-span-1 flex flex-col items-center gap-4 py-4"
                    key={item.title}
                  >
                    <div className="p-2 dark:bg-foreground border border-muted-foreground bg-background rounded-full">
                      <Icon className="dark:bg-foreground bg-background size-8" />
                    </div>
                    <div className="font-bold">{item.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

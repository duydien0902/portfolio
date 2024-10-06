import { idScroll } from "@/utils/contants";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { EDUCATION } from "@/app/(root)/_sections/education/data";
import EducationCard from "@/app/(root)/_sections/education/_components/education-card";

export default function EducationSection() {
  return (
    <section>
      <Container>
        <div className="pt-16" id={idScroll.EDUCATION}>
          <div className="pt-28">
            <Title
              TitleBg="education"
              classNameTitleBg="left-1/2 -translate-x-1/2 sm:top-2"
              classNameTitle="text-center"
              classNameDes="text-center my-7 max-w-4xl mx-auto"
              description="With a solid educational background, I have developed skills and expertise in software development, particularly in frontend technologies."
            >
              education
            </Title>
            <div className="grid grid-cols-2 gap-6 pt-2">
              {EDUCATION.map((item) => (
                <EducationCard
                  key={item.school}
                  range_yaer={item.range_yaer}
                  school={item.school}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

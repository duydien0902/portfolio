import AboutMeSection from "@/app/(root)/_sections/about-me";
import BannerSection from "@/app/(root)/_sections/banner";
import ContactSection from "@/app/(root)/_sections/contact";
import ProjectsSection from "@/app/(root)/_sections/projects";
import EducationSection from "@/app/(root)/_sections/education";

import SkillsSection from "@/app/(root)/_sections/skills";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <AboutMeSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

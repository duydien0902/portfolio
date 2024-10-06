import { idScroll } from "@/utils/contants";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import ProjectCard from "@/app/(root)/_sections/projects/_components/project-card";

import { PRODUCTS } from "@/app/(root)/_sections/projects/data";

export default function ProjectsSection() {
  return (
    <section>
      <Container>
        <div className="pt-16" id={idScroll.PROJECTS}>
          <div className="pt-28">
            <Title
              TitleBg="projects"
              classNameTitleBg="left-1/2 -translate-x-1/2 sm:top-2"
              classNameTitle="text-center"
              classNameDes="text-center my-7 max-w-4xl mx-auto"
              description="Below are the projects I have worked on."
            >
              my projects
            </Title>
            <div className="h-screen overflow-hidden overflow-y-auto">
              <div className="py-4 grid grid-cols-1 gap-x-6">
                {PRODUCTS.map((item) => (
                  <div className="col-span-1 pt-28" key={item.id} id={item.id}>
                    <div className="border p-4 shadow-md rounded-lg">
                      <ProjectCard
                        description={item.description}
                        tech_stack={item.tech_stack}
                        title={item.title}
                        videoUrl={item.video_url}
                        timeLine={item.time_line}
                        deployUrl={item.deploy_url}
                        sourceUrl={item.source_url}
                        isDone={item.isDone}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

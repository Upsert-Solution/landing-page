import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import {
  Button,
  CardContainer,
  Flex,
  Stagger,
  StaggerItem,
} from "@/src/components/ui";
import { recentProjects } from "../_constants/projects";
import ProjectPreview from "@/app/_components/ui/project-preview";

function ProjectSection() {
  return (
    <Flex as="div" align="stretch" className="flex-col gap-12 lg:gap-16">
      <Flex className="flex-col items-center text-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:gap-6 flex-wrap">
        <Flex className="flex-col items-center sm:items-start gap-3">
          <h2>Recent Splashes</h2>
          <p className="text-text-secondary">
            A look at some of our favorite creative collaborations.
          </p>
        </Flex>
        <Link href="/projects">
          <Button
            variant="secondary"
            className="border-2 border-brand-secondary text-text-primary font-bold px-6 py-3 text-base rounded-full whitespace-nowrap"
          >
            View All Projects
          </Button>
        </Link>
      </Flex>

      <Stagger className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {recentProjects.slice(0, 3).map((project) => (
          <StaggerItem key={project.title}>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <CardContainer
                direction="col"
                align="start"
                gap="none"
                elevated
                className="h-full overflow-hidden p-0 rounded-3xl transition-transform duration-300 group-hover:-translate-y-1"
              >
                <ProjectPreview
                  url={project.url}
                  fallbackImage={project.fallbackImage}
                  title={project.title}
                  accentClass={project.accentClass}
                />
                <Flex className="flex-col items-start gap-2 p-6">
                  <Flex className="w-full items-center justify-between gap-2">
                    <h4>{project.title}</h4>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-primary"
                      aria-hidden="true"
                    />
                  </Flex>
                  <p className="text-text-muted leading-relaxed">
                    {project.description}
                  </p>
                </Flex>
              </CardContainer>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Flex>
  );
}

export default ProjectSection;
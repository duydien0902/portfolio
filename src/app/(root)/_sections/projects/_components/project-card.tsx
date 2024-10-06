"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import ProjectVideo from "@/app/(root)/_sections/projects/_components/project-video";

interface ProjectCardProps {
  title: string;
  description: string;
  tech_stack: string[];
  videoUrl: string;
  timeLine: string;
  deployUrl: string;
  sourceUrl: string;
  isDone: boolean;
}

export default function ProjectCard({
  description,
  tech_stack,
  title,
  videoUrl,
  timeLine,
  deployUrl,
  sourceUrl,
  isDone,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 items-start">
      <div className="basis-full lg:basis-1/2 h-full">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest">
              {title}
            </h2>
            <p className="capitalize font-bold !mt-2 bg-slate-300 dark:bg-slate-600 w-fit px-1">
              {timeLine}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg">{description}</p>
            <ul className="text-sm flex gap-x-6 flex-wrap">
              {tech_stack.map((tech) => (
                <li
                  key={tech}
                  className="relative after:absolute after:content-['|'] after:-right-3.5 after:-top-[1px] after:font-bold after:text-foreground last:after:content-[''] "
                >
                  {tech}
                </li>
              ))}
            </ul>
            <p className="capitalize text-sm font-semibold">
              {isDone ? (
                <span className="dark:text-yellow-300 text-yellow-500">
                  completed
                </span>
              ) : (
                <span className="dark:text-green-400 text-green-700">
                  in progress
                </span>
              )}
            </p>
          </div>
          <div className="w-full flex items-center gap-4">
            {deployUrl ? (
              <Link
                href={deployUrl}
                target="_blank"
                className="capitalize w-full h-10 bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center rounded-md font-semibold"
              >
                Live
              </Link>
            ) : (
              <Button className="capitalize w-full h-10 bg-yellow-400/80 hover:bg-yellow-400/80 text-black cursor-not-allowed font-semibold">
                live
              </Button>
            )}
            {sourceUrl ? (
              <Link
                href={sourceUrl}
                target="_blank"
                className="capitalize w-full h-10 bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center rounded-md font-semibold"
              >
                source
              </Link>
            ) : (
              <Button className="capitalize w-full h-10 bg-yellow-400/80 hover:bg-yellow-400/80 text-black cursor-not-allowed font-semibold">
                source
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="basis-full lg:basis-1/2">
        <ProjectVideo videoUrl={videoUrl} />
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import React, { ElementType } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  full?: boolean;
}

export default function Container({
  children,
  className,
  as: Element = "div",
  full = false,
}: ContainerProps) {
  return (
    <Element
      className={cn(className, {
        "max-w-7xl w-full px-4 mx-auto sm:px-6": !full,
      })}
    >
      {children}
    </Element>
  );
}

"use client";

import React, { useCallback, useEffect } from "react";

import { cn } from "@/lib/utils";

import { useHeaderContext } from "@/contexts/header-context";

import { HEADER } from "@/components/header/data";
import ButtonScroll from "@/components/button-scroll/button-scroll";

interface ListItemHeaderProps {
  className?: string;
  onClose?: () => void;
  onSetFixed?: (v: boolean) => void;
}

export default function ListItemHeader({
  className,
  onClose,
  onSetFixed,
}: ListItemHeaderProps) {
  const { isActive, setIsActive } = useHeaderContext();

  const handleScroll = useCallback(() => {
    const sections = HEADER.link.map((item) =>
      document.getElementById(item.title)
    );
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      if (section) {
        const { offsetTop, clientHeight } = section;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + clientHeight
        ) {
          setIsActive(section.id);
        }
      }
    });

    const headerOffsetTop = 300;
    if (scrollPosition > headerOffsetTop) {
      onSetFixed && onSetFixed(true);
    } else {
      onSetFixed && onSetFixed(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul className={cn("flex gap-6 lg:gap-8", className)}>
      {HEADER.link.map((item) => (
        <li
          key={item.title}
          className={cn(
            "relative capitalize font-medium text-base md:text-lg after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:rounded-full after:bg-red-600 dark:after:bg-yellow-300 after:w-full after:transition-transform after:ease-in-out after:duration-300 after:origin-center after:scale-x-0 hover:after:scale-x-100",
            {
              "after:bg-red-600 dark:after:bg-yellow-300 after:scale-x-100":
                isActive === item.title,
            }
          )}
        >
          <ButtonScroll
            className={cn("w-full flex justify-start md:text-xl", {
              "font-bold text-red-600 dark:text-yellow-300":
                isActive === item.title,
            })}
            idScroll={item.title}
            onClose={onClose}
          >
            {item.title}
          </ButtonScroll>
        </li>
      ))}
    </ul>
  );
}

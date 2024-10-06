"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import HeaderProvider from "@/contexts/header-context";

import { ModeToggle } from "@/components/mode-toggle";
import Container from "@/components/ui/container";

import ListItemHeader from "@/components/header/components/list-item-header";
import Mobile from "@/components/header/components/mobile";
import { HEADER } from "@/components/header/data";
import ButtonScroll from "@/components/button-scroll/button-scroll";
import { idScroll } from "@/utils/contants";

export default function Header() {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const onSetFixed = (value: boolean) => {
    setIsFixed(value);
  };

  return (
    <header
      className={cn(
        "flex h-24 items-center w-full transition-all duration-500 absolute z-50 ",
        {
          "fixed h-16 top-0 bg-background dark:border-b shadow-lg animate-fadeIn":
            isFixed,
        }
      )}
    >
      <HeaderProvider>
        <Container>
          <div className="flex justify-between items-center">
            <div className="block sm:hidden">
              <Mobile />
            </div>
            <ButtonScroll
              idScroll={idScroll.HOME}
              className="capitalize px-3 border-gray-400 dark:border-gray-600 h-12 border rounded-full font-semibold text-xl lg:text-2xl"
            >
              {HEADER.name}
            </ButtonScroll>
            <div className="hidden sm:block">
              <ListItemHeader onSetFixed={onSetFixed} />
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
        </Container>
      </HeaderProvider>
    </header>
  );
}

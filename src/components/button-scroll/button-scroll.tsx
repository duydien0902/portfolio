"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { useScrollToSection } from "@/hooks/useScrollToSection";

import { Button } from "@/components/ui/button";

interface ButtonScrollProps {
  idScroll: string;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export default function ButtonScroll({
  idScroll,
  className,
  children,
  onClose,
}: ButtonScrollProps) {
  const { handleScrollToSection } = useScrollToSection();
  return (
    <Button
      onClick={() => {
        handleScrollToSection(idScroll);
        onClose && onClose();
      }}
      className={cn(
        "bg-none text-foreground bg-background px-0 text-base h-2 capitalize shadow-none hover:bg-background",
        className
      )}
    >
      {children}
    </Button>
  );
}

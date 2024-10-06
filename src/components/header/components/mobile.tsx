"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "@/components/ui/icons";
import { HEADER } from "@/components/header/data";
import ListItemHeader from "@/components/header/components/list-item-header";

export default function Mobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);
  const onClose = () => setIsOpen(false);
  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="capitalize font-semibold text-xl lg:text-2xl">
            {HEADER.name}
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <ListItemHeader className="flex flex-col" onClose={onClose} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

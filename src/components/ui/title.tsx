import React from "react";
import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  description?: string | undefined;
  classNameTitle?: string;
  classNameDes?: string;
  TitleBg?: string;
  classNameTitleBg?: string;
}

export default function Title({
  children,
  description,
  classNameTitle,
  classNameTitleBg,
  classNameDes,
  TitleBg,
}: TitleProps) {
  return (
    <div className="w-full relative">
      {TitleBg && (
        <div
          className={cn(
            "absolute -z-10 top-7 sm:top-3 capitalize text-6xl sm:text-8xl dark:text-gray-900/90 text-gray-200/90 font-bold",
            classNameTitleBg
          )}
        >
          {TitleBg}
        </div>
      )}
      <div>
        <h2
          className={cn(
            "text-center capitalize font-bold text-5xl",
            classNameTitle
          )}
        >
          {children}
        </h2>
        {description && (
          <p
            className={cn(
              "text-center my-6 sm:my-8 dark:text-gray-400 text-gray-600 font-medium text-xl",
              classNameDes
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

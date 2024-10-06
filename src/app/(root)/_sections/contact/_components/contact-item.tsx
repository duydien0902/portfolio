import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ContactItemProps {
  title: string;
  Icon: ({ className }: { className?: string }) => JSX.Element;
  value: string;
}

export default function ContactItem({ Icon, title, value }: ContactItemProps) {
  return (
    <div className="col-span-1 mx-auto space-y-6 flex flex-col items-center">
      <div className="p-8 w-fit bg-background border border-gray-500 rounded-full">
        <Icon
          className={cn("size-7 fill-white dark:fill-black", {
            "fill-black dark:fill-white ": title === "github",
          })}
        />
      </div>
      <h3 className="text-center uppercase font-semibold">{title}</h3>
      {!value.includes("https://") ? (
        <p
          className={cn("text-center text-base", {
            "dark:text-gray-400 text-gray-500": title === "address",
          })}
        >
          {value}
        </p>
      ) : (
        <Link
          href={value}
          target="_blank"
          className=" text-blue-600 hover:text-blue-700 hover:underline"
        >
          {value}
        </Link>
      )}
    </div>
  );
}

import Link from "next/link";
import React from "react";

import Container from "@/components/ui/container";
import {
  GitIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MoveRightIcon,
  PhoneIcon,
  LinkedinIcon,
} from "@/components/ui/icons";
import { FOOTER } from "@/components/footer/data";
import ButtonScroll from "@/components/button-scroll/button-scroll";

export default function Footer() {
  const keys = Object.keys(FOOTER);
  return (
    <footer>
      <Container className="py-28 font-semibold">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-12 md:col-span-1 space-y-9">
            <h4 className="capitalize text-2xl">
              {keys[0].split("_").join(" ")}
            </h4>
            <p className="w-full md:max-w-56 dark:text-gray-400 text-gray-700">
              {FOOTER.about_me}
            </p>
            <div className="flex gap-4 md:pt-9">
              <div className="p-3 border rounded-md">
                <Link href="https://github.com/duydien0902" target="_blank">
                  <GitIcon className="fill-foreground" />
                </Link>
              </div>
              <div className="p-3 border rounded-md">
                <Link
                  href="https://www.linkedin.com/in/duy-dien-dao-a527a2215"
                  target="_blank"
                >
                  <LinkedinIcon className="fill-foreground" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-11 md:mt-0 col-span-12 md:col-span-1 space-y-9">
            <h4 className="capitalize text-2xl">{keys[1]}</h4>
            <ul className="space-y-4">
              {FOOTER.link.map((item) => (
                <li key={item.title} className="capitalize">
                  <ButtonScroll
                    className="flex items-center gap-x-2 font-semibold dark:text-gray-400 text-gray-700"
                    idScroll={item.title}
                  >
                    <MoveRightIcon />
                    <p>{item.title}</p>
                  </ButtonScroll>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-11 md:mt-0 col-span-12 md:col-span-1 space-y-9">
            <h4 className="capitalize text-2xl">{keys[2]}</h4>
            <ul className="space-y-4 dark:text-gray-400 text-gray-700">
              {FOOTER.products.map((item) => (
                <li key={item.id} className="capitalize">
                  <ButtonScroll
                    className="flex items-center gap-x-2 font-semibold dark:text-gray-400 text-gray-700"
                    idScroll={item.id}
                  >
                    <MoveRightIcon />
                    <p>{item.title}</p>
                  </ButtonScroll>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-11 md:mt-0 col-span-12 md:col-span-1 space-y-9">
            <h4 className="capitalize text-2xl">
              {keys[3].split("_").join(" ")}
            </h4>
            <ul className="space-y-4 dark:text-gray-400 text-gray-700">
              <li className="flex items-start gap-x-4">
                <MapPinIcon className="flex-shrink-0 mt-1" />
                <p>{FOOTER.contact.location}</p>
              </li>
              <li className="flex items-center gap-x-4">
                <PhoneIcon />
                <p>{FOOTER.contact.phone}</p>
              </li>
              <li className="flex items-center gap-x-4">
                <MailIcon className="flex-shrink-0" />
                <p>{FOOTER.contact.email}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-24 text-center dark:text-gray-400 text-gray-700">
          Copyright ©2024 All rights reserved | This portfolio is made with
          enthusiasm by me
        </div>
      </Container>
    </footer>
  );
}

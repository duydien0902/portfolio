import Image from "next/image";

import { idScroll } from "@/utils/contants";

import Container from "@/components/ui/container";
import ButtonScroll from "@/components/button-scroll/button-scroll";

export default function BannerSection() {
  return (
    <section>
      <Container>
        <div className="h-screen" id={idScroll.HOME}>
          <div className="h-full grid grid-cols-12 gap-4">
            <div className="col-span-5 hidden lg:flex items-center">
              <div className="space-y-6">
                <p className="uppercase text-yellow-500 font-semibold">
                  hello!
                </p>
                <p className="text-5xl sm:text-6xl font-bold leading-[3.5rem] sm:leading-[4.5rem]">
                  I'm a{" "}
                  <span className="text-yellow-500">frontend developer</span>{" "}
                  based in HCM city.{" "}
                </p>
                <ButtonScroll
                  className="bg-yellow-500 hover:bg-yellow-400 text-black uppercase font-semibold h-14 rounded-3xl px-4"
                  idScroll={idScroll.ABOUT}
                >
                  Let's get to know me!
                </ButtonScroll>
              </div>
            </div>
            <div className="lg:col-span-7 col-span-12 relative flex-shrink-0">
              <div className="block lg:hidden absolute z-[3] bg-background/30 top-0 left-0 bottom-0 right-0" />
              <div className="lg:hidden w-full p-4 absolute z-[5] top-1/2 -translate-y-1/2">
                <div className="space-y-6">
                  <p className="uppercase text-yellow-500 font-semibold">
                    hello!
                  </p>
                  <p className="text-5xl sm:text-6xl font-bold leading-[3.5rem] sm:leading-[4.5rem]">
                    I'm a{" "}
                    <span className="text-yellow-500">frontend developer</span>{" "}
                    based in HCM city.{" "}
                  </p>
                  <ButtonScroll
                    className="bg-yellow-500 hover:bg-yellow-400 text-black uppercase font-semibold h-14 rounded-3xl px-4"
                    idScroll={idScroll.ABOUT}
                  >
                    Let's get to know me!
                  </ButtonScroll>
                </div>
              </div>
              <Image
                src="/images/banner.gif"
                alt="me"
                fill
                quality={100}
                className="w-full h-auto object-cover lg:object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

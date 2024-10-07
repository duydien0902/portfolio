import { idScroll } from "@/utils/contants";

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import DownloadCv from "@/app/(root)/_sections/about-me/_components/download-cv";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section>
      <Container>
        <div id={idScroll.ABOUT}>
          <div className="sm:pt-16 md:pt-28 grid grid-cols-12 gap-y-14 md:gap-x-14">
            <div className="col-span-12 md:col-span-6 relative flex-shrink-0 overflow-hidden aspect-[549/720] md:aspect-auto">
              <Image
                src={"/images/about_me.png"}
                alt="about me"
                quality={100}
                fill
                className="w-full md:object-cover object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-12 md:col-span-6">
              <Title
                TitleBg="about"
                classNameTitleBg="left-[51%] -translate-x-1/2 md:-translate-x-0 md:-left-5"
                classNameTitle="text-center md:text-left"
                classNameDes="text-center md:text-left"
                description="I am a frontend developer with two years of experience, focusing on building high-performance web applications using ReactJS and NextJS. I’m passionate about optimizing user experiences and delivering clean, efficient code."
              >
                about me
              </Title>
              <div className="w-fit md:w-full mx-auto border md:border-none p-6 md:p-0 rounded-md">
                <ul className="w-full space-y-4 text-lg">
                  <li className="flex items-start">
                    <p className="max-w-32 w-full font-bold">Name:</p>
                    <span className="dark:text-gray-400 text-gray-600">
                      Đào Duy Điền
                    </span>
                  </li>
                  <li className="flex items-start">
                    <p className="max-w-32 w-full font-bold">Date of birth:</p>
                    <span className="dark:text-gray-400 text-gray-600">
                      February 02, 1998
                    </span>
                  </li>
                  <li className="flex items-start">
                    <p className="max-w-32 w-full font-bold">Address:</p>
                    <span className="dark:text-gray-400 text-gray-600">
                      Ward 14, District 10, Ho Chi Minh City
                    </span>
                  </li>
                  <li className="flex items-start">
                    <p className="max-w-32 w-full font-bold">Email:</p>
                    <span className="dark:text-gray-400 text-gray-600">
                      duydien552@gmail.com
                    </span>
                  </li>
                  <li className="flex items-start">
                    <p className="max-w-32 w-full font-bold">Phone:</p>
                    <span className="dark:text-gray-400 text-gray-600">
                      +84 932081498
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-xl space-x-2 mt-9 mb-6 flex justify-center md:block">
                <span className="font-bold dark:text-yellow-300 text-yellow-500">
                  05
                </span>
                <span>Projects complete</span>
              </div>
              <div className="flex md:block justify-center">
                <DownloadCv />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

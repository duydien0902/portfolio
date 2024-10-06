import { idScroll } from "@/utils/contants";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { CONTACT } from "@/app/(root)/_sections/contact/data";
import ContactItem from "@/app/(root)/_sections/contact/_components/contact-item";

export default function ContactSection() {
  return (
    <section>
      <Container>
        <div className="pt-16" id={idScroll.CONTACT}>
          <div className="pt-28">
            <Title
              TitleBg="contact"
              classNameTitleBg="left-1/2 -translate-x-1/2 sm:top-2"
              classNameTitle="text-center"
              classNameDes="text-center my-7 max-w-4xl mx-auto"
              description="Here are my contact details."
            >
              contact me
            </Title>
            <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONTACT.map((item) => {
                const Icon = item.icon;
                return (
                  <ContactItem
                    key={item.value}
                    Icon={Icon}
                    title={item.title}
                    value={item.value}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[70%] mx-auto mt-28 h-[0.5px] dark:bg-gray-600 bg-gray-500" />
      </Container>
    </section>
  );
}

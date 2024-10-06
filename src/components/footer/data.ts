import { HEADER } from "@/components/header/data";
import { idScroll } from "@/utils/contants";

export const FOOTER = {
  about_me:
    "I’m passionate about optimizing user experiences and delivering clean, efficient code.",
  link: HEADER.link,
  products: [
    {
      id: idScroll.PHARMACITY,
      title: "pharmacity",
    },
    {
      id: idScroll.PORTFOLIO,
      title: "portfolio",
    },
    {
      id: idScroll.TRELLO,
      title: "trello",
    },
    {
      id: idScroll.ADMIN_ASSISTANT,
      title: "admin assistant",
    },
    {
      id: idScroll.ADMIN_EMPLOYEES,
      title: "admin employees",
    },
  ],
  contact: {
    location: "Ward 14, District 10, Ho Chi Minh City",
    phone: "+84 932081498",
    email: "duydien552@gmail.com",
  },
} as const;

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen relative">{children}</main>
      <Footer />
    </>
  );
}

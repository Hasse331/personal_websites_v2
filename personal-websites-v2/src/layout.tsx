import React from "react";
import NavBar from "@/components/navBar"; // Ensure the path is correct
import Footer from "@/components/footer"; // Ensure the path is correct
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className={`${inter.className}`}>{children}</main>
      <Footer />
    </>
  );
}

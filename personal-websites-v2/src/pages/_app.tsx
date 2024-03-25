import React from "react";
import { AppProps } from "next/app";
import "../globals.css"; // Adjust the import path if necessary
import RootLayout from "@/layout"; // Ensure the path is correct

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default MyApp;

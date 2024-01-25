// pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import "../app/globals.css"; // Adjust the import path if necessary

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

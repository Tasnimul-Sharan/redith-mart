import React from "react";
import Error from "@/components/Error";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Redithmart",
  description:
    "The page you are looking for could not be found. Explore products, categories, and deals on Redithmart online store.",

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Page Not Found | Redithmart",
    description:
      "Sorry, the page you requested does not exist. Browse Redithmart for the latest products and deals.",
    url: "https://www.redithmart.com/error",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | Redithmart",
    description:
      "The page you are looking for could not be found on Redithmart.",
  },

  robots: {
    index: false,
    follow: true,
  },
};

const ErrorPage = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default ErrorPage;

import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Redithmart Online Shopping",
  description:
    "Sign in to your Redithmart account to manage orders, wishlist, and enjoy a faster checkout experience while shopping online.",

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Sign In to Redithmart",
    description:
      "Access your Redithmart account to track orders, manage wishlist and shop easily.",
    url: "https://www.redithmart.com/signin",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sign In | Redithmart",
    description:
      "Log in to your Redithmart account and continue shopping online.",
  },

  robots: {
    index: false,
    follow: false,
  },
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;

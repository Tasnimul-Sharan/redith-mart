import Signup from "@/components/Auth/Signup";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | Redithmart Online Shopping",
  description:
    "Sign up for a Redithmart account to start shopping electronics, fashion, and daily essentials with secure checkout and fast delivery across Bangladesh.",

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Create Your Redithmart Account",
    description:
      "Join Redithmart today and enjoy convenient online shopping with exclusive deals and fast delivery.",
    url: "https://www.redithmart.com/signup",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Signup | Redithmart",
    description:
      "Create your Redithmart account and start shopping online easily.",
  },

  robots: {
    index: false,
    follow: false,
  },
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;

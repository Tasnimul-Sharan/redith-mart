import MyAccount from "@/components/MyAccount";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account | Redithmart Online Shopping",
  description:
    "Access your Redithmart account to manage orders, wishlist, addresses, and personal settings for a smooth shopping experience.",

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "My Account | Redithmart",
    description:
      "Manage your account, view orders, wishlist, and personal settings at Redithmart online store.",
    url: "https://www.redithmart.com/my-account",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "My Account | Redithmart",
    description:
      "View and manage your Redithmart account for fast and secure online shopping.",
  },

  robots: {
    index: false,
    follow: false,
  },
};

const MyAccountPage = () => {
  return (
    <main>
      <MyAccount />
    </main>
  );
};

export default MyAccountPage;

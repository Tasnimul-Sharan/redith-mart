import React from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Online | Redithmart - Electronics, Fashion & More",
  description:
    "Browse and shop the latest electronics, fashion, accessories, and daily essentials at Redithmart. Discover great deals and fast delivery across Bangladesh.",

  keywords: [
    "Redithmart shop",
    "online shopping Bangladesh",
    "buy electronics online",
    "fashion online Bangladesh",
    "ecommerce store Bangladesh",
  ],

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Shop Online | Redithmart",
    description:
      "Explore a wide range of electronics, fashion, and everyday essentials at Redithmart with secure checkout and fast delivery.",
    url: "https://www.redithmart.com/shop",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shop Online | Redithmart",
    description:
      "Discover the latest products and deals at Redithmart online shop.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const ShopWithoutSidebarPage = () => {
  return (
    <main>
      <ShopWithoutSidebar />
    </main>
  );
};

export default ShopWithoutSidebarPage;

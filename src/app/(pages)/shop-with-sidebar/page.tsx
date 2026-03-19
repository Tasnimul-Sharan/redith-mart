import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Products | Redithmart Online Store Bangladesh",
  description:
    "Browse a wide collection of electronics, fashion, accessories, and daily essentials at Redithmart. Enjoy secure online shopping with fast delivery across Bangladesh.",

  keywords: [
    "Redithmart",
    "online shop Bangladesh",
    "electronics online store",
    "fashion store Bangladesh",
    "buy products online Bangladesh",
  ],

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Shop Products | Redithmart",
    description:
      "Explore electronics, fashion, accessories and more at Redithmart with secure checkout and fast delivery.",
    url: "https://www.redithmart.com/shop-with-sidebar",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shop Products | Redithmart",
    description: "Discover amazing deals and shop online at Redithmart.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const ShopWithSidebarPage = () => {
  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default ShopWithSidebarPage;

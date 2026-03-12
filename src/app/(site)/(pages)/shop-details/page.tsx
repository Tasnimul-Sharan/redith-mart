import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details | Redithmart Online Shopping Bangladesh",
  description:
    "View detailed information, specifications, price and reviews of products at Redithmart. Shop electronics, fashion, accessories and more with fast delivery across Bangladesh.",

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Product Details | Redithmart",
    description:
      "Discover product features, price and reviews at Redithmart and shop online with secure checkout.",
    url: "https://www.redithmart.com/shop-details",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Product Details | Redithmart",
    description: "Explore product specifications and buy online at Redithmart.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ShopDetails />
    </main>
  );
};

export default ShopDetailsPage;

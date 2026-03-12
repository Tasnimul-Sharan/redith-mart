import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Wishlist | Redithmart Online Shopping Bangladesh",
  description:
    "View and manage your favorite products in your Redithmart wishlist. Save electronics, fashion, and daily essentials for later purchase.",

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Wishlist | Redithmart",
    description:
      "Keep track of your favorite items at Redithmart. Add products to your wishlist and shop them anytime.",
    url: "https://www.redithmart.com/wishlist",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "My Wishlist | Redithmart",
    description:
      "Save your favorite products and shop them later from your Redithmart wishlist.",
  },

  robots: {
    index: false,
    follow: true,
  },
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;

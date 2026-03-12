import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redithmart | Online Shopping for Electronics, Fashion & Daily Needs",
  description:
    "Shop the latest electronics, fashion, home appliances and daily essentials at Redithmart. Enjoy secure payments, fast delivery and great deals across Bangladesh.",
  keywords: [
    "Redithmart",
    "online shopping Bangladesh",
    "electronics store",
    "fashion store",
    "buy online Bangladesh",
    "ecommerce Bangladesh",
  ],

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Redithmart | Online Shopping in Bangladesh",
    description:
      "Discover the best deals on electronics, fashion and daily essentials at Redithmart. Fast delivery and secure shopping experience.",
    url: "https://www.redithmart.com",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Redithmart | Online Shopping in Bangladesh",
    description:
      "Shop electronics, fashion and daily essentials at Redithmart with secure checkout and fast delivery.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}

import React from "react";
import Checkout from "@/components/Checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Checkout | Redithmart Online Shopping",
  description:
    "Complete your purchase securely at Redithmart. Review your order details, shipping information, and payment options before placing your order.",

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Secure Checkout | Redithmart",
    description: "Finish your order securely at Redithmart online store.",
    url: "https://www.redithmart.com/checkout",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Secure Checkout | Redithmart",
    description: "Complete your order safely with Redithmart secure checkout.",
  },

  robots: {
    index: false,
    follow: true,
  },
};

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;

import React from "react";
import Cart from "@/components/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Redithmart Online Shopping",
  description:
    "Review the products in your shopping cart at Redithmart and proceed to checkout to complete your purchase.",

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Shopping Cart | Redithmart",
    description:
      "View items in your cart and proceed to secure checkout at Redithmart online store.",
    url: "https://www.redithmart.com/cart",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shopping Cart | Redithmart",
    description:
      "Review items in your cart and continue shopping or checkout at Redithmart.",
  },

  robots: {
    index: false,
    follow: true,
  },
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;

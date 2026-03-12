import React from "react";
import MailSuccess from "@/components/MailSuccess";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Sent Successfully | Redithmart",
  description:
    "Your email has been sent successfully. Please check your inbox to continue with your Redithmart account verification or password reset.",

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Email Sent Successfully | Redithmart",
    description:
      "Check your inbox to continue your account verification or password reset at Redithmart.",
    url: "https://www.redithmart.com/mail-success",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Email Sent Successfully | Redithmart",
    description:
      "Your email was sent successfully. Please check your inbox to proceed.",
  },

  robots: {
    index: false,
    follow: true,
  },
};

const MailSuccessPage = () => {
  return (
    <main>
      <MailSuccess />
    </main>
  );
};

export default MailSuccessPage;

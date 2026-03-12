import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Redithmart Online Shopping",
  description:
    "Get in touch with Redithmart for customer support, order inquiries, or business questions. Our team is ready to help you.",

  metadataBase: new URL("https://www.redithmart.com"),

  openGraph: {
    title: "Contact Us | Redithmart",
    description:
      "Contact the Redithmart support team for help with orders, products, or general inquiries.",
    url: "https://www.redithmart.com/contact",
    siteName: "Redithmart",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Redithmart",
    description:
      "Need help? Contact Redithmart customer support for assistance with your orders or account.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;

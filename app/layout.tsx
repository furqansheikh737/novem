import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Novem | Industrial Freeze Drying & Food Manufacturing",
    template: "%s | Novem",
  },

  description:
    "Novem provides industrial freeze-drying, OEM food manufacturing, premium ingredient sourcing, packaging, and global distribution solutions.",

  keywords: [
    "Freeze Drying",
    "OEM Manufacturing",
    "Food Manufacturing",
    "Pet Food",
    "Industrial Food",
    "Food Processing",
    "Packaging",
    "Distribution",
    "Novem",
  ],

  authors: [
    {
      name: "Novem",
    },
  ],

  creator: "Novem",

  metadataBase: new URL("https://novem.com"),

  openGraph: {
    title: "Novem",
    description: "Industrial Freeze Drying & Food Manufacturing Solutions",

    url: "https://novem.com",

    siteName: "Novem",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Novem",

    description: "Industrial Freeze Drying & OEM Manufacturing",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} bg-[#F8F4EF] text-[#2B2927]`}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

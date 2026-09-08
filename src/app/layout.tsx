import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";

import Footer from "@/components/footer";
import JumpToTop from "@/components/jump-to-top";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });q

export const metadata: Metadata = {
  title: {
    default: "Naimur Rahman – Video Editor & Motion Graphics Designer",
    template: " | Naimur Rahman",
  },
  description:
    "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Niloy Bhowmick specializes in DaVinci Resolve, Premiere Pro, and After Effects — delivering cinematic edits, motion graphics, and polished storytelling.",
  keywords: [
    "Naimur Rahman",
    "Video Editor",
    "Motion Graphics Designer",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "YouTube Video Editing",
    "Course Video Editing",
    "Logo Animation",
    "Visual Storytelling",
    "Freelance Video Editor",
    "Bangladesh Video Editor",
    "Cinematic Editing",
    "Content Creator",
    "Lower Thirds",
    "Audio Sync",
  ],
  authors: [{ name: "Naimur Rahman", url: "https://www.naimur.me" }],
  creator: "Naimur Rahman",
  publisher: "Naimur Rahman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.naimur.me",
    title: "Naimur Rahman – Video Editor & Motion Graphics Designer",
    description:
      "Passionate Video Editor and Motion Graphics Designer delivering clean, cinematic edits and dynamic visual storytelling using DaVinci Resolve, Premiere Pro, and After Effects.",
    siteName: "Naimur Rahman Portfolio",
    images: [
      {
        url: "/naimur.png",
        width: 1200,
        height: 630,
        alt: "Naimur Rahman - Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naimur Rahman – Video Editor & Motion Graphics Designer",
    description:
      "Crafting cinematic edits, motion graphics, and powerful stories. Let's make your content stand out.",
    creator: "@naimur_rahman", // update if you have a real Twitter handle
    images: ["/naimur.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.naimur.me",
  },
  category: "Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Naimur Rahman",
              url: "https://www.naimur.me",
              image: "/naimur.png",
              sameAs: [
                "https://www.naimur.me",
                "https://www.linkedin.com/in/naimur202164/", // update if available
                "https://www.youtube.com/@naimurmotion", // update if available
                // "https://twitter.com/naimur_rahman", // update if available
              ],
              jobTitle: "Video Editor & Motion Graphics Designer",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Color Grading",
                "Audio Syncing",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "National University of Bangladesh",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <MouseMoveEffect />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <JumpToTop />
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  );
}

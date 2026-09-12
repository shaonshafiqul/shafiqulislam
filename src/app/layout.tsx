import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";

import Footer from "@/components/footer";
import JumpToTop from "@/components/jump-to-top";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Shafiqul Islam – Video Editor",
    template: " | Shafiqul Islam",
  },
  description:
    "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Shafiqul Islam specializes in Final Cut Pro, and After Effects — delivering cinematic edits, motion graphics, and polished storytelling.",
  keywords: [
    "Shafiqul Islam",
    "Video Editor",
    "Motion Graphics Designer",
    "Final Cut Pro",
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
  authors: [
    {
      name: "Shafiqul Islam",
      url: "https://www.linkedin.com/in/shaonshafiqul/",
    },
  ],
  creator: "Shafiqul Islam",
  publisher: "Shafiqul Islam",
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
    url: "https://www.linkedin.com/in/shaonshafiqul/",
    title: "Shafiqul Islam – Video Editor & Motion Graphics Designer",
    description:
      "Passionate Video Editor and Motion Graphics Designer delivering clean, cinematic edits and dynamic visual storytelling using Final Cut Pro, and After Effects.",
    siteName: "Shafiqul Islam Portfolio",
    images: [
      {
        url: "/shafiqul.png",
        width: 1200,
        height: 630,
        alt: "Shafiqul Islam - Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shafiqul Islam – Video Editor & Motion Graphics Designer",
    description:
      "Crafting cinematic edits, motion graphics, and powerful stories. Let's make your content stand out.",
    creator: "@shaonshafiqul",
    images: ["/shafiqul.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.linkedin.com/in/shaonshafiqul/",
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
              name: "Shafiqul Islam",
              url: "https://www.linkedin.com/in/shaonshafiqul/",
              image: "/shafiqul.png",
              sameAs: [
                "https://www.linkedin.com/in/shaonshafiqul/",
                "https://www.facebook.com/ShaonShafiqul/",
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
          <SmoothScroll>
              <MouseMoveEffect />
              <Navbar />

              <main>{children}</main>

              <Footer />
              <JumpToTop />
              <Toaster position="top-center" />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
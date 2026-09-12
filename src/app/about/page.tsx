"use client";

import CTASection from "@/components/CTASection";
import GlassmorphismCard from "@/components/glassmorphism-card";
import Marquee from "@/components/ui/marquee";
import { clientsData } from "@/db/clients";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
return ( 
          <div className="min-h-screen py-20 px-4">
          <div className="max-w-6xl mx-auto">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-24 relative"
          >
            {/* Spotlight Effect behind title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/15 blur-[100px] rounded-full pointer-events-none" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-0 md:mt-16 mb-6 text-white tracking-tight relative z-10">
            <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Hey there! I'm Shafiqul Islam, a passionate Video Editor and
            Motion Designer with a deep love for storytelling through visuals.
          </p>
          </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 mb-16 justify-center items-center">

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <GlassmorphismCard className="p-8">
          <div className="text-center">

            <div className="relative w-90 h-90 mx-auto mb-6">
              <Image
                src="/shafiqul.png"
                alt="Shafiqul Islam"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-2 text-white">
              Shafiqul Islam
            </h2>

            <p className="text-blue-400 mb-4">
              Video Editor & Motion Designer
            </p>

            <p className="text-gray-400 text-sm mb-6">
              I don't just cut footage, I construct feelings.<br />
              Every frame must earn its place on the timeline,<br />
              serving the narrative above all else.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">

              <a
                href="https://www.facebook.com/shaonshafiqul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Facebook size={24} />
              </a>

              <a
                href="https://www.instagram.com/shaonshafiqul/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/shaonshafiqul/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>

            </div>
          </div>
        </GlassmorphismCard>
      </motion.div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-6"
      >
        <GlassmorphismCard className="p-8">

          <h3 className="text-2xl font-semibold mb-4 text-white">
            My Story
          </h3>

          <div className="space-y-4 text-gray-300 text-justify">

            <p>
              I’m a Video Editor who specializes in YouTube Video Editing, Talking Head Videos,
              and high-retention content. I help creators, coaches,
              educators, businesses, and personal brands turn raw footage
              into engaging videos through strong storytelling,
              pacing, B-roll, captions, audio enhancement, motion graphics, 
              and color grading.
            </p>

            <p>
              My focus is creating content that captures attention,
              keeps viewers watching, and communicates clearly.
            </p>

            <p>
              If you're looking for someone who blends creativity with
              technical skill, communicates clearly, and truly cares about
              content, feel free to contact me.
            </p>

          </div>
        </GlassmorphismCard>

        <GlassmorphismCard className="p-8">

          <h3 className="text-2xl font-semibold mb-4 text-white">
            Availability
          </h3>

          <div className="space-y-2 text-gray-300">
            <p>✅ Available for both short-term and long-term projects</p>
            <p>✅ Flexible with time zones and deadlines</p>
            <p>✅ Quick turnaround times without compromising quality</p>
          </div>

        </GlassmorphismCard>
      </motion.div>
    </div>

    {/* Clients Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-5"
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Trusted By
        </h2>

        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </div>

      <div
        className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <Marquee className="[--duration:20s]">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="mx-8 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer"
            >
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/5 p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:bg-white/10 transition-all">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mt-3 text-xs font-medium text-gray-400 transition-colors text-center whitespace-nowrap">
                {client.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </motion.div>

    {/* CTA Section */}
    <CTASection
      title="Ready to Work Together?"
      description="Let's create something amazing together. Whether it's YouTube video editing, promotional content, talking head videos, or educational content, I'm here to bring your vision to life."
      buttonText="Get In Touch"
      href="/contact"
    />

  </div>
</div>
);
}

import React from 'react'
import { AnimateCode } from "@/components/AnimateCode";
import { GravityStars } from "@/components/GravityStars";
import {
  AquaTitle,
  GrayTitle
} from "@/components/reusables";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AVATARS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="pt-25 sm:pt-30 relative min-h-screen grid grid-cols-2 lg:grid-cols-5 px-4 sm:px-8 pb-20 overflow-hidden">
      <GravityStars />
      <div className="col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center">
        <Badge variant="aqua">Welcome to Prepzo</Badge>
        <h1 className="font-serif relative text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
          <GrayTitle>Ace your next Interview</GrayTitle>
          <br />
          <AquaTitle>with real experts</AquaTitle>
        </h1>
        <p className="relative text-sm sm:text-base md:text-lg text-stone-400 max-w-xl mt-6 leading relaxed">
          Practice real interview scenarios, get instant AI-powered feedback,
          and improve faster with Prepzo, where you can book 1 : 1 sessions with
          senior engineers from top-companies.
        </p>

        <div className="relative flex justify-center gap-2 sm:gap-4 mt-10 sm:w-auto">
          <Link href={"/onboarding"}>
            <Button variant="aqua" size="hero">
              Get Started
            </Button>
          </Link>
          <Link href={"/explore"}>
            <Button variant="outline" size="hero">
              Browse Interviewers →
            </Button>
          </Link>
        </div>

        <div className="relative flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-16">
          <div className="flex">
            {AVATARS.map((av, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-[#0a0a0b] overflow-hidden ${
                  i > 0 ? "-ml-2" : ""
                }`}
              >
                <Image
                  src={av.src}
                  alt="user avatar"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-500 text-center sm:text-left">
            <strong className="text-stone-400 font-medium">
              1100+ engineers
            </strong>{" "}
            got their dream jobs via Prepzo
          </p>
        </div>
      </div>
      <div className="col-span-full lg:col-span-2 flex items-center justify-center text-center lg:justify-start mt-12 lg:mt-0">
        <AnimateCode duration={30000} writing />
      </div>
    </div>
  );
}

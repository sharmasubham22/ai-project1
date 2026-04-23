import { GravityStars } from "@/components/GravityStars";
import { AquaTitle, GrayTitle, SectionHeading, SectionLabel } from "@/components/reusables";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { LOGOS, ROLES } from "@/lib/data";
import { PricingTable } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section>
        <Hero />
      </section>

      <section className="relative z-10 border-y border-white/10 py-14">
        <p className="text-center fonr-medium text-xs text-stone-600 tracking-widest uppercase mb-8">
          Candidates landed roles at
        </p>
        <div className="flex items-center justify-center flex-wrap gap-24 px-6">
          {LOGOS.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={50}
              height={50}
              className="h-10 w-auto opacity-20 grayscale invert"
            />
          ))}
        </div>
      </section>

      <section>
        <Features />
      </section>

      <section className="relative z-10 pb-25 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Who is it for</SectionLabel>
          <SectionHeading gray="Built for both sides" aqua="of the table" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ROLES.map((role) => (
            <div
              key={role.label}
              className="relative bg-card border border-white/10 hover:border-[#8CD4CB]/20 rounded-2xl p-12 h-full transition duration-300 overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(139,211,202,0.05)_0%,transparent_70%)] pointer-events-none" />
              <span className="inline-block text-xs font-semibold text-[#8CD4CB] tracking-widest uppercase border border-[#8CD4CB]/20 bg-[#8CD4CB]/10 rounded-full px-3 py-1.5 mb-5">
                {role.label}
              </span>
              <h3 className="font-serif text-2xl tracking-tight mb-4">
                {role.title}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed mb-8">
                {role.desc}
              </p>
              <ul className="space-y-3">
                {role.perks.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-stone-400">
                    <span className="mt-0.5 min-w-4 h-4 rounded-full bg-[#8CD4CB]/10 border border-[#8CD4CB]/20 flex items-center justify-center text-xs text-[#8CD4CB]">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 pb-25 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading
            gray="Simple, transparent"
            aqua="credit based plans"
          />
          <p className="text-stone-400 mt-3 text-sm">
            Each credit = one session. Unused credits roll over.
          </p>
        </div>
        <PricingTable checkoutProps={{appearance:{
          elements:{
            drawerRoot:{
              zIndex:2000,
            }
          }
        }}}/>
      </section>

      <section className="relative z-10 pb-25 max-w-5xl mx-auto px-6">
        <div className="relative border border-[#8CD4CB]/20 rounded-3xl px-3 sm:px-16 py-20 bg-linear-to-br from-[#8CD4CB]/5 text-center overflow-hidden">
          <GravityStars />
          <h2 className="font-serif relative text-4xl md:text-5xl leading-tight tracking-tight mb-4">
            <GrayTitle>Your next interview</GrayTitle>
            <br />
            <AquaTitle>starts here</AquaTitle>
          </h2>
          <p className="relative text-stone-400 font-light text-sm mb-11">
            Join Thousands of engineers already leveling up on Prepzo.
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
        </div>
      </section>
    </div>
  );
}

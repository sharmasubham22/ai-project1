import React from 'react'
import BentoCards from "@/components/BentoCards";
import {
  AquaTitle,
  GrayTitle,
  SectionHeading,
  SectionLabel,
} from "@/components/reusables";
import { Badge } from "@/components/ui/badge";
import { AI_TAGS, SLOTS } from "@/lib/data";
import {
  Bot,
  Calendar,
  ChartColumn,
  LockKeyhole,
  MessageCircleMore,
  Video,
  Wallet,
} from "lucide-react";

export default function Features() {
  return (
    <div className="relative z-10 py-25 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <SectionLabel>Features</SectionLabel>
        <SectionHeading gray="Everything you need" aqua="nothing you don't" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-7">
          <BentoCards
            icon={<Bot size={20} className="text-[#8CD4CB]" />}
            title={<GrayTitle>AI Question Generator</GrayTitle>}
            desc="Interviewers get a live AI co-pilot generating role-specific questions on demand — system design, behavioural, DSA — all tailored to the candidate's level."
          >
            <div className="flex flex-wrap gap-2 mt-5">
              {AI_TAGS.map((t) => (
                <Badge key={t.label} variant={t.active ? "aqua" : "outline"}>
                  {t.label}
                </Badge>
              ))}
            </div>
          </BentoCards>
        </div>
        <div className="col-span-12 md:col-span-5">
          <BentoCards
            icon={<Wallet size={16} className="text-[#8CD4CB]" />}
            title={<GrayTitle>Credit System</GrayTitle>}
            desc="Subscribe for monthly credits. Book sessions. Interviewers earn and withdraw any time."
          >
            <div className="mt-5 rounded-xl bg-card border border-white/10 p-5 flex justify-between items-end">
              <div>
                <p className="text-xs text-stone-600 mb-1">Your balance</p>
                <p className="font-serif text-4xl leading-none bg-linear-to-br from-[#8CD4CB] to-[#2c766e] bg-clip-text text-transparent">
                  28
                </p>
                <p className="text-xs text-stone-600 mt-1">credits remaining</p>
              </div>

              <Badge variant="secondary">+10 this month</Badge>
            </div>
          </BentoCards>
        </div>

        <div className="col-span-12 md:col-span-4">
          <BentoCards
            icon={<Video size={16} className="text-[#8CD4CB]" />}
            title="HD Video Calls"
            desc="Powered by Stream. Screen sharing, recording, and instant playback links — all built in."
          >
            <></>
          </BentoCards>
        </div>

        <div className="col-span-12 md:col-span-4">
          <BentoCards
            icon={<MessageCircleMore size={16} className="text-[#8CD4CB]" />}
            title="Persistent Chat"
            desc="Message your interviewer before and after the call. Share resources, prep notes, and follow-ups in one thread."
          />
        </div>

        <div className="col-span-12 md:col-span-4">
          <BentoCards
            icon={<LockKeyhole size={16} className="text-[#8CD4CB]" />}
            title="Security by Arcjet"
            desc="Bot protection, rate limiting, and abuse prevention baked into every API route."
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <BentoCards
            icon={<ChartColumn size={16} className="text-[#8CD4CB]" />}
            title={<GrayTitle>AI Feedback Reports</GrayTitle>}
            desc="Post-interview analysis by Gemini with actionable insights."
          >
            <></>
          </BentoCards>
        </div>

        <div className="col-span-12 md:col-span-6">
          <BentoCards
            icon={<Calendar size={16} className="text-[#8CD4CB]" />}
            title={<AquaTitle>Slot-based Scheduling</AquaTitle>}
            desc="Interviewers set availability once. Interviewees pick from open slots and confirm with one click — no back-and-forth needed."
          >
            <div className="flex flex-wrap gap-2 mt-5">
              {SLOTS.map((s) => (
                <span
                  key={s.label}
                  className={`text-xs px-3 py-1.5 rounded-lg border ${s.cls}`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </BentoCards>
        </div>
      </div>
    </div>
  );
}

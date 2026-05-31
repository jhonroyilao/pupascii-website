"use client";

import React from "react";
import Navbar from "@/components/custom/navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { LandingAccordionItem } from "@/components/interactive-image-accordion";

// UI COMPONENTS
import {
  LightSectionShell,
  DarkSectionShell,
  AnimatedDescription,
  MemberCardGrid
} from "@/components/committee/committee-ui";

const docusecMembers = [
  { role: "DOCS", name: "Member Name", position: "Pres. for Documentation & Secretariat" },
  { role: "DOCS", name: "Member Name", position: "VP for Documentation & Secretariat" }
];

const marketingMembers = [
  { role: "MKTG", name: "Member Name", position: "Pres. for Marketing" },
  { role: "MKTG", name: "Member Name", position: "VP for Marketing" }
];

const programsMembers = [
  { role: "PROG", name: "Member Name", position: "Pres. for Programs" },
  { role: "PROG", name: "Member Name", position: "VP for Programs" }
];

const rneMembers = [
  { role: "R&E", name: "Member Name", position: "Pres. for Research & Extensions" },
  { role: "R&E", name: "Member Name", position: "VP for Research & Extensions" }
];

export default function CommitteePage() {
  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden flex flex-col gap-0 font-inter">
          
      {/* navbar */}
      <Navbar />
     
      {/* meet the leaders section -tim*/}
      <div className="pb-12">
        <LandingAccordionItem />
      </div>

      {/* exec section -tim */}
      <div className="relative z-0">
        <h1 className="text-4xl font-bold text-[#0062E4] text-center mt-12 mb-8">Executive Officers</h1>
        <p className="text-center text-lg text-gray-600 max-w-[1059px] mx-auto mb-12">The individuals leading ASCII through direction, coordination, and decision-making, working together to ensure every initiative, event, and project runs smoothly while serving the community with dedication and purpose.</p>
        <div></div>
      </div>

      {/* ccc section -tim */}
      <div className="relative z-0 mb-20">
        <h1 className="text-4xl font-bold text-[#0062E4] text-center mt-12 mb-8">Creative Communications</h1>
        <p className="text-center text-lg text-gray-600 max-w-[1059px] mx-auto mb-12">The Creative Communications Committee transforms ideas into compelling visuals and narratives. By blending artistic expression with clear communication to produce captivating publication materials, they shape how ASCII is seen—crafting a brand identity that not only informs but also excites, connects, and encourages the community to engage more deeply.</p>
        <div></div>
      </div>

      {/* ── JOAN'S ASSIGNED SECTIONS ── */}

      {/* 3. Documentation & Secretariat */}
      <LightSectionShell id="docusec" title="Documentation & Secretariat" animation="blurInUp" by="character">
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-[#0062E4] max-w-[1059px] mx-auto mb-16">
          The Documentation and Secretariat Committee ensures the smooth flow of information within the organization. From recording key moments to maintaining internal records, it ensures our milestones and progress are accurately documented. Their work preserves our history, supporting continuity, transparency, and a strong foundation for future growth.
        </AnimatedDescription>
        <MemberCardGrid members={docusecMembers} safariUrl="docusec.pupascii.com" safariImageSrc="/docs.jpg" />
      </LightSectionShell>

      {/* 4. Marketing Committee */}
      <DarkSectionShell id="marketing" title="Marketing Committee" animation="blurInUp" by="word">
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-white max-w-[1059px] mx-auto mb-16">
          Visibility is key to growth, and the Marketing Committee makes sure the spotlight is on ASCII. Through strategic promotion, curated campaigns, and dynamic social media management, they expand our reach and attract new audiences. This committee brings our vision to the forefront, inspiring others to join our journey in computer intelligence integration.
        </AnimatedDescription>
        <MemberCardGrid members={marketingMembers} safariUrl="marketing.pupascii.com" safariImageSrc="/marketing.jpg" />
      </DarkSectionShell>

      {/* 5. Programs Committee */}
      <LightSectionShell id="programs" title="Programs Committee" animation="blurInUp" by="text">
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-[#0062E4] max-w-[1059px] mx-auto mb-16">
          The Programs Committee leads the planning, coordination, and execution of ASCII’s events, ensuring that every initiative runs smoothly with purpose. They create opportunities for leadership, learning, and lasting connections, fostering responsibility, confidence, and teamwork to help members grow while creating events that strengthen the ASCII community.
        </AnimatedDescription>
        <MemberCardGrid members={programsMembers} safariUrl="programs.pupascii.com" safariImageSrc="/prog.jpg" />
      </LightSectionShell>

      {/* 6. Research and Extensions  */}
      <DarkSectionShell id="rne" title="Research and Extensions" animation="blurInUp" by="character">
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-white max-w-[1059px] mx-auto mb-16">
          Responsible for producing insightful articles and managing collaborations, the Research and Extensions Committee ensures every message reflects our identity and resonates with our audience. Beyond crafting captions, they bridge ASCII with new opportunities, innovations, and partnerships that benefit members and partners alike.
        </AnimatedDescription>
        <MemberCardGrid members={rneMembers} safariUrl="rne.pupascii.com" safariImageSrc="/rne.jpg" />
      </DarkSectionShell>

      {/* website contributors - tim*/}
      <div className="pt-20"></div>

      {/* footer */}
      <CinematicFooter />

    </main>
  );
}
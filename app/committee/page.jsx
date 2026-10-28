"use client";

import React from "react";
import Navbar from "@/components/custom/navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { LandingAccordionItem } from "@/components/interactive-image-accordion";

// UI COMPONENTS
import {
  LightSectionShell,
  DarkSectionShell,
  GreySectionShell,
  AnimatedDescription,
  MemberCardGrid,
  MemberCardCarousel,
  CommModalButton
} from "@/components/committee/committee-ui";
import { SirMon } from "../../components/committee/committee-ui";

const execcommMembers = [
  { role: "EXEC", name: "Morales, Timothy Gabriel", position: "President", image: "ccc_tim.png", links: {}},
  { role: "EXEC", name: "Sarmiento, Nathan B.", position: "Executive Vice President", image: "/hopper_placeholder.png", links: {}},
  { role: "EXEC", name: "Monterey, Reine Arabelle L.", position: "Executive Secretary", image: "/ccc_reine.png", links: {}},
  { role: "EXEC", name: "Lorenzana, Ma. Kristel Anne D.", position: "Executive Assistant Secretary", image: "/hopper_placeholder.png", links: {}},
  { role: "EXEC", name: "Sanchez, Reiu R.", position: "VP for Finance", image: "/hopper_placeholder.png", links: {}},
  { role: "EXEC", name: "Academia, Elisha Marie M.", position: "VP for Audit", image: "/hopper_placeholder.png", links: {}},
];

const cccMembers= [
  { role: "CCC", name: "Sia, Shaun Asher M.", position: "VP for Creative Communications", image: "/ccc_shaun.png", links: {}},
  { role: "CCC", name: "Inocentes, Mariel Sofia B.", position: "AVP for Creative Communications", image: "/ccc_mariel.png", links: {}},
];

const docusecMembers = [
  { role: "DOCS", name: "Aviles, Joan Kathleen E.", position: "VP for Documentation & Secretariat", image: "/docs_joan.png", links: {}},
  { role: "DOCS", name: "Jimena, Andrea Shane B.", position: "AVP for Documentation & Secretariat", image: "/hopper_placeholder.png", links: {}},
];

const marketingMembers = [
  { role: "MKTG", name: "Cruz, Precious Marian V.", position: "VP for Marketing", image: "/mktg_marian.png", links: {}},
  { role: "MKTG", name: "Rivero, Nathaniel R.", position: "AVP for Marketing", image: "/hopper_placeholder.png", links: {}},
];

const programsMembers = [
  { role: "PROG", name: "Esguerra, Keith Laurence Y.", position: "VP for Programs", image: "/hopper_placeholder.png", links: {}},
  { role: "PROG", name: "Mayo, Theresa Gilliam DS.", position: "AVP for Programs", image: "/hopper_placeholder.png", links: {}},
];

const rneMembers = [
  { role: "R&E", name: "Esquejo, Roxane K-Anne D.", position: "VP for Research & Extensions", image: "/rne_roxane.png", links: {}},
  { role: "R&E", name: "Sanchez, Louise Jillian A.", position: "AVP for Research & Extensions", image: "/hopper_placeholder.png", links: {}},
];

const websiteContributors = [
  { role: "R&E", name: "Morales, Timothy Gabriel", position: "Project Head & Dev Member", image: "/ccc_tim.png" },
  { role: "R&E", name: "Ilao, Jhon Roy", position: "Co-Head, Dev Head, UI/UX Head", image: "/ccc_jhon.png", links: { email: "jhonroyilao@gmail.com", facebook: "https://web.facebook.com/jhnroyilao", github: "https://github.com/jhonroyilao", linkedin: "https://www.linkedin.com/in/jhon-roy-ilao-3992b9293/" } },
  { role: "R&E", name: "Federico, John Richard J.", position: "Co-Head & Dev Head", image: "/prog_john.png", links: { email: "johnrichard.univ@gmail.com", facebook: "https://www.facebook.com/jjangmooo" } },
  { role: "R&E", name: "Sia, Shaun Asher M.", position: "UI/UX Member", image: "/ccc_shaun.png", links: { email: "siashaun4@gmail.com", facebook: "https://facebook.com/omaiow" } },
  { role: "R&E", name: "Inocentes, Mariel Sofia B.", position: "UI/UX Member", image: "/ccc_mariel.png" },
  { role: "R&E", name: "Monterey, Reine Arabelle L.", position: "UI/UX Member", image: "/ccc_reine.png" },
  { role: "R&E", name: "Lagat, Joemar R.", position: "UI/UX Member", image: "/exec_joemar.png", links: { email: "joemarlagatr@gmail.com", facebook: "https://www.facebook.com/joemar.lagat.2025", github: "https://github.com/JMR-san", linkedin: "https://www.linkedin.com/in/jmrlagat" } },
  { role: "R&E", name: "Aviles, Joan Kathleen E.", position: "Dev Member", image: "/docs_joan.png" },
  { role: "R&E", name: "Esquejo, Roxane K-Anne D.", position: "Dev Member", image: "/rne_roxane.png" },
  { role: "R&E", name: "Rio, Christine B.", position: "Dev Member", image: "/prog_rio.png" },
  { role: "R&E", name: "Cabrera, Chelsea Lauren B.", position: "Dev Member", image: "/exec_chelsea.png", links: { email: "chlaurencabrera@gmail.com", facebook: "https://www.facebook.com/chelsea.cabrera.99", github: "https://github.com/aesrch", linkedin: "https://www.linkedin.com/in/chelsealaurencabrera/" } },
  { role: "R&E", name: "Matinong, Arwen Therese C.", position: "Dev Member", image: "/docs_arwen.png" },
  { role: "R&E", name: "Valeza, Reinwald Marone", position: "CCC Team", image: "/mktg_reinwald.png", links: { email: "reinwaldmaronevaleza101505@gmail.com", facebook: "https://www.facebook.com/marone.valeza" } },
  { role: "R&E", name: "Castillejo, Paul Daniel C.", position: "R&E Team", image: "/rne_paul.png", links: { email: "pauldaniel0925@gmail.com", facebook: "https://www.facebook.com/pauldaniel.castillejo" } },
  { role: "R&E", name: "Duron, Jarren Irvine F.", position: "DocuSec Team", image: "/docs_jarren.png", links: { email: "jarrenirvine.duron320401@gmail.com", facebook: "https://www.facebook.com/JarrenIrvineDuron" } },
];

// MEMBER LIST FOR MODALS
const execmembers = [
  // exec members w/ subcomm
  { role: "VP for Creative Communications", name: "Ilao, Jhon Roy"},
  { role: "AVP for Creative Communications", name: "Sia, Shaun Asher M."},
  { role: "VP for Documentation & Secretariat", name: "Duron, Jarren Irvine F."},
  { role: "AVP for Documentation & Secretariat", name: "Diaz, Lei Eizen P."},
  { role: "VP for Marketing", name: "Gragas, Nethan Edry L."},
  { role: "AVP for Marketing", name: "Valeza, Reinwald Marone"},
  { role: "VP for Programs", name: "Nagera, Kristina Casandra C."},
  { role: "AVP for Programs", name: "Federico, John Richard J."},
  { role: "VP for Research & Extensions", name: "Gallaza, Romar M."},
  { role: "AVP for Research & Extensions", name: "Castillejo, Paul Daniel C."},
]

const cccmembers = [
  // ccc members
  { role: "Creative Communications", name: "Balayanto, Czarina Mae"},
  { role: "Creative Communications", name: "Bornales, Michelle Ann A."},
  { role: "Creative Communications", name: "Cardama, Antonette Joyce V."},
  { role: "Creative Communications", name: "Epetia, Yana Gabrielle"},
  { role: "Creative Communications", name: "Dotollo, Zyrah Mae M."},
  { role: "Creative Communications", name: "Figares, Mary Vianney D."},
  { role: "Creative Communications", name: "Ilao, Jhon Roy"},
  { role: "Creative Communications", name: "Lasco, Reign Allyson T."},
  { role: "Creative Communications", name: "Lim, Nicolah Marie L."},
  { role: "Creative Communications", name: "Oliveros, Mariel M."},
  { role: "Creative Communications", name: "Pacis, Remy Claryce"},
  { role: "Creative Communications", name: "Porciuncula, Kyle Ethan C."},
  { role: "Creative Communications", name: "Sanchez, Mia Mae N."},
]
const docusecmembers = [
  // docusec members
  { role: "Documentation and Secretariat", name: "Apis, Marizza P."},
  { role: "Documentation and Secretariat", name: "Asuncion, Kevin Jake B."},
  { role: "Documentation and Secretariat", name: "Estrecho, Sean Gabriel V."},
  { role: "Documentation and Secretariat", name: "Gallano, Olivia Angeline G."},
  { role: "Documentation and Secretariat", name: "Lague, Jasmine Rose A."},
  { role: "Documentation and Secretariat", name: "Marin, Kian Philip T."},
  { role: "Documentation and Secretariat", name: "Morauda, Gabriel Ivan T."},
  { role: "Documentation and Secretariat", name: "Rapada, Gian Kyle D."},
  { role: "Documentation and Secretariat", name: "Remolacio, Alexandra Geane M."},
]

// marketing members
const marketingmembers = [
  { role: "Marketing", name: "Ramos, Neoh Clord A."},
  { role: "Marketing", name: "Resurreccion, Givonne"},
  { role: "Marketing", name: "Santiago, Sean Russell S."},
  { role: "Marketing", name: "Alcantara, Rachelle S."},

  { role: "Marketing", name: "Aguyen, Juleight B."},
  { role: "Marketing", name: "Asinas, Frix Anne R."},
  { role: "Marketing", name: "Bagay, Russel V."},
  { role: "Marketing", name: "Bancod, Abbygail S."},
  { role: "Marketing", name: "Bobis, Mikaella"},
  { role: "Marketing", name: "Capon, Princess Anne N."},
  { role: "Marketing", name: "Cruz, Aynna Venice P."},
  { role: "Marketing", name: "Daza, Carmela P."},
  { role: "Marketing", name: "Dela Rosa, Mico Von Adriel A."},
  { role: "Marketing", name: "Dulla, Justin Lei"},
  { role: "Marketing", name: "Entac, Adelaine E."},
  { role: "Marketing", name: "Escober, Maritoni Denesse"},
  { role: "Marketing", name: "Galera, Jennifer Reign A."},
  { role: "Marketing", name: "Genezle Mariella A. Ambos"},
  { role: "Marketing", name: "Gragas, Nethan"},
  { role: "Marketing", name: "Ingreso, Mayvin D."},
  { role: "Marketing", name: "Loreign Seth Tribaco"},
  { role: "Marketing", name: "Loverez, Lianne Jeane A. "},
  { role: "Marketing", name: "Mary Elizabeth Joy F. Nuñal"},
  { role: "Marketing", name: "Quitoriano, Patrick DC."},
  { role: "Marketing", name: "Rehana Francine B. Sangil"},
  { role: "Marketing", name: "Renovales, Joshua A."},
  { role: "Marketing", name: "Rodriguez, Jan Earl F."},
  { role: "Marketing", name: "Valeza, Reinwald Morone"},
  { role: "Marketing", name: "Zaragoza, Marianne Criz P."},
]

// programs members
const programsmembers = [
  { role: "Programs", name: "Angeles, Samantha Nicole D."},
  { role: "Programs", name: "Ariola, Wiljean Mae G."},
  { role: "Programs", name: "Bombola, Yvan Raphael C."},
  { role: "Programs", name: "Dianco, John Michael"},
  { role: "Programs", name: "Lozano, Mac Edison S."},
  { role: "Programs", name: "Magtuto, Albert G."},
  { role: "Programs", name: "Virrey, Gabriel S."},
]

// rne members
const rnemembers = [
  { role: "Research and Extensions", name: "Agasid, Joaquin Carlo V."},
  { role: "Research and Extensions", name: "Bantog, Salahadin I."},
  { role: "Research and Extensions", name: "Bolo, Veneeze A."},
  { role: "Research and Extensions", name: "Castillejo, Paul Daniel C."},
  { role: "Research and Extensions", name: "Gallaza, Romar M."},
  { role: "Research and Extensions", name: "Ledesma, Mariouz Czanrex A."},
  { role: "Research and Extensions", name: "Soliman, Krishan Jose G."},
  { role: "Research and Extensions", name: "Sta. Ana, Marijah Georginia L."},
  { role: "Research and Extensions", name: "Tabafunda, Christian Lloyd B."},
  { role: "Research and Extensions", name: "Trayfalgar, James Aaron M."},
  { role: "Research and Extensions", name: "Veriña, Elijah Paul B."},
]

export default function CommitteePage() {
  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden flex flex-col gap-0 font-inter">
          
      {/* navbar */}
      <Navbar />
     
      {/* meet the leaders section -tim*/}
      <div>
        <LandingAccordionItem />
      </div>

      {/* Organization Advisor */}
      <SirMon />

      {/* exec section -tim */}
      <LightSectionShell id="execcomm" title="Executive Committee" animation="blurInUp" by="character">
        <AnimatedDescription className="text-center text-[18px] tracking-tight leading-snug text-grey-800 max-w-[950px] mx-auto mb-16">
          The individuals leading ASCII through direction, coordination, and decision-making, working together to ensure every initiative, event, and project runs smoothly while serving the community with dedication and purpose.
        </AnimatedDescription>
        <MemberCardGrid members={execcommMembers} safariUrl="execcomm.pupascii.com" safariImageSrc="/execcomm.png" />
        {/* see more members modal */}
       
      </LightSectionShell>

      

      {/* ccc section -tim */}
      <DarkSectionShell id="ccc" title="Creative Communications" animation="blurInUp" by="word">
        <AnimatedDescription className="text-blue-50 opacity-50 text-center text-[18px] tracking-tight leading-snug  max-w-[1059px] mx-auto">
          The Creative Communications Committee transforms ideas into compelling visuals and narratives. By blending artistic expression with clear communication to produce captivating publication materials, they shape how ASCII is seen—crafting a brand identity that not only informs but also excites, connects, and encourages the community to engage more deeply.
        </AnimatedDescription>
        <MemberCardGrid members={cccMembers} safariUrl="ccc.pupascii.com" safariImageSrc="/ccc.png" />

        {/* see more members modal */}
        <CommModalButton
          members={cccmembers}
        />

      </DarkSectionShell>

      {/* ── JOAN'S ASSIGNED SECTIONS ── */}

      {/* 3. Documentation & Secretariat */}
      <LightSectionShell id="docusec" title="Documentation & Secretariat" animation="blurInUp" by="character">
        <AnimatedDescription className="text-center text-[18px] tracking-tight leading-snug text-grey-500 max-w-[1020px] mx-auto mb-16">
          The Documentation and Secretariat Committee ensures the smooth flow of information within the organization. From recording key moments to maintaining internal records, it ensures our milestones and progress are accurately documented. Their work preserves our history, supporting continuity, transparency, and a strong foundation for future growth.
        </AnimatedDescription>
        <MemberCardGrid members={docusecMembers} safariUrl="docusec.pupascii.com" safariImageSrc="/docs.jpg" />

        {/* see more members */}
        <CommModalButton
          members={docusecmembers}
        />

      </LightSectionShell>

      {/* 4. Marketing Committee */}
      <DarkSectionShell id="marketing" title="Marketing Committee" animation="blurInUp" by="word">
        <AnimatedDescription className="text-blue-50 opacity-50 text-center text-[18px] tracking-tight leading-snug max-w-[1000px] mx-auto">
          Visibility is key to growth, and the Marketing Committee makes sure the spotlight is on ASCII. Through strategic promotion, curated campaigns, and dynamic social media management, they expand our reach and attract new audiences. This committee brings our vision to the forefront, inspiring others to join our journey in computer intelligence integration.
        </AnimatedDescription>
        <MemberCardGrid members={marketingMembers} safariUrl="marketing.pupascii.com" safariImageSrc="/marketing.png" />

        {/* see more members */}
        <CommModalButton
          members={marketingmembers}
        />

      </DarkSectionShell>

      {/* 5. Programs Committee */}
      <LightSectionShell id="programs" title="Programs Committee" animation="blurInUp" by="text">
        <AnimatedDescription className="text-center text-[18px] tracking-tight leading-snug text-grey-500 max-w-[1020px] mx-auto mb-16">
          The Programs Committee leads the planning, coordination, and execution of ASCII’s events, ensuring that every initiative runs smoothly with purpose. They create opportunities for leadership, learning, and lasting connections, fostering responsibility, confidence, and teamwork to help members grow while creating events that strengthen the ASCII community.
        </AnimatedDescription>
        <MemberCardGrid members={programsMembers} safariUrl="programs.pupascii.com" safariImageSrc="prog.jpg" />

        {/* see more members */}
        <CommModalButton
          members={programsmembers}
        />

      </LightSectionShell>

      {/* 6. Research and Extensions  */}
      <DarkSectionShell id="rne" title="Research and Extensions" animation="blurInUp" by="character">
        <AnimatedDescription className="text-blue-50 opacity-50 text-center text-[18px] tracking-tight leading-snug max-w-[1000px] mx-auto">
          Responsible for producing insightful articles and managing collaborations, the Research and Extensions Committee ensures every message reflects our identity and resonates with our audience. Beyond crafting captions, they bridge ASCII with new opportunities, innovations, and partnerships that benefit members and partners alike.
        </AnimatedDescription>
        <MemberCardGrid members={rneMembers} safariUrl="rne.pupascii.com" safariImageSrc="/rne.jpg" />

        {/* see more members */}
        <CommModalButton
          members={rnemembers}
        />

      </DarkSectionShell>

      {/* website contributors - tim*/}
      <GreySectionShell id="website" title="Website Contributors" animation="blurInUp" by="character">
        <AnimatedDescription className="text-white/90 opacity-50 text-center text-[18px] tracking-tight leading-snug max-w-[1000px] mx-auto">
          Meet the team behind the scenes who brought the ASCII Website to life! From design to development, these talented individuals worked to create a seamless and engaging online experience for our community. Special thanks to the Executive Committee, Creative Communications Committee, Documentation & Secretariat Committee, Marketing Committee, Programs Committee, and Research & Extensions Committee for their invaluable contributions.
        </AnimatedDescription>
        <MemberCardGrid members={websiteContributors} safariUrl="webdev.pupascii.com" safariImageSrc="/webdevteam.jpg" />
      </GreySectionShell>

      {/* footer */}
      <CinematicFooter />

    </main>
  );
}

// to do: list
// 1. Change the execs into current execs
// 2. Add members into the list
// 3. Change pictures and add placeholders
// 4. Add links to the officers
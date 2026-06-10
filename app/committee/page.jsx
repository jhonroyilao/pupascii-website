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
  { role: "EXEC", name: "Cabrera, Chelsea Lauren B.", position: "President", image: "/exec_chelsea.png" },
  { role: "EXEC", name: "Reolada, Gavinn M.", position: "Executive Vice President", image: "/exec_gavinn.png" },
  { role: "EXEC", name: "Biso, Erika P.", position: "Executive Secretary", image: "/exec_erika.png" },
  { role: "EXEC", name: "Narte, Ma. Victoria C.", position: "Executive Assistant Secretary", image: "/exec_victoria.png" },
  { role: "EXEC", name: "Guioguio, Kenneth M.", position: "VP for Finance", image: "exec_kenneth.png" },
  { role: "EXEC", name: "Lagat, Joemar R.", position: "VP for Audit", image: "/exec_joemar.png" },
];

const cccMembers= [
  { role: "CCC", name: "Ilao, Jhon Roy", position: "VP for Creative Communications", image: "/ccc_jhon.png" },
  { role: "CCC", name: "Sia, Shaun Asher M.", position: "AVP for Creative Communications", image: "/ccc_shaun.png" }
];

const docusecMembers = [
  { role: "DOCS", name: "Duron, Jarren Irvine F.", position: "VP for Documentation & Secretariat", image: "/docs_jarren.png" },
  { role: "DOCS", name: "Diaz, Lei Eizen P.", position: "AVP for Documentation & Secretariat", image: "/docs_lei.png" }
];

const marketingMembers = [
  { role: "MKTG", name: "Gragas, Nethan Edry L.", position: "VP for Marketing", image: "/mktg_nethan.png" },
  { role: "MKTG", name: "Valeza, Reinwald Marone", position: "AVP for Marketing", image: "/mktg_reinwald.png" }
];

const programsMembers = [
  { role: "PROG", name: "Nagera, Kristina Casandra C.", position: "VP for Programs", image: "/prog_kc.png" },
  { role: "PROG", name: "Federico, John Richard J.", position: "AVP for Programs", image: "/prog_john.png" }
];

const rneMembers = [
  { role: "R&E", name: "Gallaza, Romar M.", position: "VP for Research & Extensions", image: "/rne_romar.png" },
  { role: "R&E", name: "Castillejo, Paul Daniel C.", position: "AVP for Research & Extensions", image: "/rne_paul.png" }
];

const websiteContributors = [
  { role: "R&E", name: "Morales, Timothy Gabriel", position: "Project Head & Dev Member", image: "ccc_tim.png" },
  { role: "R&E", name: "Ilao, Jhon Roy", position: "Project Co-Head & UI/UX Head", image: "/ccc_jhon.png" },
  { role: "R&E", name: "Federico, John Richard J.", position: "Project Co-Head & Dev Head", image: "/prog_john.png" },
  { role: "R&E", name: "Sia, Shaun Asher M.", position: "UI/UX Member", image: "/ccc_shaun.png" },
  { role: "R&E", name: "Inocentes, Mariel Sofia B.", position: "UI/UX Member", image: "/ccc_mariel.png" },
  { role: "R&E", name: "Monterey, Reine Arabelle L.", position: "UI/UX Member", image: "/ccc_reine.png" },
  { role: "R&E", name: "Lagat, Joemar R.", position: "UI/UX Member", image: "/exec_joemar.png" },
  { role: "R&E", name: "Aviles, Joan Kathleen E.", position: "Dev Member", image: "/docs_joan.png" },
  { role: "R&E", name: "Esquejo, Roxane K-Anne D.", position: "Dev Member", image: "/rne_roxane.png" },
  { role: "R&E", name: "Rio, Christine B.", position: "Dev Member", image: "/prog_rio.png" },
  { role: "R&E", name: "Cabrera, Chelsea Lauren B.", position: "Dev Member", image: "/exec_chelsea.png" },
  { role: "R&E", name: "Valeza, Reinewald Marone.", position: "CCC Team", image: "/mktg_reinwald.png" },
  { role: "R&E", name: "Castillejo, Paul Daniel C.", position: "R&E Team", image: "/rne_paul.png" },
  { role: "R&E", name: "Duron, Jarren Irvine F.", position: "DocuSec Team", image: "/docs_jarren.png" },

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
  { role: "Creative Communications", name: "Academia, Elisha Marie M."},
  { role: "Creative Communications", name: "Aguinaldo, Jose Mari R."},
  { role: "Creative Communications", name: "Bornales, Michelle Ann A."},
  { role: "Creative Communications", name: "Cardama, Antonette Joyce V."},
  { role: "Creative Communications", name: "Chua, Ghian Ashley R."},
  { role: "Creative Communications", name: "Condenuevo, Cheyenne Louise C."}, 
  { role: "Creative Communications", name: "Ganosa, Neil Ydan L."}, 
  { role: "Creative Communications", name: "Inocentes, Mariel Sofia B."}, 
  { role: "Creative Communications", name: "Maravilla, Ernest Matthew I."}, 
  { role: "Creative Communications", name: "Monterey, Reine Arabelle L."}, 
  { role: "Creative Communications", name: "Morales, Timothy Gabriel"}, 
  { role: "Creative Communications", name: "Ponciano, Jasmine Rhada S."},   
  { role: "Creative Communications", name: "Porciuncula, Kyle Ethan C."}, 
  { role: "Creative Communications", name: "Sanchez, Mia Mae N."}, 
  { role: "Creative Communications", name: "Sanchez, Reiu R."}, 
  { role: "Creative Communications", name: "Silerio, Aaron Gabriel"}, 
  { role: "Creative Communications", name: "Tiongzon, Nisha Li A."}, 
  { role: "Creative Communications", name: "Tubiera, Jasmin P."}, 
  { role: "Creative Communications", name: "Victohay, Ryoko L."}, 
]
const docusecmembers = [
  // docusec members
  { role: "docusec", name: "Aviles, Joan Kathleen E."},
  { role: "docusec", name: "Bhasa, Rein Cherztin G."},
  { role: "docusec", name: "Buenaventura, Harvey L."},
  { role: "docusec", name: "Cagadas, Marielle I."},
  { role: "docusec", name: "Cereno, Rjay B."},
  { role: "docusec", name: "Dela Paz, Bien Jeric"},
  { role: "docusec", name: "Edrosa, Jwin Yael D."},
  { role: "docusec", name: "Espiritu, Anthea Lyn Czeisler P."},
  { role: "docusec", name: "Jimena, Andrea Shane B."},
  { role: "docusec", name: "Liwag, John Eric T."},
  { role: "docusec", name: "Lorenzana, Ma. Kristel Anne D."},
  { role: "docusec", name: "Matinong, Arwen Therese Emmanuelle C."},
  { role: "docusec", name: "Naperi, Hans Ezekiel M."},
  { role: "docusec", name: "Rapada, Gian Kyle D."},
  { role: "docusec", name: "Reboquio, Carl Gian, D."},
  { role: "docusec", name: "Remolacio, Alexandra Geane M."},
  { role: "docusec", name: "Samson, Lander D."},
  { role: "docusec", name: "Torio, Sam Althea Nicole S."},
  { role: "docusec", name: "Valderama, Gabriel V."},
  { role: "docusec", name: "Bhasa, Rein Cherztin G."},
]

// marketing members
const marketingmembers = [
  { role: "marketing", name: "Aldover, Joanne"},
  { role: "marketing", name: "Bagay, Russel V."},
  { role: "marketing", name: "Bufe, Keziah Nicole L."},
  { role: "marketing", name: "Capon, Princess Anne N."},
  { role: "marketing", name: "Cruz, Precious Marian V."},
  { role: "marketing", name: "Dulla, Justin Lei"},
  { role: "marketing", name: "Lasco, Ed Marcel G."},
  { role: "marketing", name: "Lugue, Kevin DS."},
  { role: "marketing", name: "Melegrito, Anna Mikaela B."},
  { role: "marketing", name: "Ramos, Neoh Clord A."},
  { role: "marketing", name: "Resurreccion, Givonne"},
  { role: "marketing", name: "Rivero, Nathaniel R."},
  { role: "marketing", name: "Santiago, Sean Russell S."},
  { role: "marketing", name: "Alcantara, Rachelle S."},
]

// programs members
const programsmembers = [
  { role: "programs", name: "Angeles, Samantha Nicole D."},
  { role: "programs", name: "Berin, Alex L."},
  { role: "programs", name: "Bombola, Yvan Raphael C."},
  { role: "programs", name: "Consolacion, Karizha C."},
  { role: "programs", name: "Daguman, Micaella P."},
  { role: "programs", name: "Dayang, Kyle V."},
  { role: "programs", name: "Elmido, Joash Mae S."},
  { role: "programs", name: "Esguerra, Keith Laurence Y."},
  { role: "programs", name: "Fernandez, Francis Earl, M."},
  { role: "programs", name: "Guardiario, Julianne Alyssa S."},
  { role: "programs", name: "Isais, Dominic Christian"},
  { role: "programs", name: "Jayoma, Aira S."},
  { role: "programs", name: "Lasac, Alliza Leira L."},
  { role: "programs", name: "Layesa, John Carlo C."},
  { role: "programs", name: "Lozano, Mac Edison S."},
  { role: "programs", name: "Magtuto, Albert G."},
  { role: "programs", name: "Mayo, Theresa Gilliam DS."},
  { role: "programs", name: "Nevero, Alexandre Andrei"},
  { role: "programs", name: "Orolfo, Aidan Jireh B."},
  { role: "programs", name: "Parreño, Anna Lea L."},
  { role: "programs", name: "Rio, Christine B."},
  { role: "programs", name: "Rodriguez, Neil Xander B."},
  { role: "programs", name: "Sarmiento, Nathaniel B."},
  { role: "programs", name: "Tindugan, Ruth Naomi S."},
  { role: "programs", name: "Virrey, Gabriel S."},
]

// rne members
const rnemembers = [
  { role: "rne", name: "Bantog, Salahadin I."},
  { role: "rne", name: "Bruel, Raj P."},
  { role: "rne", name: "Castillo, Joemarc Jr. D."},
  { role: "rne", name: "Detera, Christian Roi C."},
  { role: "rne", name: "Esquejo, Roxane K-Anne D."},
  { role: "rne", name: "Gabalfin, Marc Arthur E."},
  { role: "rne", name: "Macaraeg, Paul Angelo O."},
  { role: "rne", name: "Navarro, Mary Jean D."},
  { role: "rne", name: "Sanchez, Louise Jillian A."},
  { role: "rne", name: "Sta. Ines, Jhonder S."},
  { role: "rne", name: "Villeza, Sean Russell B."},
]

export default function CommitteePage() {
  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden flex flex-col gap-0 font-inter">
          
      {/* navbar */}
      <Navbar />
     
      {/* meet the leaders section -tim*/}
      <div className="pb-12">
        <LandingAccordionItem />
      </div>

      {/* Organization Advisor */}
      <SirMon />

      {/* exec section -tim */}
      <LightSectionShell id="execcomm" title="Executive Committee" animation="blurInUp" by="character">
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-[#0062E4] max-w-[1059px] mx-auto mb-16">
          The individuals leading ASCII through direction, coordination, and decision-making, working together to ensure every initiative, event, and project runs smoothly while serving the community with dedication and purpose.
        </AnimatedDescription>
        <MemberCardGrid members={execcommMembers} safariUrl="execcomm.pupascii.com" safariImageSrc="/execcomm.jpg" />
        {/* see more members modal */}
        <CommModalButton
          members={execmembers}
        />
      </LightSectionShell>

      

      {/* ccc section -tim */}
      <DarkSectionShell id="ccc" title="Creative Communications Committee" animation="blurInUp" by="word">
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-white max-w-[1059px] mx-auto mb-16">
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
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-[#0062E4] max-w-[1059px] mx-auto mb-16">
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
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-white max-w-[1059px] mx-auto mb-16">
          Visibility is key to growth, and the Marketing Committee makes sure the spotlight is on ASCII. Through strategic promotion, curated campaigns, and dynamic social media management, they expand our reach and attract new audiences. This committee brings our vision to the forefront, inspiring others to join our journey in computer intelligence integration.
        </AnimatedDescription>
        <MemberCardGrid members={marketingMembers} safariUrl="marketing.pupascii.com" safariImageSrc="/marketing.jpg" />

        {/* see more members */}
        <CommModalButton
          members={marketingmembers}
        />

      </DarkSectionShell>

      {/* 5. Programs Committee */}
      <LightSectionShell id="programs" title="Programs Committee" animation="blurInUp" by="text">
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-[#0062E4] max-w-[1059px] mx-auto mb-16">
          The Programs Committee leads the planning, coordination, and execution of ASCII’s events, ensuring that every initiative runs smoothly with purpose. They create opportunities for leadership, learning, and lasting connections, fostering responsibility, confidence, and teamwork to help members grow while creating events that strengthen the ASCII community.
        </AnimatedDescription>
        <MemberCardGrid members={programsMembers} safariUrl="programs.pupascii.com" safariImageSrc="/prog.jpg" />

        {/* see more members */}
        <CommModalButton
          members={programsmembers}
        />

      </LightSectionShell>

      {/* 6. Research and Extensions  */}
      <DarkSectionShell id="rne" title="Research and Extensions" animation="blurInUp" by="character">
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-white max-w-[1059px] mx-auto mb-16">
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
        <AnimatedDescription className="text-center text-[18px] leading-[28px] text-[#ffffff] max-w-[1059px] mx-auto mb-16">
          Meet the team behind the scenes who brought the ASCII Website to life! From design to development, these talented individuals worked tirelessly to create a seamless and engaging online experience for our community. Special thanks to the Executive Committee, Creative Communications Committee, Documentation & Secretariat Committee, Marketing Committee, and Research & Extensions Committee for their invaluable contributions.
        </AnimatedDescription>
        <MemberCardGrid members={websiteContributors} safariUrl="webdev.pupascii.com" safariImageSrc="/webdev.jpg" />
      </GreySectionShell>

      {/* footer */}
      <CinematicFooter />

    </main>
  );
}

// to do: list
// 1. sir mon page /done
//    - picture of sir mon
//    - description of sir mon (who he is, his role in the org) not yet, need help
// 2. insert pics in the committee sections /done
// 3. website contributors section carousel / done * made into a grid
// 4. see more members button and modal for each committee section /done
// 5. be part of the community button (medium) ?
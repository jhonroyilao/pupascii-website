// Import necessary components and libraries
import Navbar from "@/components/custom/navbar"
import { CinematicFooter } from "@/components/ui/motion-footer"
import { LandingAccordionItem } from "@/components/interactive-image-accordion"


export default function CommitteePage() {
  return (
    <main className="min-h-screen">
          
        {/* navbar */}
        <Navbar />
       
    
        {/* meet the leaders section -tim*/}
        <LandingAccordionItem />

        {/* exec section */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700 text-center mt-12 mb-8">Executive Officers</h1>
          <p className="text-center text-lg text-gray-600 mb-12">The individuals leading ASCII through direction, coordination, and decision-making, working together to ensure every initiative, event, and project runs smoothly while serving the community with dedication and purpose.</p>

          {/* execs card -tim*/}
          <div>

          </div>
        </div>

        {/* ccc section -tim*/}
        <div>
          <h1 className="text-4xl font-bold text-blue-700 text-center mt-12 mb-8">Creative Communications</h1>
          <p className="text-center text-lg text-gray-600 mb-12">The Creative Communications Committee transforms ideas into compelling visuals and narratives. By blending artistic expression with clear communication to produce captivating publication materials, they shape how ASCII is seen—crafting a brand identity that not only informs but also excites, connects, and encourages the community to engage more deeply.</p>

          {/* ccc card */}
          <div>
          </div>
        </div>

        {/* docusec section -joan*/}
        <div>
          <h1 className="text-4xl font-bold text-blue-700 text-center mt-12 mb-8">Documentation & Secretariat</h1>
          <p className="text-center text-lg text-gray-600 mb-12">The Documentation and Secretariat Committee ensures the smooth flow of information within the organization. From recording key moments to maintaining internal records, it ensures our milestones and progress are accurately documented. Their work preserves our history, supporting continuity, transparency, and a strong foundation for future growth.</p>
          {/* docusec card */}
          <div>
          </div>
        </div>

        {/* marketing section -joan*/}
        <div>
          <h1 className="text-4xl font-bold text-blue-700 text-center mt-12 mb-8">Marketing</h1>
          <p className="text-center text-lg text-gray-600 mb-12">Visibility is key to growth, and the Marketing Committee makes sure the spotlight is on ASCII. Through strategic promotion, curated campaigns, and dynamic social media management, they expand our reach and attract new audiences. This committee brings our vision to the forefront, inspiring others to join our journey in computer intelligence integration.</p>

          {/* marketing card */}
          <div>
          </div>
        </div>

        {/* programs section -joan*/}
        <div>
          <h1 className="text-4xl font-bold text-blue-700 text-center mt-12 mb-8">Programs</h1>
          <p className="text-center text-lg text-gray-600 mb-12">The Programs Committee leads the planning, coordination, and execution of ASCII’s events, ensuring that every initiative runs smoothly with purpose. They create opportunities for leadership, learning, and lasting connections, fostering responsibility, confidence, and teamwork to help members grow while creating events that strengthen the ASCII community.</p>
          {/* programs card */}
          <div>
          </div>
        </div>

        {/* rne section -joan*/}
        <div>
          <h1 className="text-4xl font-bold text-blue-700 text-center mt-12 mb-8">Research & Extensions</h1>
          <p className="text-center text-lg text-gray-600 mb-12">Responsible for producing insightful articles and managing collaborations, the Research and Extensions Committee ensures every message reflects our identity and resonates with our audience. Beyond crafting captions, they bridge ASCII with new opportunities, innovations, and partnerships that benefit members and partners alike.</p>

          {/* rne card */}
          <div>
          </div>
        </div>

        {/* website contributors - tim*/}
        <div>
          
        </div>

          {/* join the community - tim*/}

        {/* footer */}
        <CinematicFooter />

        </main>

 
  );
}

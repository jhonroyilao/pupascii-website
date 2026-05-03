"use client"

import { useState } from "react"
import Image from "next/image"
import { TextAnimate } from "../ui/text-animate";

const faqs = [
  {
    question: "What does ASCII stand for?",
    answer:
      "PUP Association of Students for Computer Intelligence and Integration.",
  },
  {
    question: "Who can join PUP ASCII?",
    answer:
      "All bonafide students of the Department of Computer Science at the Polytechnic University of the Philippines, Manila.",
  },
  {
    question: "How do I become a member?",
    answer:
      "You can join by participating in our membership drives and following our official announcements.",
  },
  {
    question: "Do I need experience in programming or tech to join?",
    answer:
      "No experience required. We welcome beginners and provide opportunities to learn and grow.",
  },
  {
    question: "Where can I get updates about events?",
    answer:
      "Follow our official social media pages to stay updated on announcements and activities.",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
<div className="space-y-6">
  <p
    className="text-sm font-medium text-[#0062e4] tracking-widest uppercase mb-4"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    /faqs
  </p>

   <h4 className="mx-auto max-w-5xl font-bold tracking-tight text-black">
  <TextAnimate
    animation="blurInUp"
    by="word"
    className="text-4xl md:text-6xl lg:text-7xl leading-tight"
    style={{ fontFamily: "Instrument Sans, sans-serif" }}
  >
  frequently
  </TextAnimate>

  {" "}

  <TextAnimate
    animation="blurInUp"
    by="word"
    className="text-4xl md:text-6xl lg:text-7xl leading-tight text-[#0062e4]"
    style={{ fontFamily: "Instrument Sans, sans-serif" }}
  >
  asked questions!
  </TextAnimate>
</h4>

  <p
    className="text-gray-500 text-[15px] max-w-xl"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    Find quick answers to common questions about PUP ASCII, from
    membership to events and organization activities.
  </p>

          {/* CONTACT CARD */}
          <div className="border border-blue-500 rounded-2xl p-6 px-9 bg-blue-400/10 shadow-sm max-w-xl relative overflow-visible">

            {/* Content */}
            <div className="space-y-2 relative z-10 pr-20">
              <h3
                className="text-gray-900 font-semibold text-[25px] tracking-normal"
                style={{ fontFamily: "Instrument Sans, sans-serif" }}
              >
                Still have questions?
              </h3>

              <p
                className="text-gray-500 text-sm"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.5" }}
              >
                Message us on our official PUP ASCII<br />social media pages.
              </p>

              {/* Icons */}
              <div className="py-2 flex gap-2 items-center">

                {/* Facebook */}
                <span className="cursor-pointer hover:opacity-70 transition">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M23.9987 2.66663H19.9987C18.2306 2.66663 16.5349 3.369 15.2847 4.61925C14.0344 5.86949 13.332 7.56518 13.332 9.33329V13.3333H9.33203V18.6666H13.332V29.3333H18.6654V18.6666H22.6654L23.9987 13.3333H18.6654V9.33329C18.6654 8.97967 18.8058 8.64053 19.0559 8.39048C19.3059 8.14044 19.6451 7.99996 19.9987 7.99996H23.9987V2.66663Z"
                      stroke="#676E76"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>





                {/* Instagram   <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.0284 9.29663H25.0427M10.0107 2.86047H24.3132C28.2628 2.86047 31.4645 6.06221 31.4645 10.0118V24.3143C31.4645 28.2639 28.2628 31.4656 24.3132 31.4656H10.0107C6.06111 31.4656 2.85938 28.2639 2.85938 24.3143V10.0118C2.85938 6.06221 6.06111 2.86047 10.0107 2.86047ZM22.883 16.262C23.0595 17.4523 22.8562 18.668 22.3019 19.7361C21.7477 20.8042 20.8708 21.6704 19.7959 22.2114C18.7211 22.7524 17.503 22.9407 16.3149 22.7495C15.1269 22.5584 14.0293 21.9974 13.1784 21.1465C12.3276 20.2956 11.7666 19.1981 11.5755 18.0101C11.3843 16.822 11.5726 15.6039 12.1136 14.529C12.6546 13.4542 13.5208 12.5773 14.5889 12.023C15.657 11.4688 16.8727 11.2655 18.063 11.442C19.2772 11.6221 20.4013 12.1878 21.2692 13.0558C22.1371 13.9237 22.7029 15.0478 22.883 16.262Z" stroke="#676E76" stroke-width="3.00354" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      */}
                <span className="cursor-pointer hover:opacity-70 transition">
                  <svg width="30" height="30" viewBox="0 0 35 35" fill="none">
                    <path
                      d="M25.0284 9.29663H25.0427M10.0107 2.86047H24.3132C28.2628 2.86047 31.4645 6.06221 31.4645 10.0118V24.3143C31.4645 28.2639 28.2628 31.4656 24.3132 31.4656H10.0107C6.06111 31.4656 2.85938 28.2639 2.85938 24.3143V10.0118C2.85938 6.06221 6.06111 2.86047 10.0107 2.86047ZM22.883 16.262C23.0595 17.4523 22.8562 18.668 22.3019 19.7361C21.7477 20.8042 20.8708 21.6704 19.7959 22.2114C18.7211 22.7524 17.503 22.9407 16.3149 22.7495C15.1269 22.5584 14.0293 21.9974 13.1784 21.1465C12.3276 20.2956 11.7666 19.1981 11.5755 18.0101C11.3843 16.822 11.5726 15.6039 12.1136 14.529C12.6546 13.4542 13.5208 12.5773 14.5889 12.023C15.657 11.4688 16.8727 11.2655 18.063 11.442C19.2772 11.6221 20.4013 12.1878 21.2692 13.0558C22.1371 13.9237 22.7029 15.0478 22.883 16.262Z"
                      stroke="#676E76"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                {/* Email */}
                <span className="cursor-pointer hover:opacity-70 transition">
                  <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M36.6654 9.99996C36.6654 8.16663 35.1654 6.66663 33.332 6.66663H6.66536C4.83203 6.66663 3.33203 8.16663 3.33203 9.99996M36.6654 9.99996V30C36.6654 31.8333 35.1654 33.3333 33.332 33.3333H6.66536C4.83203 33.3333 3.33203 31.8333 3.33203 30V9.99996M36.6654 9.99996L19.9987 21.6666L3.33203 9.99996"
                      stroke="#676E76"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Mascot */}
            <Image
              src="/hopper.png"
              alt="Mascot"
              width={240}
              height={240}
              className="absolute bottom-0 right-0 pointer-events-none select-none"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        
      <div className="space-y-4 py-36">
  {faqs.map((faq, index) => {
    const isOpen = activeIndex === index

    return (
      <div
        key={index}
        className="border border-blue-500 rounded-2xl bg-blue-400/10 transition-all"
      >
        <button
          onClick={() => toggle(index)}
          className="w-full flex justify-between items-center px-5 py-4 text-left"
        >
          <span
            style={{ fontFamily: "Instrument Sans, sans-serif" }}
            className="text-sm font-semibold text-black"
          >
            {faq.question}
          </span>

          {/* Arrow */}
          <span
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 10.8L7.4 15.4L6 14L12 8L18 14L16.6 15.4L12 10.8Z"
                fill="#1D1B20"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div
            className="px-5 pb-4 text-sm text-gray-500 rounded-b-2xl"
            style={{
              fontFamily: "Inter, sans-serif",
              lineHeight: "1.5",
            }}
          >
            {faq.answer}
          </div>
        )}
      </div>
    )
  })}
</div>

      </div>
    </section>
  )
}
"use client";

import { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EventMeta } from "@/components/events/EventMeta";
import { EventImage } from "@/components/events/EventImage";
import Folder from "@/components/Folder";

export default function EventCardFolder({ event }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Folder
        title={event.shortTitle}
        date={event.monthYear}
        filename={event.keyword}
        imageSrc={event.image}
        imageAlt={event.title}
        onClick={() => setOpen(true)}
      />

      {/* ── Detail Modal ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl overflow-hidden border-none bg-white p-0 shadow-2xl sm:rounded-[24px]">
          <div className="max-h-[90vh] overflow-y-auto">
            <div className="relative aspect-[16/8] bg-[#063A80]">
              <EventImage
                src={event.image}
                alt={event.title}
                priority
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-5 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0062E4] shadow-sm">
                {event.status}
              </span>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <DialogHeader className="text-left">
                <DialogTitle className="font-bricolage text-3xl font-bold leading-tight text-[#063A80] sm:text-4xl">
                  {event.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Event details for {event.title}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 flex flex-wrap gap-4">
                <EventMeta icon={CalendarDays}>{event.date}</EventMeta>
                <EventMeta icon={MapPin}>{event.location}</EventMeta>
              </div>

              {event.description && (
                <p className="mt-5 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  {event.description}
                </p>
              )}

              {event.activities?.length > 0 && (
                <div className="mt-6 rounded-[18px] bg-[#eef5ff] p-5">
                  <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#063A80]">
                    Key Activities
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {event.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-3 text-sm font-medium text-[#063A80]">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0062E4]" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[#0062E4] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#063A80] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E4]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
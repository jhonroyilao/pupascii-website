"use client";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

export function EventImage({ src, alt, className = "", priority = false }) {
  if (!src) {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden bg-[#eef4ff] ${className}`}>
        <ImageIcon className="h-8 w-8 text-[#0062E4]/35" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className={className}
      priority={priority}
    />
  );
}
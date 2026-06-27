"use client";

import Image from "next/image";
import "./Folder.css";

/**
 * Folder
 * Uses FRONT.svg + BACK.svg from /public/svg/
 *
 * Props:
 *   title      string        — event name on the front flap
 *   date       string        — month/year shown below title
 *   filename   string        — desktop-style label below folder
 *   imageSrc   string        — path to event image
 *   imageAlt   string        — alt text for image
 *   onClick    fn            — opens the detail modal
 */
export default function Folder({ title, date, filename, imageSrc, imageAlt = "", onClick }) {
  return (
    <button
      type="button"
      className="folder-wrapper"
      onClick={onClick}
      aria-label={`Open event: ${title}`}
    >
      <div className="folder-body">

        {/* 1 ── BACK SVG */}
        <div className="folder-back">
          <Image
            src="/svg/BACK.svg"
            alt=""
            fill
            sizes="360px"
            aria-hidden="true"
          />
        </div>

        {/* 2 ── IMAGE CARD — slides up on hover */}
        <div className="folder-paper">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="316px"
              className="folder-paper-img"
            />
          )}
        </div>

        {/* 3 ── FRONT SVG + text label */}
        <div className="folder-front">
          {/* SVG shape */}
          <Image
            src="/svg/FRONT.svg"
            alt=""
            fill
            sizes="360px"
            className="folder-front-svg"
            aria-hidden="true"
          />

          {/* Text on top of SVG */}
          <div className="folder-front-text">
            <p className="folder-front-title">{title}</p>
            {date && <p className="folder-front-date">{date}</p>}
          </div>
        </div>

      </div>

      {/* Desktop filename */}
      {filename && (
        <span className="folder-filename">{filename}</span>
      )}
    </button>
  );
}
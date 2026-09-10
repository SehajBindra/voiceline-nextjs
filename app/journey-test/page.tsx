"use client"
import { VoicelineStudioJourneyFilledSvg } from "@/components/sections/voiceline-studio-journey-filled-svg"

export default function JourneyTestPage() {
  return (
    <main style={{ background: "#fff", padding: 16, fontFamily: "monospace" }}>
      <h1 style={{ fontSize: 14 }}>
        journey-test: PNG reference vs SVG conversion (pixel-perfect check)
      </h1>
      <p style={{ fontSize: 12, color: "#666" }}>
        Top = PNG reference (1280x720). Bottom = SVG conversion. Both at same
        width for Playwright comparison.
      </p>
      <div style={{ display: "grid", gap: 16, maxWidth: 1280 }}>
        <div>
          <h2 style={{ fontSize: 12 }}>REFERENCE PNG</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="journey-ref"
            src="/journey-reference.png"
            alt="reference"
            width={1280}
            height={720}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <div>
          <h2 style={{ fontSize: 12 }}>SVG CONVERSION</h2>
          <div id="journey-svg">
            <VoicelineStudioJourneyFilledSvg />
          </div>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
        >
          <div>
            <h2 style={{ fontSize: 12 }}>REF CROPS (for detail)</h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/journey-reference.png"
              alt="ref crop"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: 12 }}>SVG CROPS</h2>
            <VoicelineStudioJourneyFilledSvg />
          </div>
        </div>
      </div>
    </main>
  )
}

"use client";
import { HeroRecordingSessionBwSvg } from "@/components/sections/hero-recording-session-bw-svg";

export default function HeroTestPage() {
  return (
    <main style={{ background: "#fff", padding: 16 }}>
      <h1 style={{ fontSize: 14, fontFamily: "monospace" }}>hero-test recording-session boil=false</h1>
      <HeroRecordingSessionBwSvg boil={false} />
    </main>
  );
}

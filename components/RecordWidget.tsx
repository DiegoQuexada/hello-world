"use client";

import { useState } from "react";

export default function RecordWidget() {
  const [status, setStatus] = useState("Idle");

  const startMockRecording = () => {
    setStatus("Recording...");
    setTimeout(() => setStatus("Transcribed and saved (mock)."), 1800);
  };

  return (
    <section className="card">
      <h2>Voice-first capture</h2>
      <p className="muted">Tap once and dictate. Optimized for minimal interruption during experiments.</p>
      <button className="big-btn" onClick={startMockRecording}>
        🎙️ Record Voice Note
      </button>
      <p>
        Status: <strong>{status}</strong>
      </p>
      <p className="muted">MVP note: Web Speech API / external STT provider can plug into this button.</p>
    </section>
  );
}

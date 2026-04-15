import RecordWidget from "@/components/RecordWidget";

export default function RecordPage() {
  return (
    <div className="grid">
      <RecordWidget />
      <section className="card">
        <h3>Recording tips for gloved/low-attention use</h3>
        <ul>
          <li>Use the large button (single tap) and immediate audio cue.</li>
          <li>Speak sample IDs and units clearly (e.g., “B7”, “32 kPa”).</li>
          <li>Edit transcription immediately after capture to reduce scientific errors.</li>
        </ul>
      </section>
    </div>
  );
}

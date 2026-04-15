import { Note } from "@/lib/types";

export default function Timeline({ notes }: { notes: Note[] }) {
  const ordered = [...notes].sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  return (
    <section className="card">
      <h3>Timeline</h3>
      {ordered.map((note) => (
        <div key={note.id} className="timeline-item">
          <strong>{new Date(note.createdAt).toLocaleTimeString()}</strong>
          <p>{note.title}</p>
          <p className="muted">{note.experimentSessionId} · {note.tags.join(", ")}</p>
        </div>
      ))}
    </section>
  );
}

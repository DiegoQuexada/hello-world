import { Note } from "@/lib/types";

export default function NoteCard({ note }: { note: Note }) {
  return (
    <article className="card note-card">
      <h4>{note.title}</h4>
      <p className="muted">
        {new Date(note.createdAt).toLocaleString()} · {note.category} · {note.noteType}
      </p>
      <p><strong>Raw transcript:</strong> {note.transcriptRaw}</p>
      <p><strong>Edited note:</strong> {note.transcriptEdited}</p>
      <p><strong>Tags:</strong> {note.tags.join(", ") || "none"}</p>
      <p><strong>Sample:</strong> {note.sampleId ?? "n/a"}</p>
    </article>
  );
}

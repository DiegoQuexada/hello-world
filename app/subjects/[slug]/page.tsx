import NoteCard from "@/components/NoteCard";
import { db } from "@/lib/store";
import { subjects } from "@/lib/sample-data";

export default function SubjectPage({ params }: { params: { slug: string } }) {
  const subject = subjects.find((s) => s.slug === params.slug);
  const notes = subject ? db.notes.filter((n) => n.subjectId === subject.id) : [];

  return (
    <div className="grid">
      <section className="card">
        <h2>Subject view: {subject?.name ?? params.slug}</h2>
        <p className="muted">Grouped notes for a specific theme.</p>
      </section>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}

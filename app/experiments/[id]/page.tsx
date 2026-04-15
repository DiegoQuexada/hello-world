import { notFound } from "next/navigation";
import NoteCard from "@/components/NoteCard";
import { summarizeExperiment } from "@/lib/ai";
import { experimentSessions, projects } from "@/lib/sample-data";
import { db } from "@/lib/store";

export default function ExperimentDetailPage({ params }: { params: { id: string } }) {
  const session = experimentSessions.find((e) => e.id === params.id);
  if (!session) return notFound();

  const notes = db.notes.filter((n) => n.experimentSessionId === session.id);
  const project = projects.find((p) => p.id === session.projectId);
  const summary = summarizeExperiment(notes);

  return (
    <div className="grid">
      <section className="card">
        <h2>{session.name}</h2>
        <p><strong>Project:</strong> {project?.name}</p>
        <p><strong>Objective:</strong> {session.objective}</p>
        <h3>Auto summary</h3>
        <p><strong>Objective:</strong> {summary.objective}</p>
        <p><strong>Observations:</strong> {summary.observations.join(" | ") || "None"}</p>
        <p><strong>Anomalies:</strong> {summary.anomalies.join(" | ") || "None"}</p>
        <pre>{summary.nextActions || "No actions detected"}</pre>
      </section>

      <section className="card">
        <h3>Attachments (MVP placeholder)</h3>
        <p className="muted">No files uploaded yet. Add microscopy images / CSV files in next iteration.</p>
      </section>

      <section className="grid">
        <h3>Session notes ({notes.length})</h3>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </section>
    </div>
  );
}

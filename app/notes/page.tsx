import NotesFilters from "@/components/NotesFilters";
import { db } from "@/lib/store";

export default function NotesPage() {
  return (
    <div className="grid">
      <section className="card">
        <h2>Notes list</h2>
        <p className="muted">Retrieve by date, subject, project, experiment, tags, and full-text query.</p>
      </section>
      <NotesFilters notes={db.notes} />
    </div>
  );
}

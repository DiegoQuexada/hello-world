"use client";

import { useMemo, useState } from "react";
import { Note } from "@/lib/types";
import NoteCard from "@/components/NoteCard";

export default function NotesFilters({ notes }: { notes: Note[] }) {
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [project, setProject] = useState("");
  const [experiment, setExperiment] = useState("");

  const filtered = useMemo(() => {
    return notes.filter((n) => {
      const blob = `${n.title} ${n.transcriptEdited} ${n.tags.join(" ")}`.toLowerCase();
      const matchesQuery = query ? blob.includes(query.toLowerCase()) : true;
      const matchesDate = date ? n.date === date : true;
      const matchesSubject = subject ? n.subjectId === subject : true;
      const matchesProject = project ? n.projectId === project : true;
      const matchesExperiment = experiment ? n.experimentSessionId === experiment : true;
      return matchesQuery && matchesDate && matchesSubject && matchesProject && matchesExperiment;
    });
  }, [date, experiment, notes, project, query, subject]);

  return (
    <section>
      <details open className="card">
        <summary><strong>Search & filters</strong></summary>
        <div className="filters">
          <input placeholder="Keyword / full text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input placeholder="Subject id (e.g., s1)" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <input placeholder="Project id (e.g., p1)" value={project} onChange={(e) => setProject(e.target.value)} />
          <input
            placeholder="Experiment id (e.g., e1)"
            value={experiment}
            onChange={(e) => setExperiment(e.target.value)}
          />
        </div>
      </details>
      <div className="grid" style={{ marginTop: "1rem" }}>
        {filtered.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
        {filtered.length === 0 ? <p className="muted">No notes match current filters.</p> : null}
      </div>
    </section>
  );
}

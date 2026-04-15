import Link from "next/link";
import RecordWidget from "@/components/RecordWidget";
import Timeline from "@/components/Timeline";
import { db } from "@/lib/store";
import { experimentSessions, projects, subjects } from "@/lib/sample-data";
import { summarizeDaily } from "@/lib/ai";

export default function DashboardPage() {
  const today = "2026-04-15";
  const todaysNotes = db.notes.filter((n) => n.date === today);
  const dailySummary = summarizeDaily(todaysNotes);

  return (
    <div className="grid" style={{ gap: "1rem" }}>
      <section className="card">
        <h2>Today at a glance</h2>
        <p className="muted">{today}</p>
        <p>{dailySummary}</p>
        <div className="grid two">
          <div className="card">
            <h3>{todaysNotes.length}</h3>
            <p className="muted">Notes captured today</p>
          </div>
          <div className="card">
            <h3>{experimentSessions.length}</h3>
            <p className="muted">Recent experiment sessions</p>
          </div>
        </div>
      </section>

      <RecordWidget />

      <section className="card">
        <h2>Quick actions</h2>
        <div className="grid two">
          <Link className="card" href="/notes">Open notes + filters</Link>
          <Link className="card" href="/experiments/e1">Current experiment page</Link>
          <Link className="card" href="/subjects/cell-culture">Subject view: cell culture</Link>
          <Link className="card" href="/settings">Settings / integrations</Link>
        </div>
      </section>

      <Timeline notes={todaysNotes} />

      <section className="card">
        <h2>Recent experiments</h2>
        {experimentSessions.map((session) => {
          const project = projects.find((p) => p.id === session.projectId)?.name;
          const subject = subjects.find((s) => s.id === session.subjectId)?.name;
          return (
            <p key={session.id}>
              <Link href={`/experiments/${session.id}`}>{session.name}</Link> · {project} · {subject}
            </p>
          );
        })}
      </section>
    </div>
  );
}

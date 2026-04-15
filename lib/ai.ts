import { Note } from "@/lib/types";

export function suggestMetadata(transcript: string) {
  const lower = transcript.toLowerCase();
  const tags = [
    lower.includes("sample") ? "sample" : null,
    lower.includes("microscopy") ? "microscopy" : null,
    lower.includes("incubator") ? "incubator" : null,
    lower.includes("repeat") ? "repeat" : null
  ].filter(Boolean) as string[];

  const noteType = lower.includes("repeat")
    ? "next_step"
    : lower.includes("problem") || lower.includes("issue")
      ? "issue"
      : lower.includes("result") || lower.includes("peak")
        ? "result"
        : "observation";

  return {
    title: transcript.split(" ").slice(0, 8).join(" "),
    tags,
    likelySubject: lower.includes("microscopy") ? "microscopy" : "cell culture",
    noteType
  };
}

export function summarizeDaily(notes: Note[]) {
  const issues = notes.filter((n) => n.noteType === "issue").length;
  const results = notes.filter((n) => n.noteType === "result").length;
  return `Captured ${notes.length} notes today (${results} results, ${issues} issues). Main focus: ${notes
    .map((n) => n.title)
    .slice(0, 3)
    .join("; ")}.`;
}

export function summarizeExperiment(notes: Note[]) {
  const objective = notes[0]?.title ?? "Experiment follow-up";
  const observations = notes.filter((n) => n.noteType === "observation").map((n) => n.aiSummary);
  const anomalies = notes.filter((n) => n.noteType === "issue").map((n) => n.aiSummary);
  const nextActions = notes
    .filter((n) => ["next_step", "issue"].includes(n.noteType))
    .map((n) => `- ${n.transcriptEdited}`)
    .slice(0, 3)
    .join("\n");

  return {
    objective,
    observations,
    anomalies,
    nextActions
  };
}

import { NextRequest, NextResponse } from "next/server";
import { suggestMetadata } from "@/lib/ai";
import { db } from "@/lib/store";

export async function GET() {
  return NextResponse.json(db.notes);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const transcriptRaw = String(body.transcriptRaw || "");
  const suggestions = suggestMetadata(transcriptRaw);

  const newNote = {
    id: `n${db.notes.length + 1}`,
    createdAt: new Date().toISOString(),
    date: new Date().toISOString().slice(0, 10),
    audioFileUrl: body.audioFileUrl || "/audio/new.wav",
    transcriptRaw,
    transcriptEdited: body.transcriptEdited || transcriptRaw,
    aiSummary: body.aiSummary || suggestions.title,
    title: body.title || suggestions.title,
    category: body.category || suggestions.likelySubject,
    tags: body.tags || suggestions.tags,
    projectId: body.projectId || "p1",
    experimentSessionId: body.experimentSessionId || "e1",
    subjectId: body.subjectId || "s1",
    sampleId: body.sampleId,
    noteType: body.noteType || suggestions.noteType,
    linkedTasks: []
  };

  db.notes.unshift(newNote);
  return NextResponse.json(newNote, { status: 201 });
}

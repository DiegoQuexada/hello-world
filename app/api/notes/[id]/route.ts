import { NextRequest, NextResponse } from "next/server";
import { getNoteById } from "@/lib/store";

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const note = getNoteById(params.id);
  if (!note) {
    return NextResponse.json({ error: "Note not found" }, { status: 404 });
  }

  const body = await request.json();
  note.transcriptEdited = body.transcriptEdited ?? note.transcriptEdited;
  note.tags = body.tags ?? note.tags;
  note.title = body.title ?? note.title;

  return NextResponse.json(note);
}

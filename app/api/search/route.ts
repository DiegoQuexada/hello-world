import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/store";

export async function POST(request: NextRequest) {
  const { query } = await request.json();
  const normalized = String(query || "").toLowerCase();

  const matches = db.notes.filter((note) => {
    const blob = `${note.date} ${note.title} ${note.transcriptEdited} ${note.sampleId || ""} ${note.tags.join(" ")}`.toLowerCase();
    return blob.includes(normalized);
  });

  return NextResponse.json({
    query,
    count: matches.length,
    matches
  });
}

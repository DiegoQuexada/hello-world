import { NextRequest, NextResponse } from "next/server";
import { summarizeDaily } from "@/lib/ai";
import { db } from "@/lib/store";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date") || new Date().toISOString().slice(0, 10);
  const notes = db.notes.filter((note) => note.date === date);
  return NextResponse.json({ date, summary: summarizeDaily(notes), notesCount: notes.length });
}

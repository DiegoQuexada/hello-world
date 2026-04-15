import { NextResponse } from "next/server";
import { summarizeExperiment } from "@/lib/ai";
import { db } from "@/lib/store";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const notes = db.notes.filter((note) => note.experimentSessionId === params.id);
  if (notes.length === 0) {
    return NextResponse.json({ error: "Experiment not found or no notes" }, { status: 404 });
  }

  return NextResponse.json(summarizeExperiment(notes));
}

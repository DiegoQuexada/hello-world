import { notesSeed, tasksSeed } from "@/lib/sample-data";
import { Note, TaskReminder } from "@/lib/types";

export const db = {
  notes: [...notesSeed] as Note[],
  tasks: [...tasksSeed] as TaskReminder[]
};

export function getNoteById(id: string): Note | undefined {
  return db.notes.find((note) => note.id === id);
}

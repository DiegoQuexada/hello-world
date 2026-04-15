export type NoteType = "observation" | "result" | "reminder" | "issue" | "next_step";

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
}

export interface Subject {
  id: string;
  slug: string;
  name: string;
}

export interface ExperimentSession {
  id: string;
  projectId: string;
  subjectId: string;
  name: string;
  objective: string;
  startedAt: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface TaskReminder {
  id: string;
  text: string;
  done: boolean;
  noteId: string;
}

export interface Attachment {
  id: string;
  noteId: string;
  name: string;
  url: string;
}

export interface Note {
  id: string;
  createdAt: string;
  date: string;
  audioFileUrl: string;
  transcriptRaw: string;
  transcriptEdited: string;
  aiSummary: string;
  title: string;
  category: string;
  tags: string[];
  projectId: string;
  experimentSessionId: string;
  subjectId: string;
  sampleId?: string;
  noteType: NoteType;
  linkedTasks: string[];
}

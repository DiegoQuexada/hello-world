-- Core entities
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE projects (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE subjects (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL
);

CREATE TABLE experiment_sessions (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES subjects(id),
  name TEXT NOT NULL,
  objective TEXT,
  started_at TIMESTAMPTZ NOT NULL,
  ended_at TIMESTAMPTZ
);

CREATE TABLE tags (
  id UUID PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE notes (
  id UUID PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  note_date DATE NOT NULL,
  audio_file_url TEXT,
  transcript_raw TEXT NOT NULL,
  transcript_edited TEXT NOT NULL,
  ai_summary TEXT,
  title TEXT,
  category TEXT,
  sample_id TEXT,
  note_type TEXT CHECK (note_type IN ('observation', 'result', 'reminder', 'issue', 'next_step')),
  project_id UUID REFERENCES projects(id),
  experiment_session_id UUID REFERENCES experiment_sessions(id),
  subject_id UUID REFERENCES subjects(id)
);

CREATE TABLE note_tags (
  note_id UUID REFERENCES notes(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (note_id, tag_id)
);

CREATE TABLE task_reminders (
  id UUID PRIMARY KEY,
  note_id UUID REFERENCES notes(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  done BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE attachments (
  id UUID PRIMARY KEY,
  note_id UUID REFERENCES notes(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- retrieval performance
CREATE INDEX idx_notes_date ON notes(note_date);
CREATE INDEX idx_notes_project ON notes(project_id);
CREATE INDEX idx_notes_experiment ON notes(experiment_session_id);
CREATE INDEX idx_notes_subject ON notes(subject_id);
CREATE INDEX idx_notes_fulltext ON notes USING GIN (to_tsvector('english', transcript_edited || ' ' || COALESCE(title, '')));

# Lab Assistant (MVP)

A **voice-first scientific notebook** for researchers who need to capture observations with minimal interruption during lab work.

The app is designed to feel like a practical lab assistant: tap once, dictate, auto-transcribe, store with timestamps and experiment context, then retrieve quickly with search and filters.

---

## Product description (concise)

**Lab Assistant** is a lightweight web app for real-time experiment note capture. It prioritizes reliable recording and retrieval over heavy workflows. Scientists can:

- capture voice notes in one tap,
- review/edit transcription to correct scientific terms,
- tag notes with project, experiment session, subject, and sample IDs,
- search via date, subject, project, experiment, tags, or full text,
- see timelines and per-experiment summaries.

---

## MVP pages

- **Dashboard** (`/`): today’s notes, quick actions, recent experiments, timeline.
- **Record** (`/record`): large voice-capture widget.
- **Notes list** (`/notes`): collapsible filters + full-text search.
- **Experiment/session detail** (`/experiments/[id]`): notes, attachments placeholder, auto summary.
- **Subject/tag view** (`/subjects/[slug]`): grouped notes by theme.
- **Settings** (`/settings`): provider/config placeholders + NL query examples.

---

## Suggested folder structure

```text
app/
  api/
    notes/
    search/
    summaries/
  experiments/[id]/
  notes/
  record/
  settings/
  subjects/[slug]/
  globals.css
  layout.tsx
  page.tsx
components/
  NoteCard.tsx
  NotesFilters.tsx
  RecordWidget.tsx
  Timeline.tsx
lib/
  ai.ts
  ai-prompts.md
  sample-data.ts
  store.ts
  types.ts
db/
  schema.sql
  seed.sql
```

---

## Database schema

A relational schema is included in `db/schema.sql` with the requested entities:

- `users`
- `projects`
- `subjects`
- `experiment_sessions`
- `notes`
- `tags`
- `note_tags`
- `task_reminders`
- `attachments`

The `notes` table includes all requested note fields (`created_at`, audio URL, raw/edited transcript, ai summary, category, tags via join table, project/session links, sample ID, note type, linked tasks via task table).

---

## Main React components

- `RecordWidget`: big, glove-friendly recording CTA with status feedback.
- `NoteCard`: displays raw transcript vs edited note clearly.
- `NotesFilters`: date/subject/project/experiment/full-text filtering.
- `Timeline`: chronological display of notes.

---

## API routes (MVP)

- `GET /api/notes` – list all notes.
- `POST /api/notes` – create note, with mock AI metadata suggestions.
- `PATCH /api/notes/:id` – edit transcription/title/tags.
- `POST /api/search` – natural-language-like keyword retrieval.
- `GET /api/summaries/daily?date=YYYY-MM-DD` – daily summary.
- `GET /api/summaries/experiment/:id` – experiment summary.

> Note: MVP uses in-memory storage (`lib/store.ts`) for simplicity. Replace with Supabase/PostgreSQL in production.

---

## Seed/sample data

Included in `lib/sample-data.ts`:

- Projects: Hydrogel mechanics, Cell viability.
- Subjects: cell culture, microscopy, scaffold fabrication, FEM, reagents, troubleshooting.
- Sessions: hydrogel stiffness run + chondrocyte culture week 2.
- Example voice-note entries include:
  - possible B7 UV over-cure issue,
  - compression test result (32 kPa),
  - incubator humidity troubleshooting,
  - C2 vs B7 viability observation and follow-up task.

---

## Setup & run instructions

### 1) Install dependencies

```bash
npm install
```

### 2) Run locally

```bash
npm run dev
```

Open: `http://localhost:3000`

### 3) Build for production

```bash
npm run build
npm run start
```

---

## Notes on voice transcription

For MVP speed, the record button is mocked for transcription completion. Production options:

- Web Speech API (browser native),
- OpenAI Whisper API,
- Deepgram / AssemblyAI.

Integrate by replacing `startMockRecording` in `RecordWidget.tsx` and posting transcript + metadata to `/api/notes`.

---

## AI-assisted behavior currently covered

- Metadata suggestion after transcription (`lib/ai.ts`):
  - short title,
  - tags,
  - likely subject,
  - note type (observation/result/reminder/issue/next_step).
- Daily summary generation.
- Per-experiment summary generation (objective/observations/anomalies/next actions).
- Basic action-item detection via note type and linked task seed data.

Sample prompt templates for plugging in an LLM provider are in `lib/ai-prompts.md`.

---

## Why this MVP is intentionally simple

- Minimal-click capture is prioritized.
- Data model already supports advanced AI and attachments.
- Storage is in-memory for fast demo/testing; can be swapped to Postgres/Supabase.
- UI is clean/responsive for desktop + tablet and can be used with limited attention.

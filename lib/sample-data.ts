import { ExperimentSession, Note, Project, Subject, TaskReminder, User } from "@/lib/types";

export const user: User = {
  id: "u1",
  email: "researcher@labassistant.app",
  name: "Dr. Alex Rivera"
};

export const projects: Project[] = [
  { id: "p1", name: "Hydrogel Mechanics", description: "Stiffness tuning for cartilage scaffolds." },
  { id: "p2", name: "Cell Viability", description: "Chondrocyte response under altered media." }
];

export const subjects: Subject[] = [
  { id: "s1", slug: "cell-culture", name: "Cell culture" },
  { id: "s2", slug: "microscopy", name: "Microscopy" },
  { id: "s3", slug: "scaffold-fabrication", name: "Scaffold fabrication" },
  { id: "s4", slug: "finite-element-modeling", name: "Finite element modeling" },
  { id: "s5", slug: "reagents", name: "Reagents" },
  { id: "s6", slug: "troubleshooting", name: "Troubleshooting" }
];

export const experimentSessions: ExperimentSession[] = [
  {
    id: "e1",
    projectId: "p1",
    subjectId: "s3",
    name: "Hydrogel Stiffness Run 04",
    objective: "Compare 4% vs 6% polymer concentration and compressive response.",
    startedAt: "2026-04-15T08:45:00Z"
  },
  {
    id: "e2",
    projectId: "p2",
    subjectId: "s1",
    name: "Chondrocyte Culture Week 2",
    objective: "Assess morphology and viability of sample B7 and C2.",
    startedAt: "2026-04-14T09:10:00Z"
  }
];

export const notesSeed: Note[] = [
  {
    id: "n1",
    createdAt: "2026-04-15T09:02:11Z",
    date: "2026-04-15",
    audioFileUrl: "/audio/n1.wav",
    transcriptRaw:
      "sample b7 gel looked stiffer than expected after uv cure maybe over exposed start repeat prep with shorter exposure",
    transcriptEdited:
      "Sample B7 hydrogel appears stiffer than expected after UV curing; possible overexposure. Repeat prep with shorter UV exposure.",
    aiSummary: "B7 stiffness likely increased by over-curing; repeat with reduced UV duration.",
    title: "B7 may be over-cured",
    category: "scaffold fabrication",
    tags: ["b7", "uv-cure", "stiffness", "repeat"],
    projectId: "p1",
    experimentSessionId: "e1",
    subjectId: "s3",
    sampleId: "B7",
    noteType: "issue",
    linkedTasks: ["t1"]
  },
  {
    id: "n2",
    createdAt: "2026-04-15T10:18:44Z",
    date: "2026-04-15",
    audioFileUrl: "/audio/n2.wav",
    transcriptRaw:
      "compression test at point three strain gave peak stress thirty two kilopascals for six percent formulation",
    transcriptEdited:
      "Compression test at 0.3 strain produced peak stress of 32 kPa for the 6% formulation.",
    aiSummary: "6% formulation reached 32 kPa peak stress at 0.3 strain.",
    title: "6% gel compression result",
    category: "result",
    tags: ["compression", "6percent", "kPa"],
    projectId: "p1",
    experimentSessionId: "e1",
    subjectId: "s3",
    sampleId: "H6-2",
    noteType: "result",
    linkedTasks: []
  },
  {
    id: "n3",
    createdAt: "2026-04-14T11:06:08Z",
    date: "2026-04-14",
    audioFileUrl: "/audio/n3.wav",
    transcriptRaw: "check incubator humidity looked low around fifty percent this morning",
    transcriptEdited: "Incubator humidity looked low (~50%) this morning. Verify sensor calibration.",
    aiSummary: "Possible incubator humidity issue requiring calibration check.",
    title: "Incubator humidity may be low",
    category: "troubleshooting",
    tags: ["incubator", "humidity", "calibration"],
    projectId: "p2",
    experimentSessionId: "e2",
    subjectId: "s6",
    noteType: "issue",
    linkedTasks: ["t2"]
  },
  {
    id: "n4",
    createdAt: "2026-04-14T15:22:50Z",
    date: "2026-04-14",
    audioFileUrl: "/audio/n4.wav",
    transcriptRaw:
      "live dead stain suggests improved viability in c2 compared to b7 get microscopy images and quantify tomorrow",
    transcriptEdited:
      "Live/dead stain suggests improved viability in C2 compared to B7. Capture microscopy images and quantify tomorrow.",
    aiSummary: "C2 viability appears better than B7; imaging and quantification needed.",
    title: "C2 viability trend",
    category: "cell culture",
    tags: ["viability", "c2", "b7", "microscopy"],
    projectId: "p2",
    experimentSessionId: "e2",
    subjectId: "s1",
    sampleId: "C2",
    noteType: "observation",
    linkedTasks: ["t3"]
  }
];

export const tasksSeed: TaskReminder[] = [
  { id: "t1", text: "Repeat sample B7 with shorter UV cure.", done: false, noteId: "n1" },
  { id: "t2", text: "Check incubator humidity sensor calibration.", done: false, noteId: "n3" },
  { id: "t3", text: "Analyze microscopy images for C2 vs B7.", done: false, noteId: "n4" }
];

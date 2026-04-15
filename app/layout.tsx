import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab Assistant",
  description: "Voice-first scientific notebook for real-time lab observations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div>
            <h1>Lab Assistant</h1>
            <p className="muted">Capture, transcribe, and retrieve lab notes in real time.</p>
          </div>
          <nav>
            <Link href="/">Dashboard</Link>
            <Link href="/record">Record</Link>
            <Link href="/notes">Notes</Link>
            <Link href="/settings">Settings</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

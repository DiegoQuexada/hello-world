export default function SettingsPage() {
  return (
    <div className="grid">
      <section className="card">
        <h2>Settings</h2>
        <p>Email login, speech-to-text provider, and AI summarization keys can be configured here in production.</p>
        <div className="grid two">
          <label>
            Speech-to-text provider
            <select defaultValue="webspeech">
              <option value="webspeech">Web Speech API (default)</option>
              <option value="deepgram">Deepgram</option>
              <option value="whisper">Whisper API</option>
            </select>
          </label>
          <label>
            Auto-generate daily summary
            <select defaultValue="enabled">
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </label>
        </div>
      </section>

      <section className="card">
        <h3>Natural language examples</h3>
        <ul>
          <li><span className="kbd">show me everything from March 12 about chondrocyte culture</span></li>
          <li><span className="kbd">what did I say last week about sample B7</span></li>
          <li><span className="kbd">summarize my notes on hydrogel stiffness</span></li>
        </ul>
      </section>
    </div>
  );
}

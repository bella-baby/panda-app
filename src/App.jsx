import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <div className="panda" aria-hidden="true">🐼</div>
      <h1>panda-app</h1>
      <p className="tagline">A small &amp; fast React + Vite demo.</p>

      <button className="counter" onClick={() => setCount((c) => c + 1)}>
        Bamboo eaten: {count} 🎋
      </button>

      <p className="hint">
        Edit <code>src/App.jsx</code> and save — HMR will reload instantly.
      </p>
    </main>
  )
}

export default App

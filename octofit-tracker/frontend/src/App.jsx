import './App.css'

function App() {
  return (
    <main className="container py-5">
      <section className="row align-items-center g-4">
        <div className="col-lg-7">
          <p className="text-uppercase text-primary fw-semibold">OctoFit Tracker</p>
          <h1 className="display-4 fw-bold">A modern fitness experience for students and coaches.</h1>
          <p className="lead text-secondary">
            Log workouts, compare progress, and keep the whole team motivated from one polished multi-tier app.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="https://vite.dev/" target="_blank" rel="noreferrer">Explore the stack</a>
            <a className="btn btn-outline-secondary btn-lg" href="http://localhost:8000/api/health" target="_blank" rel="noreferrer">Check API health</a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 rounded-4 p-4 bg-light">
            <h2 className="h4 fw-semibold">Current app tiers</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-light">Frontend: React 19 + Vite on port 5173</li>
              <li className="list-group-item bg-light">Backend: Express + TypeScript on port 8000</li>
              <li className="list-group-item bg-light">Data: MongoDB + Mongoose on port 27017</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App

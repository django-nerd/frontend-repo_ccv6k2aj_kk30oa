import { Link } from 'react-router-dom'

export default function Test() {
  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-md mx-auto space-y-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Playground</h2>
          <p className="text-sm text-neutral-600 mt-1">Quick links for previewing screens.</p>
          <div className="mt-3 grid gap-2">
            <Link className="text-emerald-700 underline" to="/">Laporan Laba Rugi</Link>
            <Link className="text-emerald-700 underline" to="/neraca">Neraca (Balance Sheet)</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
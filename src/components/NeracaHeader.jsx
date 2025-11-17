import { useState } from 'react'

function NeracaHeader() {
  const [period, setPeriod] = useState('2025')
  const periods = ['2025', '2024', '2023']

  return (
    <header className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100 border border-emerald-100 shadow-sm">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-lg font-semibold text-neutral-900">Neraca Keuangan</h1>
            <div className="mt-1">
              <label className="text-xs text-neutral-500 block">Periode</label>
              <select
                className="mt-0.5 text-sm bg-white/70 backdrop-blur rounded-md border border-neutral-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                {periods.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm rounded-md bg-emerald-600 text-white shadow hover:bg-emerald-700 active:scale-[0.99] transition">Unduh</button>
            <button className="px-3 py-1.5 text-sm rounded-md border border-neutral-200 bg-white hover:bg-neutral-50">Menu</button>
          </div>
        </div>

        <div className="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-lg p-3">
          Aset Anda lebih tinggi dari liabilitas. Kondisi keuangan tergolong sehat.
        </div>
      </div>

      <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-emerald-200/40 blur-2xl" />
    </header>
  )
}

export default NeracaHeader

import { useState } from 'react'
import { ChevronRight, Download, MoreHorizontal, Info } from 'lucide-react'

function NeracaHeader() {
  const [period, setPeriod] = useState('2025')
  const periods = ['2025', '2024', '2023']

  return (
    <header className="rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="p-4">
        {/* Breadcrumb + actions */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-1 text-xs text-neutral-500">
              <span>Laporan</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-neutral-900">Neraca</span>
            </div>
            <div className="mt-1.5 flex items-center gap-2">
              <h1 className="text-lg font-semibold text-neutral-900 tracking-tight">Neraca Keuangan</h1>
              <div className="relative">
                <select
                  className="appearance-none text-xs bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-neutral-300"
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
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700">
              <Download className="h-4 w-4" />
              <span>Unduh</span>
            </button>
            <button className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-600">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Insight */}
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-3">
          <div className="mt-0.5 text-neutral-500">
            <Info className="h-4 w-4" />
          </div>
          <p className="text-xs leading-relaxed text-neutral-700">
            Aset Anda lebih tinggi dari liabilitas. Kondisi keuangan tergolong sehat.
          </p>
        </div>
      </div>
    </header>
  )
}

export default NeracaHeader

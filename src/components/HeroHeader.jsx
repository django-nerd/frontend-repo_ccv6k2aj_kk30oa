import { useState } from 'react'
import { Download, MoreVertical, Calendar } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function HeroHeader() {
  const [period, setPeriod] = useState('Juli 2025')

  return (
    <section className="relative w-full">
      <div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />
      </div>

      <div className="absolute inset-0 p-4 flex items-end">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Laporan Laba Rugi</h1>
              <div className="mt-2 inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-gray-200">
                <Calendar className="w-4 h-4 text-gray-600" />
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="bg-transparent text-sm text-gray-800 focus:outline-none"
                >
                  {['Juni 2025', 'Juli 2025', 'Agustus 2025'].map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-gray-700 border border-gray-200 shadow-sm active:scale-[0.98]">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Unduh</span>
              </button>
              <button className="p-2 rounded-xl bg-white border border-gray-200 text-gray-700 shadow-sm active:scale-[0.98]" aria-label="Menu">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

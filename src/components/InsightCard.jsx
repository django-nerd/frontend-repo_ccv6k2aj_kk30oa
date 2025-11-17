import { TrendingUp } from 'lucide-react'

export default function InsightCard() {
  return (
    <section className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Insight AI</p>
          <p className="text-sm text-gray-600 mt-1">
            Laba bersih Anda meningkat 8% dibanding bulan lalu. Pengeluaran terbesar masih dari gaji dan beban operasional.
          </p>
        </div>
      </div>
    </section>
  )
}

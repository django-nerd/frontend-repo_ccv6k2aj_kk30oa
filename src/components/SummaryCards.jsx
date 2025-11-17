const money = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)

export default function SummaryCards() {
  const data = {
    totalPenjualan: 2142098700,
    totalBiaya: 1507614912,
    labaBersih: 634483788,
    perubahan: 0.10,
  }

  const items = [
    { label: 'Total Penjualan Bersih', value: money(data.totalPenjualan), accent: 'from-emerald-500 to-teal-500', text: 'text-emerald-700' },
    { label: 'Total Biaya', value: money(data.totalBiaya), accent: 'from-orange-500 to-amber-500', text: 'text-orange-700' },
    { label: 'Laba Bersih', value: money(data.labaBersih), accent: 'from-green-500 to-emerald-500', text: 'text-green-700' },
  ]

  return (
    <section className="space-y-3">
      <div className="grid grid-cols-1 gap-3">
        {items.map((it) => (
          <div key={it.label} className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <p className="text-xs text-gray-500">{it.label}</p>
            <p className={`mt-1 text-xl font-semibold ${it.text}`}>{it.value}</p>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
        <p className="text-sm text-emerald-900 font-medium">Perubahan Bulanan</p>
        <p className="mt-1 text-emerald-700">
          +{Math.round(data.perubahan * 100)}% dibanding bulan sebelumnya
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Bisnis Anda mencatat keuntungan bersih sebesar <span className="font-semibold">{money(data.labaBersih)}</span> bulan ini. Arus keuangan terjaga dengan baik.
        </p>
      </div>
    </section>
  )
}

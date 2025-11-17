const money = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)

export default function FinalSummary() {
  const data = {
    labaKotor: 975968978,
    labaUsaha: 636593638,
    labaBersih: 634483788,
  }

  return (
    <section className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
      <p className="text-sm text-emerald-900 font-medium">Ringkasan Akhir</p>
      <div className="mt-3 space-y-2 text-emerald-800">
        <div className="flex items-center justify-between">
          <span>Laba Kotor</span>
          <span className="font-semibold">{money(data.labaKotor)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Laba Usaha</span>
          <span className="font-semibold">{money(data.labaUsaha)}</span>
        </div>
        <div className="flex items-center justify-between text-emerald-900">
          <span className="font-semibold">Laba Bersih (Setelah Pajak & Beban Luar Usaha)</span>
          <span className="font-bold">{money(data.labaBersih)}</span>
        </div>
      </div>
    </section>
  )
}

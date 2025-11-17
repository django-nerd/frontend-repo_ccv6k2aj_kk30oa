const money = (n) => typeof n === 'number' ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n) : n

function Row({ label, value, bold }) {
  return (
    <div className={`flex items-center justify-between py-2 ${bold ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
      <span>{label}</span>
      <span>{money(value)}</span>
    </div>
  )
}

function Section({ title, children, defaultOpen = false }) {
  return (
    <details className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm" open={defaultOpen}>
      <summary className="list-none cursor-pointer select-none">
        <div className="flex items-center justify-between">
          <p className="font-medium text-gray-800">{title}</p>
          <span className="text-sm text-gray-500">Tap untuk buka/tutup</span>
        </div>
      </summary>
      <div className="mt-3 divide-y divide-gray-100">
        {children}
      </div>
    </details>
  )
}

export default function ReportDetails() {
  return (
    <section className="space-y-3">
      <Section title="Pendapatan" defaultOpen>
        <Row label="Pendapatan Usaha" value={2142098700} />
        <Row label="Pendapatan Lainnya" value="Rp –" />
        <Row label="Pendapatan Bunga Bank" value="Rp –" />
        <Row label="Total Pendapatan" value={2142098700} bold />
      </Section>

      <Section title="Beban Pokok Penjualan">
        <Row label="Total Beban Pokok Penjualan" value={1166129722} />
        <Row label="Subtotal" value={1166129722} bold />
      </Section>

      <Section title="Biaya Administrasi & Umum">
        <Row label="Gaji Karyawan" value={171456815} />
        <Row label="Honor Non Karyawan" value={63500000} />
        <Row label="Listrik" value={12206298} />
        <Row label="Internet" value={8205482} />
        <Row label="Air, Transportasi, Iklan, dll" value={84006745} />
        <Row label="Subtotal" value={339375340} bold />
      </Section>

      <Section title="Biaya di Luar Usaha">
        <Row label="Administrasi Bank" value={2109850} />
        <Row label="Subtotal" value={2109850} bold />
      </Section>
    </section>
  )
}

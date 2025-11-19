function Section({ title, children, subtitle }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 tracking-tight">{title}</h3>
        {subtitle && <p className="mt-0.5 text-xs text-neutral-500">{subtitle}</p>}
      </div>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  )
}

function Row({ label, value, muted, note }) {
  return (
    <div className="flex items-center justify-between">
      <div className="min-w-0">
        <span className={`text-sm ${muted ? 'text-neutral-500' : 'text-neutral-700'}`}>{label}</span>
        {note && <span className="ml-2 text-xs text-neutral-500">{note}</span>}
      </div>
      <span className={`text-sm font-medium tabular-nums ${muted ? 'text-neutral-500' : 'text-neutral-900'}`}>{value}</span>
    </div>
  )
}

function Subtotal({ label, value, tone = 'neutral' }) {
  const tones = {
    neutral: 'bg-neutral-50 border-neutral-200 text-neutral-900',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    amber: 'bg-amber-50 border-amber-200 text-amber-900',
    sky: 'bg-sky-50 border-sky-200 text-sky-900',
  }
  return (
    <div className={`flex items-center justify-between rounded-lg border px-3 py-2 ${tones[tone]}`}>
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      <span className="text-sm font-semibold tabular-nums">{value}</span>
    </div>
  )
}

function Divider() {
  return <div className="h-px bg-neutral-200" />
}

function NeracaSections() {
  return (
    <div className="space-y-4">
      <Section title="Aset Lancar" subtitle="Kas, piutang, dan persediaan">
        <div>
          <p className="text-[11px] font-medium text-neutral-500 mb-2 uppercase tracking-wide">Kas & Setara Kas</p>
          <Row label="Bank BCA" value="Rp 1.023.616.567" />
          <Row label="Kas Kecil" value="Rp 444.596.412" />
          <Subtotal label="Subtotal" value="Rp 1.468.212.979" />
        </div>
        <Divider />
        <div>
          <p className="text-[11px] font-medium text-neutral-500 mb-2 uppercase tracking-wide">Piutang</p>
          <Row label="Piutang Usaha" value="Rp 14.898.000" />
          <Row label="Piutang Pemilik Usaha" value="Rp 197.679.684" />
          <Subtotal label="Subtotal" value="Rp 212.577.684" />
        </div>
        <Divider />
        <div>
          <p className="text-[11px] font-medium text-neutral-500 mb-2 uppercase tracking-wide">Persediaan</p>
          <Row label="Stok barang" value="Rp 2.920.000" />
        </div>
      </Section>

      <Section title="Aset Tetap" subtitle="Nilai buku = perolehan - akumulasi penyusutan">
        <div>
          <p className="text-[11px] font-medium text-neutral-500 mb-2 uppercase tracking-wide">Inventaris Kantor</p>
          <Row label="Nilai Perolehan" value="Rp 30.300.000" />
          <Row label="Akumulasi Penyusutan" value="(Rp 6.545.833)" muted note="per 31 Des 2025" />
          <Subtotal label="Nilai Buku" value="Rp 23.754.167" tone="neutral" />
        </div>
      </Section>

      <Subtotal label="TOTAL ASET" value="Rp 1.707.464.830" tone="emerald" />

      <Section title="Liabilitas (Kewajiban)" subtitle="Kewajiban jangka pendek">
        <div>
          <p className="text-[11px] font-medium text-neutral-500 mb-2 uppercase tracking-wide">Utang Jangka Pendek</p>
          <Row label="Utang Usaha" value="Rp 12.608.000" />
          <Row label="Utang Pemilik Usaha" value="Rp 286.915.600" />
          <Subtotal label="Subtotal Liabilitas" value="Rp 299.523.600" />
        </div>
      </Section>

      <Subtotal label="TOTAL LIABILITAS" value="Rp 299.523.600" tone="amber" />

      <Section title="Ekuitas" subtitle="Modal disetor dan laba">
        <Row label="Modal Disetor" value="-" muted />
        <Row label="Laba Ditahan" value="Rp 1.007.157.442" />
        <Row label="Dividen" value="(Rp 233.700.000)" muted />
        <Row label="Laba (Rugi) Berjalan" value="Rp 634.483.788" />
      </Section>

      <Subtotal label="TOTAL EKUITAS" value="Rp 1.407.941.230" tone="sky" />

      <div className="rounded-xl border border-neutral-200 bg-white p-4">
        <p className="text-sm text-neutral-700">Validasi Rumus</p>
        <div className="mt-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-neutral-600">Aset</span>
            <span className="font-medium text-neutral-900 tabular-nums">Rp 1.707.464.830</span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-neutral-600">Liabilitas + Ekuitas</span>
            <span className="font-medium text-neutral-900 tabular-nums">Rp 1.707.464.830</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Neraca Seimbang
          </div>
        </div>
      </div>
    </div>
  )
}

export default NeracaSections

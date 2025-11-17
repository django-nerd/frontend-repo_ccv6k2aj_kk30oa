function Section({ title, children }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  )
}

function Row({ label, value, muted }) {
  return (
    <div className="flex items-center justify-between">
      <span className={`text-sm ${muted ? 'text-neutral-500' : 'text-neutral-700'}`}>{label}</span>
      <span className={`text-sm font-medium ${muted ? 'text-neutral-500' : 'text-neutral-900'}`}>{value}</span>
    </div>
  )
}

function Subtotal({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-neutral-50 border border-neutral-200 px-3 py-2">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      <span className="text-sm font-semibold text-neutral-900">{value}</span>
    </div>
  )
}

function Divider() {
  return <div className="h-px bg-neutral-200" />
}

function NeracaSections() {
  return (
    <div className="space-y-4">
      <Section title="Aset Lancar">
        <div>
          <p className="text-xs font-medium text-neutral-500 mb-2">Kas & Setara Kas</p>
          <Row label="Bank BCA" value="Rp 1.023.616.567" />
          <Row label="Kas Kecil" value="Rp 444.596.412" />
          <Subtotal label="Subtotal" value="Rp 1.468.212.979" />
        </div>
        <Divider />
        <div>
          <p className="text-xs font-medium text-neutral-500 mb-2">Piutang</p>
          <Row label="Piutang Usaha" value="Rp 14.898.000" />
          <Row label="Piutang Pemilik Usaha" value="Rp 197.679.684" />
          <Subtotal label="Subtotal" value="Rp 212.577.684" />
        </div>
        <Divider />
        <div>
          <p className="text-xs font-medium text-neutral-500 mb-2">Persediaan</p>
          <Row label="Stok barang" value="Rp 2.920.000" />
        </div>
      </Section>

      <Section title="Aset Tetap">
        <div>
          <p className="text-xs font-medium text-neutral-500 mb-2">Inventaris Kantor</p>
          <Row label="Nilai Perolehan" value="Rp 30.300.000" />
          <Row label="Akumulasi Penyusutan" value="(Rp 6.545.833)" muted />
          <Subtotal label="Nilai Buku" value="Rp 23.754.167" />
        </div>
      </Section>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-emerald-900">TOTAL ASET</span>
          <span className="text-sm font-bold text-emerald-900">Rp 1.707.464.830</span>
        </div>
      </div>

      <Section title="Liabilitas (Kewajiban)">
        <div>
          <p className="text-xs font-medium text-neutral-500 mb-2">Utang Jangka Pendek</p>
          <Row label="Utang Usaha" value="Rp 12.608.000" />
          <Row label="Utang Pemilik Usaha" value="Rp 286.915.600" />
          <Subtotal label="Subtotal Liabilitas" value="Rp 299.523.600" />
        </div>
      </Section>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-amber-900">TOTAL LIABILITAS</span>
          <span className="text-sm font-bold text-amber-900">Rp 299.523.600</span>
        </div>
      </div>

      <Section title="Ekuitas">
        <Row label="Modal Disetor" value="-" muted />
        <Row label="Laba Ditahan" value="Rp 1.007.157.442" />
        <Row label="Dividen" value="(Rp 233.700.000)" muted />
        <Row label="Laba (Rugi) Berjalan" value="Rp 634.483.788" />
      </Section>

      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-sky-900">TOTAL EKUITAS</span>
          <span className="text-sm font-bold text-sky-900">Rp 1.407.941.230</span>
        </div>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-white p-4">
        <p className="text-sm text-neutral-700">Validasi Rumus</p>
        <div className="mt-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-neutral-600">Aset</span>
            <span className="font-medium text-neutral-900">Rp 1.707.464.830</span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-neutral-600">Liabilitas + Ekuitas</span>
            <span className="font-medium text-neutral-900">Rp 1.707.464.830</span>
          </div>
          <div className="mt-3 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-2 text-sm">Neraca Seimbang</div>
        </div>
      </div>
    </div>
  )
}

export default NeracaSections

function Stat({ label, value }) {
  return (
    <div className="flex-1 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="mt-1 text-lg font-semibold tracking-tight text-neutral-900">{value}</p>
    </div>
  )
}

function NeracaSummary() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <Stat label="Aset" value="Rp 1.707.464.830" />
      <Stat label="Liabilitas" value="Rp 299.523.600" />
      <Stat label="Ekuitas / Modal" value="Rp 1.407.941.230" />
    </section>
  )
}

export default NeracaSummary

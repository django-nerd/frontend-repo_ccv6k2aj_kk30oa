function Stat({ label, value, trend }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="text-xs text-neutral-500">{label}</p>
      <div className="mt-1.5 flex items-baseline justify-between">
        <p className="text-xl font-semibold tracking-tight text-neutral-900">{value}</p>
        {trend && (
          <span className={`text-xs px-1.5 py-0.5 rounded-md ${trend > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
            {trend > 0 ? `+${trend}%` : `${trend}%`}
          </span>
        )}
      </div>
    </div>
  )
}

function NeracaSummary() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <Stat label="Aset" value="Rp 1.707.464.830" trend={8} />
      <Stat label="Liabilitas" value="Rp 299.523.600" trend={-2} />
      <Stat label="Ekuitas / Modal" value="Rp 1.407.941.230" trend={6} />
    </section>
  )
}

export default NeracaSummary

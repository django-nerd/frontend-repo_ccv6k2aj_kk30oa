import { Link, useLocation } from 'react-router-dom'

function Tab({ to, label }) {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Link
      to={to}
      className={`flex-1 text-center px-3 py-2 text-sm rounded-lg border transition ${
        active
          ? 'bg-neutral-900 text-white border-neutral-900'
          : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
      }`}
    >
      {label}
    </Link>
  )
}

function NavTabs() {
  return (
    <nav className="sticky top-0 z-10 -mt-2 mb-2 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-md mx-auto p-4 pt-3">
        <div className="grid grid-cols-2 gap-2">
          <Tab to="/" label="Laba Rugi" />
          <Tab to="/neraca" label="Neraca" />
        </div>
      </div>
    </nav>
  )
}

export default NavTabs

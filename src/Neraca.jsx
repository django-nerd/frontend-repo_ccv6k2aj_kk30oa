import NeracaHeader from './components/NeracaHeader'
import NeracaSummary from './components/NeracaSummary'
import NeracaSections from './components/NeracaSections'

function Neraca() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-md mx-auto p-4 space-y-4">
        <NeracaHeader />
        <NeracaSummary />
        <NeracaSections />
      </div>
    </div>
  )
}

export default Neraca

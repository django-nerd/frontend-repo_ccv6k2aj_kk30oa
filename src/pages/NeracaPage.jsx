import NeracaHeader from '../components/NeracaHeader'
import NeracaSummary from '../components/NeracaSummary'
import NeracaSections from '../components/NeracaSections'
import NeracaSeimbang from '../components/NeracaSeimbang'
import NavTabs from '../components/NavTabs'

function NeracaPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <NavTabs />
      <div className="max-w-md mx-auto p-4 space-y-4">
        <NeracaHeader />
        <NeracaSummary />
        <NeracaSections />
        <NeracaSeimbang />
      </div>
    </div>
  )
}

export default NeracaPage

import HeroHeader from './components/HeroHeader'
import SummaryCards from './components/SummaryCards'
import PerformanceChart from './components/PerformanceChart'
import ReportDetails from './components/ReportDetails'
import FinalSummary from './components/FinalSummary'
import InsightCard from './components/InsightCard'
import NavTabs from './components/NavTabs'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <NavTabs />
      <div className="max-w-md mx-auto p-4 space-y-4">
        <HeroHeader />
        <SummaryCards />
        <PerformanceChart />
        <ReportDetails />
        <FinalSummary />
        <InsightCard />
      </div>
    </div>
  )
}

export default App

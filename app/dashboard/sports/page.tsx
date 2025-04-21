import { SportsHeader } from "@/components/sports/sports-header"
import { SportsTable } from "@/components/sports/sports-table"
import { SportsFilter } from "@/components/sports/sports-filter"
import { SportsStats } from "@/components/sports/sports-stats"

export default function SportsPage() {
  return (
    <div className="space-y-6">
      <SportsHeader />
      <SportsStats />
      <SportsFilter />
      <SportsTable />
    </div>
  )
}

import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardCards } from "@/components/dashboard/dashboard-cards"
import { RecentSessions } from "@/components/dashboard/recent-sessions"
import { CourtStatus } from "@/components/dashboard/court-status"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardOverview />
        <CourtStatus />
      </div>
      <RecentSessions />
    </div>
  )
}

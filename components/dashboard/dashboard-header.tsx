import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Admin! Here's what's happening today.</p>
      </div>
      <Button className="bg-emerald-600 hover:bg-emerald-700">
        <CalendarDays className="mr-2 h-4 w-4" />
        Generate Report
      </Button>
    </div>
  )
}

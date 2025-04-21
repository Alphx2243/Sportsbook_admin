import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function ScheduleHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Schedule</h1>
        <p className="text-gray-500">Manage court bookings and time slots.</p>
      </div>
      <Button className="bg-emerald-600 hover:bg-emerald-700">
        <Plus className="mr-2 h-4 w-4" />
        Add Booking
      </Button>
    </div>
  )
}

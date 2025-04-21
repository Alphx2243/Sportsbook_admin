import { ScheduleHeader } from "@/components/schedule/schedule-header"
import { ScheduleCalendar } from "@/components/schedule/schedule-calendar"
import { ScheduleFilter } from "@/components/schedule/schedule-filter"

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <ScheduleHeader />
      <ScheduleFilter />
      <ScheduleCalendar />
    </div>
  )
}

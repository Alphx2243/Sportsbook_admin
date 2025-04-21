import { SessionsTable } from "@/components/sessions/sessions-table"
import { SessionsHeader } from "@/components/sessions/sessions-header"
import { SessionsFilter } from "@/components/sessions/sessions-filter"

export default function SessionsPage() {
  return (
    <div className="space-y-6">
      <SessionsHeader />
      <SessionsFilter />
      <SessionsTable />
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function SportsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Sports & Courts</h1>
        <p className="text-gray-500">Manage all sports facilities and courts.</p>
      </div>
      <div className="flex gap-2">
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Sport
        </Button>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Court
        </Button>
      </div>
    </div>
  )
}

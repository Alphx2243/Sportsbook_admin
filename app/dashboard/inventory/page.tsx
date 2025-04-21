import { InventoryHeader } from "@/components/inventory/inventory-header"
import { InventoryTable } from "@/components/inventory/inventory-table"
import { InventoryStats } from "@/components/inventory/inventory-stats"
import { InventoryFilter } from "@/components/inventory/inventory-filter"

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <InventoryHeader />
      <InventoryStats />
      <InventoryFilter />
      <InventoryTable />
    </div>
  )
}

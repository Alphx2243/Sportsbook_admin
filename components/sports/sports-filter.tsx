import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SportsFilter() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <Input placeholder="Search sports or courts..." />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sport Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sports</SelectItem>
            <SelectItem value="tennis">Tennis</SelectItem>
            <SelectItem value="basketball">Basketball</SelectItem>
            <SelectItem value="badminton">Badminton</SelectItem>
            <SelectItem value="volleyball">Volleyball</SelectItem>
            <SelectItem value="fitness">Fitness</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="occupied">Occupied</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-emerald-600 hover:bg-emerald-700">Apply Filters</Button>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"

export function ScheduleFilter() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sport" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sports</SelectItem>
            <SelectItem value="tennis">Tennis</SelectItem>
            <SelectItem value="basketball">Basketball</SelectItem>
            <SelectItem value="badminton">Badminton</SelectItem>
            <SelectItem value="volleyball">Volleyball</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Court" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courts</SelectItem>
            <SelectItem value="tennis-1">Tennis Court 1</SelectItem>
            <SelectItem value="tennis-2">Tennis Court 2</SelectItem>
            <SelectItem value="basketball-1">Basketball Court 1</SelectItem>
            <SelectItem value="badminton-1">Badminton Court 1</SelectItem>
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start text-left font-normal">
              <Calendar className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
        <Button className="bg-emerald-600 hover:bg-emerald-700">Apply Filters</Button>
      </div>
    </div>
  )
}

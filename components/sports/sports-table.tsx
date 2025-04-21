"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const sports = [
  {
    id: 1,
    name: "Tennis",
    totalCourts: 4,
    availableCourts: 2,
    occupiedCourts: 1,
    maintenanceCourts: 1,
    peakHours: "4:00 PM - 8:00 PM",
    pricePerHour: "$25",
  },
  {
    id: 2,
    name: "Basketball",
    totalCourts: 2,
    availableCourts: 1,
    occupiedCourts: 1,
    maintenanceCourts: 0,
    peakHours: "5:00 PM - 9:00 PM",
    pricePerHour: "$30",
  },
  {
    id: 3,
    name: "Badminton",
    totalCourts: 3,
    availableCourts: 2,
    occupiedCourts: 1,
    maintenanceCourts: 0,
    peakHours: "6:00 PM - 10:00 PM",
    pricePerHour: "$20",
  },
  {
    id: 4,
    name: "Volleyball",
    totalCourts: 2,
    availableCourts: 2,
    occupiedCourts: 0,
    maintenanceCourts: 0,
    peakHours: "5:00 PM - 8:00 PM",
    pricePerHour: "$22",
  },
  {
    id: 5,
    name: "Fitness",
    totalCourts: 1,
    availableCourts: 0,
    occupiedCourts: 0,
    maintenanceCourts: 1,
    peakHours: "6:00 AM - 9:00 AM",
    pricePerHour: "$15",
  },
]

const courts = [
  {
    id: "C-001",
    name: "Tennis Court 1",
    sport: "Tennis",
    status: "available",
    lastMaintenance: "2023-03-15",
    nextMaintenance: "2023-06-15",
    features: "Outdoor, Hard Surface",
  },
  {
    id: "C-002",
    name: "Tennis Court 2",
    sport: "Tennis",
    status: "available",
    lastMaintenance: "2023-03-15",
    nextMaintenance: "2023-06-15",
    features: "Outdoor, Hard Surface",
  },
  {
    id: "C-003",
    name: "Tennis Court 3",
    sport: "Tennis",
    status: "occupied",
    lastMaintenance: "2023-03-20",
    nextMaintenance: "2023-06-20",
    features: "Indoor, Hard Surface",
  },
  {
    id: "C-004",
    name: "Tennis Court 4",
    sport: "Tennis",
    status: "maintenance",
    lastMaintenance: "2023-04-10",
    nextMaintenance: "2023-07-10",
    features: "Indoor, Hard Surface",
  },
  {
    id: "C-005",
    name: "Basketball Court 1",
    sport: "Basketball",
    status: "available",
    lastMaintenance: "2023-02-25",
    nextMaintenance: "2023-05-25",
    features: "Indoor, Wooden Floor",
  },
  {
    id: "C-006",
    name: "Basketball Court 2",
    sport: "Basketball",
    status: "occupied",
    lastMaintenance: "2023-02-25",
    nextMaintenance: "2023-05-25",
    features: "Indoor, Wooden Floor",
  },
]

export function SportsTable() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(courts.length / itemsPerPage)

  const paginatedCourts = courts.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <div className="space-y-4">
      <Tabs defaultValue="sports">
        <TabsList>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="courts">Courts</TabsTrigger>
        </TabsList>
        <TabsContent value="sports">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Total Courts</TableHead>
                  <TableHead>Available</TableHead>
                  <TableHead>Occupied</TableHead>
                  <TableHead>Maintenance</TableHead>
                  <TableHead>Peak Hours</TableHead>
                  <TableHead>Price/Hour</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sports.map((sport) => (
                  <TableRow key={sport.id}>
                    <TableCell className="font-medium">{sport.name}</TableCell>
                    <TableCell>{sport.totalCourts}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{sport.availableCourts}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{sport.occupiedCourts}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                        {sport.maintenanceCourts}
                      </Badge>
                    </TableCell>
                    <TableCell>{sport.peakHours}</TableCell>
                    <TableCell>{sport.pricePerHour}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit sport</DropdownMenuItem>
                          <DropdownMenuItem>View courts</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Update pricing</DropdownMenuItem>
                          <DropdownMenuItem>Schedule maintenance</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="courts">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Sport</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Maintenance</TableHead>
                  <TableHead>Next Maintenance</TableHead>
                  <TableHead>Features</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedCourts.map((court) => (
                  <TableRow key={court.id}>
                    <TableCell className="font-medium">{court.id}</TableCell>
                    <TableCell>{court.name}</TableCell>
                    <TableCell>{court.sport}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          court.status === "available"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : court.status === "occupied"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                        }
                      >
                        {court.status.charAt(0).toUpperCase() + court.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{court.lastMaintenance}</TableCell>
                    <TableCell>{court.nextMaintenance}</TableCell>
                    <TableCell>{court.features}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit court</DropdownMenuItem>
                          <DropdownMenuItem>View bookings</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Mark as maintenance</DropdownMenuItem>
                          <DropdownMenuItem>Mark as available</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm" onClick={() => setPage(page > 1 ? page - 1 : 1)} disabled={page === 1}>
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
              disabled={page === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

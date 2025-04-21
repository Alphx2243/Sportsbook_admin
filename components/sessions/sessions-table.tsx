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

const sessions = [
  {
    id: "S-1234",
    user: "John Smith",
    court: "Tennis Court 1",
    date: "2023-04-15",
    time: "1:00 PM - 3:00 PM",
    status: "active",
    equipment: "2 Rackets, 4 Balls",
  },
  {
    id: "S-1235",
    user: "Sarah Johnson",
    court: "Badminton Court 1",
    date: "2023-04-15",
    time: "2:30 PM - 4:30 PM",
    status: "active",
    equipment: "2 Rackets, 3 Shuttlecocks",
  },
  {
    id: "S-1236",
    user: "Michael Brown",
    court: "Basketball Court",
    date: "2023-04-15",
    time: "9:00 AM - 11:00 AM",
    status: "completed",
    equipment: "1 Basketball",
  },
  {
    id: "S-1237",
    user: "Emily Davis",
    court: "Tennis Court 2",
    date: "2023-04-14",
    time: "4:00 PM - 6:00 PM",
    status: "completed",
    equipment: "2 Rackets, 6 Balls",
  },
  {
    id: "S-1238",
    user: "David Wilson",
    court: "Badminton Court 2",
    date: "2023-04-14",
    time: "7:00 PM - 9:00 PM",
    status: "completed",
    equipment: "4 Rackets, 6 Shuttlecocks",
  },
  {
    id: "S-1239",
    user: "Jessica Taylor",
    court: "Tennis Court 1",
    date: "2023-04-13",
    time: "10:00 AM - 12:00 PM",
    status: "cancelled",
    equipment: "2 Rackets, 4 Balls",
  },
  {
    id: "S-1240",
    user: "Andrew Miller",
    court: "Basketball Court",
    date: "2023-04-13",
    time: "3:00 PM - 5:00 PM",
    status: "completed",
    equipment: "1 Basketball",
  },
  {
    id: "S-1241",
    user: "Olivia Wilson",
    court: "Badminton Court 1",
    date: "2023-04-12",
    time: "6:00 PM - 8:00 PM",
    status: "completed",
    equipment: "2 Rackets, 3 Shuttlecocks",
  },
]

export function SessionsTable() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(sessions.length / itemsPerPage)

  const paginatedSessions = sessions.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <div className="space-y-4">
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Sessions</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Session ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Court</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Equipment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedSessions.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell className="font-medium">{session.id}</TableCell>
                    <TableCell>{session.user}</TableCell>
                    <TableCell>{session.court}</TableCell>
                    <TableCell>{session.date}</TableCell>
                    <TableCell>{session.time}</TableCell>
                    <TableCell>{session.equipment}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          session.status === "active"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : session.status === "completed"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              : "bg-red-100 text-red-800 hover:bg-red-100"
                        }
                      >
                        {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                      </Badge>
                    </TableCell>
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
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Edit session</DropdownMenuItem>
                          <DropdownMenuItem>Cancel session</DropdownMenuItem>
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
        <TabsContent value="active">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Session ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Court</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Equipment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessions
                  .filter((session) => session.status === "active")
                  .map((session) => (
                    <TableRow key={session.id}>
                      <TableCell className="font-medium">{session.id}</TableCell>
                      <TableCell>{session.user}</TableCell>
                      <TableCell>{session.court}</TableCell>
                      <TableCell>{session.date}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.equipment}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                      </TableCell>
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
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Edit session</DropdownMenuItem>
                            <DropdownMenuItem>Cancel session</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="completed">
          {/* Similar structure as "all" tab but filtered for completed sessions */}
        </TabsContent>
        <TabsContent value="cancelled">
          {/* Similar structure as "all" tab but filtered for cancelled sessions */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

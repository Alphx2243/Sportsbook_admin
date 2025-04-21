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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const users = [
  {
    id: "U-001",
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Member",
    status: "active",
    joinDate: "2023-01-15",
    lastActive: "2023-04-15",
    bookings: 12,
  },
  {
    id: "U-002",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Member",
    status: "active",
    joinDate: "2023-02-20",
    lastActive: "2023-04-14",
    bookings: 8,
  },
  {
    id: "U-003",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "Admin",
    status: "active",
    joinDate: "2022-11-10",
    lastActive: "2023-04-15",
    bookings: 5,
  },
  {
    id: "U-004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Member",
    status: "inactive",
    joinDate: "2023-03-05",
    lastActive: "2023-03-25",
    bookings: 2,
  },
  {
    id: "U-005",
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "Member",
    status: "pending",
    joinDate: "2023-04-10",
    lastActive: "2023-04-10",
    bookings: 0,
  },
  {
    id: "U-006",
    name: "Jessica Taylor",
    email: "jessica.taylor@example.com",
    role: "Admin",
    status: "active",
    joinDate: "2022-10-15",
    lastActive: "2023-04-15",
    bookings: 3,
  },
  {
    id: "U-007",
    name: "Andrew Miller",
    email: "andrew.miller@example.com",
    role: "Member",
    status: "active",
    joinDate: "2023-01-20",
    lastActive: "2023-04-12",
    bookings: 6,
  },
  {
    id: "U-008",
    name: "Olivia Wilson",
    email: "olivia.wilson@example.com",
    role: "Member",
    status: "active",
    joinDate: "2023-02-05",
    lastActive: "2023-04-13",
    bookings: 4,
  },
]

export function UsersTable() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(users.length / itemsPerPage)

  const paginatedUsers = users.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Bookings</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      user.role === "Admin"
                        ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                    }
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      user.status === "active"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : user.status === "inactive"
                          ? "bg-red-100 text-red-800 hover:bg-red-100"
                          : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                    }
                  >
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>{user.lastActive}</TableCell>
                <TableCell>{user.bookings}</TableCell>
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
                      <DropdownMenuItem>View profile</DropdownMenuItem>
                      <DropdownMenuItem>View bookings</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit user</DropdownMenuItem>
                      <DropdownMenuItem>Change role</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Deactivate user</DropdownMenuItem>
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
    </div>
  )
}

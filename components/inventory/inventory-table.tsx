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

const inventory = [
  {
    id: "E-001",
    name: "Tennis Racket",
    category: "Tennis",
    stock: 24,
    status: "available",
    lastMaintenance: "2023-03-15",
    location: "Storage Room A",
  },
  {
    id: "E-002",
    name: "Tennis Balls",
    category: "Tennis",
    stock: 120,
    status: "available",
    lastMaintenance: "N/A",
    location: "Storage Room A",
  },
  {
    id: "E-003",
    name: "Basketball",
    category: "Basketball",
    stock: 15,
    status: "available",
    lastMaintenance: "2023-02-20",
    location: "Storage Room B",
  },
  {
    id: "E-004",
    name: "Badminton Racket",
    category: "Badminton",
    stock: 18,
    status: "available",
    lastMaintenance: "2023-03-10",
    location: "Storage Room A",
  },
  {
    id: "E-005",
    name: "Shuttlecocks",
    category: "Badminton",
    stock: 50,
    status: "low",
    lastMaintenance: "N/A",
    location: "Storage Room A",
  },
  {
    id: "E-006",
    name: "Basketball Hoop Net",
    category: "Basketball",
    stock: 4,
    status: "maintenance",
    lastMaintenance: "2023-04-05",
    location: "Maintenance Room",
  },
  {
    id: "E-007",
    name: "Tennis Net",
    category: "Tennis",
    stock: 2,
    status: "maintenance",
    lastMaintenance: "2023-04-10",
    location: "Maintenance Room",
  },
  {
    id: "E-008",
    name: "Yoga Mats",
    category: "Fitness",
    stock: 0,
    status: "out",
    lastMaintenance: "N/A",
    location: "On Order",
  },
]

export function InventoryTable() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(inventory.length / itemsPerPage)

  const paginatedInventory = inventory.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Maintenance</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedInventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      item.status === "available"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : item.status === "low"
                          ? "bg-orange-100 text-orange-800 hover:bg-orange-100"
                          : item.status === "maintenance"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {item.status === "available"
                      ? "Available"
                      : item.status === "low"
                        ? "Low Stock"
                        : item.status === "maintenance"
                          ? "Maintenance"
                          : "Out of Stock"}
                  </Badge>
                </TableCell>
                <TableCell>{item.lastMaintenance}</TableCell>
                <TableCell>{item.location}</TableCell>
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
                      <DropdownMenuItem>Edit item</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Update stock</DropdownMenuItem>
                      <DropdownMenuItem>Schedule maintenance</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Delete item</DropdownMenuItem>
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

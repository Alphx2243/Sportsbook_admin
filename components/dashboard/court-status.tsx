"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const courtStatus = [
  {
    id: 1,
    name: "Tennis Court 1",
    status: "occupied",
    time: "Until 3:00 PM",
    user: "John Smith",
  },
  {
    id: 2,
    name: "Tennis Court 2",
    status: "available",
    time: "Available Now",
    user: null,
  },
  {
    id: 3,
    name: "Basketball Court",
    status: "maintenance",
    time: "Until 5:00 PM",
    user: null,
  },
  {
    id: 4,
    name: "Badminton Court 1",
    status: "occupied",
    time: "Until 4:30 PM",
    user: "Sarah Johnson",
  },
  {
    id: 5,
    name: "Badminton Court 2",
    status: "available",
    time: "Available Now",
    user: null,
  },
]

export function CourtStatus() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Court Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="available">Available</TabsTrigger>
            <TabsTrigger value="occupied">Occupied</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="pt-4 space-y-4">
            {courtStatus.map((court) => (
              <div key={court.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{court.name}</div>
                  <div className="text-sm text-gray-500">{court.user ? `Booked by ${court.user}` : court.time}</div>
                </div>
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
              </div>
            ))}
          </TabsContent>
          <TabsContent value="available" className="pt-4 space-y-4">
            {courtStatus
              .filter((court) => court.status === "available")
              .map((court) => (
                <div key={court.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{court.name}</div>
                    <div className="text-sm text-gray-500">{court.time}</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Available</Badge>
                </div>
              ))}
          </TabsContent>
          <TabsContent value="occupied" className="pt-4 space-y-4">
            {courtStatus
              .filter((court) => court.status === "occupied")
              .map((court) => (
                <div key={court.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{court.name}</div>
                    <div className="text-sm text-gray-500">Booked by {court.user}</div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Occupied</Badge>
                </div>
              ))}
          </TabsContent>
          <TabsContent value="maintenance" className="pt-4 space-y-4">
            {courtStatus
              .filter((court) => court.status === "maintenance")
              .map((court) => (
                <div key={court.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{court.name}</div>
                    <div className="text-sm text-gray-500">{court.time}</div>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Maintenance</Badge>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for bookings
const bookings = [
  {
    id: "B-001",
    court: "Tennis Court 1",
    user: "John Smith",
    time: "09:00 - 11:00",
    status: "confirmed",
  },
  {
    id: "B-002",
    court: "Basketball Court 1",
    user: "Michael Brown",
    time: "10:00 - 12:00",
    status: "confirmed",
  },
  {
    id: "B-003",
    court: "Badminton Court 1",
    user: "Sarah Johnson",
    time: "13:00 - 15:00",
    status: "confirmed",
  },
  {
    id: "B-004",
    court: "Tennis Court 2",
    user: "Emily Davis",
    time: "14:00 - 16:00",
    status: "confirmed",
  },
  {
    id: "B-005",
    court: "Tennis Court 1",
    user: "David Wilson",
    time: "16:00 - 18:00",
    status: "pending",
  },
]

// Generate time slots from 6 AM to 10 PM
const timeSlots = Array.from({ length: 17 }, (_, i) => {
  const hour = i + 6
  return `${hour % 12 || 12}:00 ${hour < 12 ? "AM" : "PM"}`
})

// Generate courts
const courts = [
  "Tennis Court 1",
  "Tennis Court 2",
  "Tennis Court 3",
  "Tennis Court 4",
  "Basketball Court 1",
  "Basketball Court 2",
  "Badminton Court 1",
  "Badminton Court 2",
  "Badminton Court 3",
]

export function ScheduleCalendar() {
  const [selectedBooking, setSelectedBooking] = useState<any>(null)

  // Function to get booking for a specific court and time
  const getBooking = (court: string, time: string) => {
    const startTime = Number.parseInt(time.split(":")[0])
    return bookings.find((booking) => {
      const bookingStartTime = Number.parseInt(booking.time.split(" - ")[0].split(":")[0])
      return booking.court === court && Math.abs(startTime - bookingStartTime) < 2
    })
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="day">
        <TabsList>
          <TabsTrigger value="day">Day View</TabsTrigger>
          <TabsTrigger value="week">Week View</TabsTrigger>
          <TabsTrigger value="month">Month View</TabsTrigger>
        </TabsList>
        <TabsContent value="day" className="pt-4">
          <Card>
            <CardContent className="p-0">
              <div className="grid grid-cols-[100px_1fr] overflow-x-auto">
                {/* Time column */}
                <div className="border-r">
                  <div className="h-12 border-b bg-gray-50 flex items-center justify-center font-medium">Time</div>
                  {timeSlots.map((time, i) => (
                    <div key={i} className="h-16 border-b flex items-center justify-center text-sm text-gray-500">
                      {time}
                    </div>
                  ))}
                </div>

                {/* Courts columns */}
                <div className="grid grid-cols-9 divide-x">
                  {courts.map((court, i) => (
                    <div key={i} className="min-w-[150px]">
                      <div className="h-12 border-b bg-gray-50 flex items-center justify-center font-medium">
                        {court}
                      </div>
                      {timeSlots.map((time, j) => {
                        const booking = getBooking(court, time)
                        return (
                          <div key={j} className="h-16 border-b relative group">
                            {booking ? (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <div
                                    className={`absolute inset-1 rounded-md flex flex-col justify-center items-center p-1 cursor-pointer text-white text-xs ${
                                      booking.status === "confirmed" ? "bg-emerald-500" : "bg-orange-400"
                                    }`}
                                    onClick={() => setSelectedBooking(booking)}
                                  >
                                    <div className="font-medium truncate w-full text-center">{booking.user}</div>
                                    <div>{booking.time}</div>
                                  </div>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Booking Details</DialogTitle>
                                    <DialogDescription>View and manage booking information.</DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-2 gap-2">
                                      <div className="font-medium">Booking ID:</div>
                                      <div>{booking.id}</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                      <div className="font-medium">User:</div>
                                      <div>{booking.user}</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                      <div className="font-medium">Court:</div>
                                      <div>{booking.court}</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                      <div className="font-medium">Time:</div>
                                      <div>{booking.time}</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                      <div className="font-medium">Status:</div>
                                      <div>
                                        <Badge
                                          className={
                                            booking.status === "confirmed"
                                              ? "bg-green-100 text-green-800"
                                              : "bg-orange-100 text-orange-800"
                                          }
                                        >
                                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button variant="outline">Cancel Booking</Button>
                                    <Button className="bg-emerald-600 hover:bg-emerald-700">Edit Booking</Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            ) : (
                              <Button
                                variant="ghost"
                                className="absolute inset-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                Book
                              </Button>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="week" className="pt-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center text-lg font-medium mb-4">Week View Coming Soon</div>
              <p className="text-center text-gray-500">
                The week view is currently under development. Please use the day view for now.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="month" className="pt-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center text-lg font-medium mb-4">Month View Coming Soon</div>
              <p className="text-center text-gray-500">
                The month view is currently under development. Please use the day view for now.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

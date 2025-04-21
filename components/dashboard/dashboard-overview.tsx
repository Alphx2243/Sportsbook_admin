"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardOverview() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Booking Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="daily" className="pt-4">
            <div className="h-[250px] flex items-end gap-2">
              {Array.from({ length: 24 }).map((_, i) => {
                const height = Math.floor(Math.random() * 100) + 5
                return (
                  <div key={i} className="bg-emerald-100 rounded-t w-full" style={{ height: `${height}%` }}>
                    <div className="bg-emerald-500 rounded-t w-full h-full" style={{ opacity: height / 100 }} />
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>12 AM</span>
              <span>6 AM</span>
              <span>12 PM</span>
              <span>6 PM</span>
              <span>12 AM</span>
            </div>
          </TabsContent>
          <TabsContent value="weekly" className="pt-4">
            <div className="h-[250px] flex items-end gap-6">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                const height = Math.floor(Math.random() * 100) + 5
                return (
                  <div key={i} className="flex flex-col items-center flex-1 gap-2">
                    <div className="w-full flex-1 flex items-end">
                      <div className="bg-violet-500 rounded-t w-full" style={{ height: `${height}%` }} />
                    </div>
                    <span className="text-xs text-gray-500">{day}</span>
                  </div>
                )
              })}
            </div>
          </TabsContent>
          <TabsContent value="monthly" className="pt-4">
            <div className="h-[250px] flex items-end gap-2">
              {Array.from({ length: 12 }).map((_, i) => {
                const height = Math.floor(Math.random() * 100) + 5
                return (
                  <div key={i} className="flex flex-col items-center flex-1 gap-2">
                    <div className="w-full flex-1 flex items-end">
                      <div className="bg-blue-500 rounded-t w-full" style={{ height: `${height}%` }} />
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(0, i).toLocaleString("default", { month: "short" })}
                    </span>
                  </div>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

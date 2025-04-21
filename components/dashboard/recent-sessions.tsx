import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentSessions = [
  {
    id: "S-1234",
    user: "John Smith",
    court: "Tennis Court 1",
    date: "Today",
    time: "1:00 PM - 3:00 PM",
    status: "active",
  },
  {
    id: "S-1235",
    user: "Sarah Johnson",
    court: "Badminton Court 1",
    date: "Today",
    time: "2:30 PM - 4:30 PM",
    status: "active",
  },
  {
    id: "S-1236",
    user: "Michael Brown",
    court: "Basketball Court",
    date: "Today",
    time: "9:00 AM - 11:00 AM",
    status: "completed",
  },
  {
    id: "S-1237",
    user: "Emily Davis",
    court: "Tennis Court 2",
    date: "Yesterday",
    time: "4:00 PM - 6:00 PM",
    status: "completed",
  },
  {
    id: "S-1238",
    user: "David Wilson",
    court: "Badminton Court 2",
    date: "Yesterday",
    time: "7:00 PM - 9:00 PM",
    status: "completed",
  },
]

export function RecentSessions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Session ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Court</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentSessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell className="font-medium">{session.id}</TableCell>
                <TableCell>{session.user}</TableCell>
                <TableCell>{session.court}</TableCell>
                <TableCell>{session.date}</TableCell>
                <TableCell>{session.time}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      session.status === "active"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                    }
                  >
                    {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

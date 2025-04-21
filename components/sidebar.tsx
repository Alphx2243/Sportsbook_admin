"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Calendar, Users, Dumbbell, ClipboardList, Settings, LogOut, BarChart3 } from "lucide-react"

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Sessions",
    href: "/dashboard/sessions",
    icon: Calendar,
  },
  {
    name: "Inventory",
    href: "/dashboard/inventory",
    icon: ClipboardList,
  },
  {
    name: "Sports & Courts",
    href: "/dashboard/sports",
    icon: Dumbbell,
  },
  {
    name: "Schedule",
    href: "/dashboard/schedule",
    icon: BarChart3,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-emerald-600">Sports Admin</h1>
      </div>
      <div className="flex-1 px-4 space-y-1">
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center px-4 py-3 text-sm rounded-lg transition-colors",
              pathname === link.href ? "bg-emerald-50 text-emerald-600 font-medium" : "text-gray-700 hover:bg-gray-100",
            )}
          >
            <link.icon className="w-5 h-5 mr-3" />
            {link.name}
          </Link>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center w-full px-4 py-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  )
}

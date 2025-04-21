"use client"

import { useState } from "react"
import { Bell, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar } from "@/components/sidebar"

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
      <div className="flex items-center md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {showMobileMenu && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex justify-between p-4 border-b">
            <h1 className="text-xl font-bold text-emerald-600">Sports Admin</h1>
            <Button variant="ghost" size="icon" onClick={() => setShowMobileMenu(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="p-4">
            <Sidebar />
          </div>
        </div>
      )}

      <div className="hidden md:flex md:flex-1 md:items-center md:space-x-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input type="search" placeholder="Search..." className="w-full pl-8 bg-gray-50" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">New booking request</p>
                <p className="text-xs text-gray-500">Tennis Court 2 - 3:00 PM</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Equipment maintenance due</p>
                <p className="text-xs text-gray-500">Basketball hoops - Court 1</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Low inventory alert</p>
                <p className="text-xs text-gray-500">Tennis balls - 5 left</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 rounded-full" size="icon">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

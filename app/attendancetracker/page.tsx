// @ts-nocheck
"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ApiviCLIVF5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Component() {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="bg-gray-950 px-6 py-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Attendance Tracker</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-50">
              <BellIcon className="h-6 w-6" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar className="border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <div className="bg-gray-100 dark:bg-gray-950 p-6 w-64 border-r border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold mb-4">Attendance</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="border w-8 h-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Present</div>
                </div>
              </div>
              <Badge variant="success">Present</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="border w-8 h-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jane Appleseed</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Absent</div>
                </div>
              </div>
              <Badge variant="danger">Absent</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="border w-8 h-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>TS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Tom Smith</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Late</div>
                </div>
              </div>
              <Badge variant="warning">Late</Badge>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6">
          <h2 className="text-lg font-semibold mb-4">Mark Attendance</h2>
          <form className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <Label htmlFor="status">Attendance Status</Label>
              <Select id="status">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="absent">Absent</SelectItem>
                  <SelectItem value="late">Late</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">Select Location from Map</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
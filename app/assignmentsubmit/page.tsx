// @ts-nocheck

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JCCW8Jx2rKh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">Assignment Dashboard</div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="text-white hover:bg-gray-800">
            Logout
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="bg-gray-800 text-white p-6 flex flex-col gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-gray-300"
            prefetch={false}>
            <HomeIcon className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-gray-300"
            prefetch={false}>
            <UploadIcon className="w-5 h-5" />
            Assignments
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-gray-300"
            prefetch={false}>
            <MapPinIcon className="w-5 h-5" />
            Locations
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-gray-300"
            prefetch={false}>
            <SettingsIcon className="w-5 h-5" />
            Settings
          </Link>
        </nav>
        <main className="flex-1 p-8">
          <div className="absolute top-4 right-4 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Upload Assignment</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="flex items-center justify-between">
                  <div className="font-bold">
                    Time left before mark deduction
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    <ClockIcon className="w-4 h-4 mr-1 inline" />
                    <span>12:34 remaining</span>
                  </div>
                </Label>
                <Input id="title" placeholder="Enter assignment title" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter assignment description"
                  rows={3}
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="file">File</Label>
                <div className="flex items-center gap-4">
                  <Input type="file" id="file" />
                  <Button>Upload</Button>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Assignments Map</h2>
            <div className="h-[500px]">
              <div />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function ClockIcon(props) {
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
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function HomeIcon(props) {
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
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function MapPinIcon(props) {
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
      strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function SettingsIcon(props) {
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
      strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function UploadIcon(props) {
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
      strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

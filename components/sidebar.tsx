"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"

const menuItems = [
  { name: "Dashboard", path: "/" },
  { name: "Class Summary", path: "/class-summary" },
  { name: "Classes", path: "/classes" },
  { name: "Batches", path: "/batches" },
  { name: "Students", path: "/students" },
  { name: "Instructors", path: "/instructors" },
  { name: "Payments", path: "/payments" },
  { name: "Attendance", path: "/attendance" },
  { name: "Reports", path: "/reports" },
  { name: "Settings", path: "/settings" },
]

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <h1 className='text-2xl font-semibold text-center'>Sidebar</h1>
        <nav>
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={`block py-2.5 px-4 rounded transition duration-200 ${
                  pathname === item.path ? "bg-blue-500" : "hover:bg-gray-700"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        <header className='flex justify-between items-center p-4 bg-white border-b'>
          <button
            className='md:hidden'
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <h2 className='text-xl font-semibold'>Payment Management System</h2>
        </header>

        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Sidebar

"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

interface Student {
  nickName: string;
  fullName: string;
  joiningDate: string;
  personalPhone: string;
  parentPhone: string;
  attendance: Record<string, 'P' | 'A' | null>;
}

const students: Student[] = [
  {
    nickName: "Sara",
    fullName: "Jannatul Ferdous Sara",
    joiningDate: "17 Aug 2024",
    personalPhone: "01749496030",
    parentPhone: "01749496030",
    attendance: {
      "17/8": "P", "19/8": "A", "21/8": "A", "24/8": "A", "26/8": "A", "28/8": "A", "31/8": "A"
    }
  },
  // ... add more students here
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const StudentAttendanceTracker: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 7, 1)); // August 2024
  const [hoveredStudent, setHoveredStudent] = useState<Student | null>(null);

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-3xl font-bold text-gray-800">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={nextMonth} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-sm leading-normal">
                <th className="py-3 px-4 text-left">NICK NAME</th>
                <th className="py-3 px-4 text-left">STUDENT'S FULL NAME</th>
                <th className="py-3 px-4 text-left">JOINING DATE</th>
                {[...Array(daysInMonth)].map((_, index) => (
                  <th key={index} className="py-3 px-2 text-center">
                    {index + 1}/{currentDate.getMonth() + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {students.map((student, index) => (
                <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="py-3 px-4 text-left whitespace-nowrap">
                    {student.nickName}
                  </td>
                  <td 
                    className="py-3 px-4 text-left relative group"
                    onMouseEnter={() => setHoveredStudent(student)}
                    onMouseLeave={() => setHoveredStudent(null)}
                  >
                    <span className="cursor-pointer">
                      {student.fullName}
                    </span>
                    {hoveredStudent === student && (
                      <div className="absolute z-20 bg-white border border-gray-200 p-3 rounded-lg shadow-lg mt-1 left-0 w-64">
                        <p className="font-semibold mb-1">Contact Information</p>
                        <p className="text-sm mb-1"><span className="font-medium">Personal:</span> {student.personalPhone}</p>
                        <p className="text-sm"><span className="font-medium">Parent's:</span> {student.parentPhone}</p>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4 text-left">
                    {student.joiningDate}
                  </td>
                  {[...Array(daysInMonth)].map((_, dayIndex) => {
                    const day = `${dayIndex + 1}/${currentDate.getMonth() + 1}`;
                    const status = student.attendance[day];
                    return (
                      <td key={dayIndex} className="py-3 px-2 text-center">
                        {status === 'P' && <Check size={16} className="text-green-500 mx-auto" />}
                        {status === 'A' && <X size={16} className="text-red-500 mx-auto" />}
                        {!status && <span className="inline-block w-4 h-4 bg-gray-200 rounded-full"></span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendanceTracker;

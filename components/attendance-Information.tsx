

"use client";
import React, { useState, useRef } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generatePDF } from './PDFGenerator';

interface Student {
  dreamersId: string;
  nickName: string;
  fullName: string;
  status: 'PAID' | 'Due';
}

const students: Student[] = [
  { dreamersId: "1", nickName: "Sarika", fullName: "Saraf Hasan Sarika", status: "PAID" },
  { dreamersId: "2", nickName: "Mahib", fullName: "Salman Sadik Mahib", status: "PAID" },
  { dreamersId: "3", nickName: "Mahir", fullName: "Farjan Zaman Mahir", status: "PAID" },
  { dreamersId: "4", nickName: "Mahima", fullName: "Syeda Mahima Hossen", status: "PAID" },
  { dreamersId: "5", nickName: "Joyeta", fullName: "Tahzeem Ifrit Joyeta", status: "Due" },
  { dreamersId: "6", nickName: "Nahin", fullName: "Ashraful Islam Nahin", status: "Due" },
  { dreamersId: "7", nickName: "Sumya", fullName: "Sumya Patwary", status: "Due" },
  { dreamersId: "8", nickName: "Saiam", fullName: "Al Sabah Siam", status: "Due" },
  { dreamersId: "9", nickName: "Mahin", fullName: "Munim Shahariar Mahin", status: "Due" },
  { dreamersId: "10", nickName: "Siam", fullName: "Abu Siam", status: "Due" },
  { dreamersId: "11", nickName: "Sadika", fullName: "Sadika Islam", status: "PAID" },
  { dreamersId: "12", nickName: "Nowme", fullName: "Israt Jahan Nowme", status: "Due" },
  { dreamersId: "13", nickName: "Jareef", fullName: "Jareef Bin Nazmul", status: "PAID" },
];

const StudentAttendanceTracker: React.FC = () => {
  const [currentDate] = useState(new Date());
  const tableRef = useRef(null);

  const handleDownload = () => {
    generatePDF(tableRef.current, {
      className: 'Class 11 (HSC-26)',
      subject: 'Math',
      instructor: 'Tushar Chowdhury',
      batchTime: '10:00am - 11:00am',
      date: `${currentDate.getDate()}-${currentDate.toLocaleString('default', { month: 'short' })}-${currentDate.getFullYear()}`
    });
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800">Class Attendance</h2>
          <Button onClick={handleDownload} className="bg-green-500 hover:bg-green-600">
            <Download size={20} className="mr-2" />
            Download PDF
          </Button>
        </div>
        <div className="overflow-x-auto" ref={tableRef}>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-sm leading-normal">
                <th className="py-3 px-4 text-left">DREAMERs' ID</th>
                <th className="py-3 px-4 text-left">Nick Name</th>
                <th className="py-3 px-4 text-left">Full Name</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Signature</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {students.map((student, index) => (
                <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="py-3 px-4 text-left">{student.dreamersId}</td>
                  <td className="py-3 px-4 text-left">{student.nickName}</td>
                  <td className="py-3 px-4 text-left">{student.fullName}</td>
                  <td className={`py-3 px-4 text-left font-semibold ${student.status === 'PAID' ? 'text-green-600' : 'text-red-600'}`}>
                    {student.status}
                  </td>
                  <td className="py-3 px-4 text-left"></td>
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
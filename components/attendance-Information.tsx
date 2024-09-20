

"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, X, User, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

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
  {
    nickName: "Rafi",
    fullName: "Md. Rafiqul Islam",
    joiningDate: "15 Aug 2024",
    personalPhone: "01711111111",
    parentPhone: "01722222222",
    attendance: {
      "17/8": "P", "19/8": "P", "21/8": "P", "24/8": "P", "26/8": "A", "28/8": "P", "31/8": "P"
    }
  },
  {
    nickName: "Tisha",
    fullName: "Fatema Tisha",
    joiningDate: "12 Aug 2024",
    personalPhone: "01733333333",
    parentPhone: "01744444444",
    attendance: {
      "17/8": "A", "19/8": "A", "21/8": "P", "24/8": "P", "26/8": "P", "28/8": "A", "31/8": "P"
    }
  },
  {
    nickName: "Shuvo",
    fullName: "Shuvo Kumar Dey",
    joiningDate: "18 Aug 2024",
    personalPhone: "01755555555",
    parentPhone: "01766666666",
    attendance: {
      "17/8": "P", "19/8": "P", "21/8": "A", "24/8": "P", "26/8": "P", "28/8": "A", "31/8": "A"
    }
  },
  {
    nickName: "Nadia",
    fullName: "Nadia Akter",
    joiningDate: "16 Aug 2024",
    personalPhone: "01777777777",
    parentPhone: "01788888888",
    attendance: {
      "17/8": "P", "19/8": "A", "21/8": "A", "24/8": "P", "26/8": "A", "28/8": "P", "31/8": "P"
    }
  }
  

  

  
  
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
    <div className="container mx-auto p-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-6"
      >
        <div className="flex justify-between items-center mb-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevMonth} 
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-md"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <h2 className="text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextMonth} 
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-md"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 text-sm leading-normal">
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
                <motion.tr 
                  key={index} 
                  className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <td className="py-3 px-4 text-left whitespace-nowrap font-medium text-blue-600">
                    {student.nickName}
                  </td>
                  <td 
                    className="py-3 px-4 text-left relative group"
                    onMouseEnter={() => setHoveredStudent(student)}
                    onMouseLeave={() => setHoveredStudent(null)}
                  >
                    <span className="cursor-pointer flex items-center">
                      <User size={16} className="mr-2 text-gray-400" />
                      {student.fullName}
                    </span>
                    {hoveredStudent === student && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-20 bg-white border border-gray-200 p-4 rounded-lg shadow-lg mt-1 left-0 w-72"
                      >
                        <p className="font-semibold mb-2 text-lg text-blue-600">Contact Information</p>
                        <p className="text-sm mb-2 flex items-center">
                          <Phone size={14} className="mr-2 text-gray-400" />
                          <span className="font-medium">Personal:</span> 
                          <span className="ml-2">{student.personalPhone}</span>
                        </p>
                        <p className="text-sm flex items-center">
                          <Phone size={14} className="mr-2 text-gray-400" />
                          <span className="font-medium">Parent's:</span> 
                          <span className="ml-2">{student.parentPhone}</span>
                        </p>
                      </motion.div>
                    )}
                  </td>
                  <td className="py-3 px-4 text-left text-gray-500">
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
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentAttendanceTracker;







// "use client";
// import React, { useState, useRef } from 'react';
// import { Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { generatePDF } from './PDFGenerator';

// interface Student {
//   dreamersId: string;
//   nickName: string;
//   fullName: string;
//   status: 'PAID' | 'Due';
// }

// const students: Student[] = [
//   { dreamersId: "1", nickName: "Sarika", fullName: "Saraf Hasan Sarika", status: "PAID" },
//   { dreamersId: "2", nickName: "Mahib", fullName: "Salman Sadik Mahib", status: "PAID" },
//   { dreamersId: "3", nickName: "Mahir", fullName: "Farjan Zaman Mahir", status: "PAID" },
//   { dreamersId: "4", nickName: "Mahima", fullName: "Syeda Mahima Hossen", status: "PAID" },
//   { dreamersId: "5", nickName: "Joyeta", fullName: "Tahzeem Ifrit Joyeta", status: "Due" },
//   { dreamersId: "6", nickName: "Nahin", fullName: "Ashraful Islam Nahin", status: "Due" },
//   { dreamersId: "7", nickName: "Sumya", fullName: "Sumya Patwary", status: "Due" },
//   { dreamersId: "8", nickName: "Saiam", fullName: "Al Sabah Siam", status: "Due" },
//   { dreamersId: "9", nickName: "Mahin", fullName: "Munim Shahariar Mahin", status: "Due" },
//   { dreamersId: "10", nickName: "Siam", fullName: "Abu Siam", status: "Due" },
//   { dreamersId: "11", nickName: "Sadika", fullName: "Sadika Islam", status: "PAID" },
//   { dreamersId: "12", nickName: "Nowme", fullName: "Israt Jahan Nowme", status: "Due" },
//   { dreamersId: "13", nickName: "Jareef", fullName: "Jareef Bin Nazmul", status: "PAID" },
// ];

// const StudentAttendanceTracker: React.FC = () => {
//   const [currentDate] = useState(new Date());
//   const tableRef = useRef(null);

//   const handleDownload = () => {
//     generatePDF(tableRef.current, {
//       className: 'Class 11 (HSC-26)',
//       subject: 'Math',
//       instructor: 'Tushar Chowdhury',
//       batchTime: '10:00am - 11:00am',
//       date: `${currentDate.getDate()}-${currentDate.toLocaleString('default', { month: 'short' })}-${currentDate.getFullYear()}`
//     });
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
//       <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-3xl font-bold text-gray-800">Class Attendance</h2>
//           <Button onClick={handleDownload} className="bg-green-500 hover:bg-green-600">
//             <Download size={20} className="mr-2" />
//             Download PDF
//           </Button>
//         </div>
//         <div className="overflow-x-auto" ref={tableRef}>
//           <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
//             <thead>
//               <tr className="bg-gray-200 text-gray-700 text-sm leading-normal">
//                 <th className="py-3 px-4 text-left">DREAMERs' ID</th>
//                 <th className="py-3 px-4 text-left">Nick Name</th>
//                 <th className="py-3 px-4 text-left">Full Name</th>
//                 <th className="py-3 px-4 text-left">Status</th>
//                 <th className="py-3 px-4 text-left">Signature</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600 text-sm">
//               {students.map((student, index) => (
//                 <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//                   <td className="py-3 px-4 text-left">{student.dreamersId}</td>
//                   <td className="py-3 px-4 text-left">{student.nickName}</td>
//                   <td className="py-3 px-4 text-left">{student.fullName}</td>
//                   <td className={`py-3 px-4 text-left font-semibold ${student.status === 'PAID' ? 'text-green-600' : 'text-red-600'}`}>
//                     {student.status}
//                   </td>
//                   <td className="py-3 px-4 text-left"></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentAttendanceTracker;
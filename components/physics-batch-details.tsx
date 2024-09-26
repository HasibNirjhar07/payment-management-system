"use client";

import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface BatchProps {
  batchNumber: number;
  schedule: string;
  days: string;
  activeStudents: number;
  enrolledStudents: number;
  instructor: string;
  thisMonth: { up: number; down: number };
  lastMonth: { up: number; down: number };
}

const BatchCard: React.FC<BatchProps> = ({
  batchNumber,
  schedule,
  days,
  activeStudents,
  enrolledStudents,
  instructor,
  thisMonth,
  lastMonth,
}) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-2 bg-gray-300 p-2">
      Physics Batch {batchNumber} (HSC 26)
    </h3>
    <p>
      Schedule: {schedule} <span className="text-sm text-gray-500">({days})</span>
    </p>
    <p>Active Students : {activeStudents}</p>
    <p>Enrolled Students : {enrolledStudents}</p>
    <p>Instructor : {instructor}</p>
    <div className="flex justify-between mt-2 text-sm">
      <div>
        This Month: 
        <span className="text-green-600 ml-1"><ArrowUpIcon className="inline" size={16} /> {thisMonth.up}</span>
        <span className="text-red-600 ml-1"><ArrowDownIcon className="inline" size={16} /> {thisMonth.down}</span>
      </div>
      <div>
        Last Month: 
        <span className="text-green-600 ml-1"><ArrowUpIcon className="inline" size={16} /> {lastMonth.up}</span>
        <span className="text-red-600 ml-1"><ArrowDownIcon className="inline" size={16} /> {lastMonth.down}</span>
      </div>
    </div>
  </div>
);

const PhysicsBatchDetails: React.FC = () => {
  const batches: BatchProps[] = [
    {
      batchNumber: 1,
      schedule: "09:00am - 10:00am",
      days: "SAT-MON-WED",
      activeStudents: 250,
      enrolledStudents: 750,
      instructor: "Al-amin Sharkar",
      thisMonth: { up: 17, down: 3 },
      lastMonth: { up: 17, down: 3 },
    },
    {
      batchNumber: 2,
      schedule: "10:00am - 11:00am",
      days: "SUN-TUE-THU",
      activeStudents: 250,
      enrolledStudents: 750,
      instructor: "Al-amin Sharkar",
      thisMonth: { up: 17, down: 3 },
      lastMonth: { up: 17, down: 3 },
    },
    {
      batchNumber: 3,
      schedule: "12:30pm - 01:30pm",
      days: "SUN-TUE-THU",
      activeStudents: 250,
      enrolledStudents: 750,
      instructor: "Al-amin Sharkar",
      thisMonth: { up: 17, down: 3 },
      lastMonth: { up: 17, down: 3 },
    },
    {
      batchNumber: 4,
      schedule: "04:30pm - 05:30pm",
      days: "SAT-MON-WED",
      activeStudents: 250,
      enrolledStudents: 750,
      instructor: "Al-amin Sharkar",
      thisMonth: { up: 17, down: 3 },
      lastMonth: { up: 17, down: 3 },
    },
    {
      batchNumber: 5,
      schedule: "05:30pm - 06:30pm",
      days: "SAT-MON-WED",
      activeStudents: 250,
      enrolledStudents: 750,
      instructor: "Al-amin Sharkar",
      thisMonth: { up: 17, down: 3 },
      lastMonth: { up: 17, down: 3 },
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Physics Batch Details (HSC 2026)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {batches.map((batch) => (
          <BatchCard key={batch.batchNumber} {...batch} />
        ))}
      </div>
    </div>
  );
};

export default PhysicsBatchDetails;
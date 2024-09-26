"use client";

import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

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
  <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
    {/* Header section with grey background */}
    <div className="bg-gray-300 p-2 rounded-t-lg ">
      <h3 className="text-xl font-bold mb-2">
        Physics Batch {batchNumber} (HSC 2026)
      </h3>
      {/* Prominent schedule inside the grey header */}
      <p className="text-sm">
        <strong>Schedule: </strong>
        {schedule} <span className="ml-1">({days})</span>
      </p>
    </div>
    <div className="p-4">
      <p>
        <strong>Active Students:</strong> {activeStudents}
      </p>
      <p>
        <strong>Enrolled Students:</strong> {enrolledStudents}
      </p>
      <p>
        <strong>Instructor:</strong> {instructor}
      </p>
      {/* Monthly stats with icons */}
      <div className="flex justify-between mt-4 text-sm">
      <div className="text-black">
  <span>This Month: </span>
  <ArrowUpIcon className="inline text-green-600" size={16} /> 
  <span className="text-green-600">{thisMonth.up}</span>
  <ArrowDownIcon className="inline text-red-600" size={16} /> 
  <span className="text-red-600">{thisMonth.down}</span>
</div>
<div className="text-black">
  <span>Last Month: </span>
  <ArrowUpIcon className="inline text-green-600" size={16} /> 
  <span className="text-green-600">{lastMonth.up}</span>
  <ArrowDownIcon className="inline text-red-600" size={16} /> 
  <span className="text-red-600">{lastMonth.down}</span>
</div>

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
      <h1 className="text-2xl font-bold mb-6 text-center">
        Physics Batch Details (HSC 2026)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {batches.map((batch) => (
          <BatchCard key={batch.batchNumber} {...batch} />
        ))}
      </div>
    </div>
  );
};

export default PhysicsBatchDetails;

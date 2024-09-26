"use client";


import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const SubjectCard = ({ subject, data }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-2 bg-gray-300 p-2">{subject} (HSC 26)</h3>
    <p>Number of Batch : {data.batches}</p>
    <p>
      Active Students : {data.activeStudents}
      <br />
      Enrolled Students : {data.enrolledStudents}
    </p>
    <p>Instructor : {data.instructor}</p>
    <div className="flex justify-between mt-2 text-sm">
      <div>
        This Month: 
        <span className="text-green-600 ml-1"><ArrowUpIcon className="inline" size={16} /> {data.thisMonth.up}</span>
        <span className="text-red-600 ml-1"><ArrowDownIcon className="inline" size={16} /> {data.thisMonth.down}</span>
      </div>
      <div>
        Last Month: 
        <span className="text-green-600 ml-1"><ArrowUpIcon className="inline" size={16} /> {data.lastMonth.up}</span>
        <span className="text-red-600 ml-1"><ArrowDownIcon className="inline" size={16} /> {data.lastMonth.down}</span>
      </div>
    </div>
  </div>
);

const HSC2026DetailsPage = () => {
  const subjects = [
    // Same data you provided

       {
      name: "Physics",
      data: {
        batches: "05",
        activeStudents: "250",
        enrolledStudents: "350",
        instructor: "Al-amin Sharkar",
        thisMonth: { up: 17, down: 3 },
        lastMonth: { up: 17, down: 3 }
      }
    },
    {
      name: "Chemistry",
      data: {
        batches: "03",
        activeStudents: "143",
        enrolledStudents: "250",
        instructor: "Al-amin Sharkar",
        thisMonth: { up: 17, down: 3 },
        lastMonth: { up: 17, down: 3 }
      }
    },
    {
      name: "Biology",
      data: {
        batches: "04",
        activeStudents: "250",
        enrolledStudents: "383",
        instructor: "Bappa Ghosh (Shawon)",
        thisMonth: { up: 17, down: 3 },
        lastMonth: { up: 17, down: 3 }
      }
    },
    {
      name: "Higher Math",
      data: {
        batches: "04",
        activeStudents: "250",
        enrolledStudents: "350",
        instructor: "Tushar Chowdhury",
        thisMonth: { up: 17, down: 3 },
        lastMonth: { up: 17, down: 3 }
      }
    },
    {
      name: "ICT",
      data: {
        batches: "04",
        activeStudents: "250",
        enrolledStudents: "350",
        instructor: "Tushar Chowdhury",
        thisMonth: { up: 17, down: 3 },
        lastMonth: { up: 17, down: 3 }
      }
    },
    {
      name: "English",
      data: {
        batches: "06",
        activeStudents: "250",
        enrolledStudents: "350",
        instructor: "Tamim Mosharraf",
        thisMonth: { up: 17, down: 3 },
        lastMonth: { up: 17, down: 3 }
      }
    },
    {
      name: "Bangla",
      data: {
        batches: "02",
        activeStudents: "120",
        enrolledStudents: "350",
        instructor: "Newaz Sharif",
        thisMonth: { up: 17, down: 3 },
        lastMonth: { up: 17, down: 3 }
      }
    },
    {
      name: "Engineering Admission",
      data: {
        batches: "02",
        activeStudents: "120",
        enrolledStudents: "350",
        instructor: "Al-amin Sharkar, Tushar Chowdhury",
        thisMonth: { up: 17, down: 3 },
        lastMonth: { up: 17, down: 3 }
      }
    },
    {
      name: "Medical Admission",
      data: {
        batches: "03",
        activeStudents: "250",
        enrolledStudents: "350",
        instructor: "Bappa Ghosh Shawon",
        thisMonth: { up: 17, down: 3 },
        lastMonth: { up: 17, down: 3 }
      }
    }


  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Subject wise Details (HSC 2026)</h1>
        <span className="text-gray-600">Academic / Admission</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} subject={subject.name} data={subject.data} />
        ))}
      </div>
    </div>
  );
};

export default HSC2026DetailsPage;

import { FC } from "react";
import Link from "next/link";

interface ClassCardProps {
  year: number;
  label: string;
  active: number;
  enrolled: number;
  thisMonth: number;
  lastMonth: number;
}

const ClassCard: FC<ClassCardProps> = ({
  year,
  label,
  active,
  enrolled,
  thisMonth,
  lastMonth,
}) => (
  <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
    <h3 className="bg-gray-300 text-lg font-semibold p-2 mb-2">
      HSC {year} ({label})
    </h3>
    <p>
      Active Students: <span className="font-bold">{active}</span>
    </p>
    <p>
      Enrolled Students: <span className="font-bold">{enrolled}</span>
    </p>
    <div className="flex justify-between mt-4">
      <div className="flex items-center text-green-600">
        <span>This Month: </span>
        <span className="ml-1">
          {thisMonth >= 0 ? "▲" : "▼"} {Math.abs(thisMonth)}
        </span>
      </div>
      <div className="flex items-center text-red-600">
        <span>Last Month: </span>
        <span className="ml-1">
          {lastMonth >= 0 ? "▲" : "▼"} {Math.abs(lastMonth)}
        </span>
      </div>
    </div>
  </div>
);

const ClassSummary: FC = () => {
  const classes = [
    { year: 24, label: "Admission Batch", active: 250, enrolled: 750, thisMonth: 17, lastMonth: -3 },
    { year: 25, label: "Class 12", active: 250, enrolled: 750, thisMonth: 17, lastMonth: -3 },
    { year: 26, label: "Class 11", active: 250, enrolled: 750, thisMonth: 17, lastMonth: -3 },
    { year: 27, label: "Class 10", active: 250, enrolled: 750, thisMonth: 17, lastMonth: -3 },
    { year: 28, label: "Class 10", active: 250, enrolled: 750, thisMonth: 17, lastMonth: -3 },
    { year: 29, label: "Class 09", active: 250, enrolled: 750, thisMonth: 17, lastMonth: -3 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Class wise Details</h2>
        <div className="space-x-2">
          <button className="bg-gray-300 border rounded px-4 py-2">Add Class</button>
          <button className="bg-gray-300 border rounded px-4 py-2">Edit Class</button>
          <button className="bg-gray-300 border rounded px-4 py-2">Remove Class</button>
          <button className="bg-gray-300 border rounded px-4 py-2">Move to Archive</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((cls) => (
          <ClassCard key={cls.year} {...cls} />
        ))}
      </div>
    </div>
  );
};

export default ClassSummary;

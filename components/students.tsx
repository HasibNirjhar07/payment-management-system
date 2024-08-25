import { FC } from 'react';

interface Student {
  id: number;
  name: string;
  class: string;
  batch: string;
  status: 'Active' | 'Inactive';
}

const Students: FC = () => {
  const students: Student[] = [
    { id: 1, name: 'John Doe', class: 'A', batch: 'Math 1', status: 'Active' },
    { id: 2, name: 'Jane Smith', class: 'B', batch: 'Sci 2', status: 'Active' },
    { id: 3, name: 'Bob Johnson', class: 'A', batch: 'Eng 1', status: 'Active' },
    { id: 4, name: 'Mary King', class: 'C', batch: 'His 1', status: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Students</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex space-x-4 mb-4">
          <select className="form-select">
            <option>Filter by Name</option>
          </select>
          <select className="form-select">
            <option>Filter by Class</option>
          </select>
          <select className="form-select">
            <option>Filter by Batch</option>
          </select>
          <select className="form-select">
            <option>Filter by Status</option>
          </select>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.class}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.batch}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;

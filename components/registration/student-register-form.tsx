import React from "react"

const StudentRegisterForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-5xl p-8 shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Student’s Registration Form</h2>
        <form className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="font-bold text-lg underline mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block font-medium">Add Image</label>
                <input type="file" className="border rounded w-full" />
              </div>
              <div>
                <label className="block font-medium">Nick Name</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Full Name (English)</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Full Name (Bangla)</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Phone Number</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Date of Birth</label>
                <input type="date" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Gender</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Blood Group</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Religion</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Nationality</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="font-bold text-lg underline mb-4">Academic Information</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block font-medium">School Name</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">College Name</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Class</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Version</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Group</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Shift</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Section</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
            </div>
          </div>

          {/* Parents Information */}
          <div>
            <h3 className="font-bold text-lg underline mb-4">Parents Information</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block font-medium">Father's Name</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Father's Occupation</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Father's Phone Number</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Father's Email Address</label>
                <input type="email" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Mother's Name</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Mother's Occupation</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Mother's Phone Number</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Mother's Email Address</label>
                <input type="email" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Guardian's Name</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Guardian's Occupation</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Guardian's Phone Number</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Guardian's Email Address</label>
                <input type="email" className="border rounded w-full p-2" />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h3 className="font-bold text-lg underline mb-4">Address Information</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium">Present Address</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Permanent Address</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
              <div>
                <label className="block font-medium">Home District</label>
                <input type="text" className="border rounded w-full p-2" />
              </div>
            </div>
          </div>

          {/* Subjects and Financial Aid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium">Subjects (You want to Enroll)</label>
              <input type="text" className="border rounded w-full p-2" />
            </div>
            <div className="flex flex-col">
              <label className="block font-medium">DREAMERS' (Financial Aid Support)</label>
              <div className="flex space-x-2 mt-2">
                <button className="border rounded px-4 py-2 bg-gray-300">Not Applicable</button>
                <button className="border rounded px-4 py-2 bg-gray-300">More Details</button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Submit Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentRegisterForm

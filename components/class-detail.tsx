"use client"

import { useParams } from "next/navigation"
import Link from "next/link"

interface Subject {
  subject: string
  batches: number
  activeStudents: number
  enrolledStudents: number
  instructor: string
}

interface ClassInfo {
  name: string
  subjects: Subject[]
}

const SubjectCard = ({
  subject,
  batches,
  activeStudents,
  enrolledStudents,
  instructor,
}: Subject) => (
  <div className='bg-white rounded-lg shadow-md p-4'>
    <h3 className='text-lg font-semibold mb-2'>{subject}</h3>
    <p>Batches: {batches}</p>
    <p>Active Students: {activeStudents}</p>
    <p>Enrolled Students: {enrolledStudents}</p>
    <p>Instructor: {instructor}</p>
  </div>
)

const ClassDetails = () => {
  const params = useParams()
  const classId = params.classId as string

  const classData: Record<string, ClassInfo> = {
    HSC2024: {
      name: "HSC 2024",
      subjects: [
        {
          subject: "Math",
          batches: 3,
          activeStudents: 40,
          enrolledStudents: 45,
          instructor: "John Doe",
        },
        {
          subject: "Physics",
          batches: 2,
          activeStudents: 35,
          enrolledStudents: 38,
          instructor: "Jane Smith",
        },
        {
          subject: "Chemistry",
          batches: 2,
          activeStudents: 30,
          enrolledStudents: 32,
          instructor: "Bob Johnson",
        },
        {
          subject: "Biology",
          batches: 1,
          activeStudents: 25,
          enrolledStudents: 28,
          instructor: "Alice Brown",
        },
      ],
    },
    A: {
      name: "Class A",
      subjects: [
        {
          subject: "English",
          batches: 2,
          activeStudents: 30,
          enrolledStudents: 32,
          instructor: "Emma Wilson",
        },
        {
          subject: "History",
          batches: 1,
          activeStudents: 28,
          enrolledStudents: 30,
          instructor: "Michael Clark",
        },
        {
          subject: "Geography",
          batches: 1,
          activeStudents: 25,
          enrolledStudents: 27,
          instructor: "Sarah Davis",
        },
      ],
    },
    // Add more classes as needed
  }

  const classInfo = classData[classId]

  if (!classInfo) {
    return <div>Class not found</div>
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <Link
        href='/class-summary'
        className='text-blue-500 hover:text-blue-700 mb-4 inline-block'
      >
        &larr; Back to Class Summary
      </Link>
      <h2 className='text-2xl font-bold mb-6'>{classInfo.name} Detail</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {classInfo.subjects.map((subject, index) => (
          <SubjectCard key={index} {...subject} />
        ))}
      </div>
    </div>
  )
}

export default ClassDetails

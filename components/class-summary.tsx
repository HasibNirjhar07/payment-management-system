import { FC } from "react"
import Link from "next/link"

interface ClassCardProps {
  year: number
  active: number
  enrolled: number
  lastMonth: number
}

const ClassCard: FC<ClassCardProps> = ({
  year,
  active,
  enrolled,
  lastMonth,
}) => (
  <Link href={`/class-detail/HSC${year}`} passHref>
    <div className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer'>
      <h3 className='text-lg font-semibold mb-2'>HSC {year}</h3>
      <p>Active: {active}</p>
      <p>Enrolled: {enrolled}</p>
      <p
        className={`flex items-center ${
          lastMonth > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        Last Month: {lastMonth > 0 ? "▲" : "▼"}
        {Math.abs(lastMonth)}
      </p>
    </div>
  </Link>
)

const ClassSummary: FC = () => {
  const hscClasses = [
    { year: 2024, active: 120, enrolled: 130, lastMonth: 5 },
    { year: 2025, active: 115, enrolled: 125, lastMonth: -2 },
    { year: 2026, active: 110, enrolled: 118, lastMonth: 3 },
    { year: 2027, active: 105, enrolled: 112, lastMonth: 1 },
    { year: 2028, active: 100, enrolled: 105, lastMonth: -1 },
    { year: 2029, active: 95, enrolled: 98, lastMonth: 2 },
  ]

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-6'>Class Summary</h2>
      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-4'>HSC Batches</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {hscClasses.map((cls) => (
            <ClassCard key={cls.year} {...cls} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClassSummary

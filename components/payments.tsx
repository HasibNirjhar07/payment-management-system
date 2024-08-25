import { FC } from 'react';
import Link from 'next/link';

interface PaymentCardProps {
  year: number;
  activeStudents: number;
  activePaid: number;
  activeDue: number;
  inactiveDue: number;
}

const PaymentCard: FC<PaymentCardProps> = ({ year, activeStudents, activePaid, activeDue, inactiveDue }) => (
  <Link href={`/payment-detail/HSC${year}`} passHref>
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <h3 className="text-lg font-semibold mb-2">HSC {year}</h3>
      <p>Active Students: {activeStudents}</p>
      <p>Active Students (Paid): {activePaid}</p>
      <p>Active Students (Due): {activeDue}</p>
      <p>Inactive Students (Due): {inactiveDue}</p>
    </div>
  </Link>
);

const Payments: FC = () => {
  const paymentData = [
    { year: 2024, activeStudents: 120, activePaid: 100, activeDue: 20, inactiveDue: 5 },
    { year: 2025, activeStudents: 115, activePaid: 95, activeDue: 20, inactiveDue: 3 },
    { year: 2026, activeStudents: 110, activePaid: 90, activeDue: 20, inactiveDue: 2 },
    { year: 2027, activeStudents: 105, activePaid: 85, activeDue: 20, inactiveDue: 1 },
    { year: 2028, activeStudents: 100, activePaid: 80, activeDue: 20, inactiveDue: 0 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Payment Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paymentData.map((data) => (
          <PaymentCard key={data.year} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Payments;

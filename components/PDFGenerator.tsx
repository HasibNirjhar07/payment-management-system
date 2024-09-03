"use client";

import { jsPDF } from 'jspdf'; // Correct import statement
import autoTable, { UserOptions } from 'jspdf-autotable'; // Importing both autoTable and UserOptions

interface PDFGeneratorProps {
  className: string;
  subject: string;
  instructor: string;
  batchTime: string;
  date: string;
}

export const generatePDF = (element: HTMLElement | null, props: PDFGeneratorProps) => {
  if (!element) return;

  const { className, subject, instructor, batchTime, date } = props;
  const pdf = new jsPDF();

  // Add header
  pdf.setFontSize(18);
  pdf.setFont("helvetica", "bold");
  pdf.text('Class Attendance', pdf.internal.pageSize.getWidth() / 2, 15, { align: 'center' });

  // Add class details
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.text(`Class: ${className}`, 10, 25);
  pdf.text(`Subject: ${subject}`, 10, 30);
  pdf.text(`Instructor: ${instructor}`, 10, 35);
  pdf.text(`Batch Time: ${batchTime}`, 10, 40);
  pdf.text(`Date: ${date}`, pdf.internal.pageSize.getWidth() - 10, 25, { align: 'right' });

  // Add Dreamers logo (placeholder rectangle)
  pdf.rect(pdf.internal.pageSize.getWidth() - 50, 30, 40, 15);
  pdf.text('DREAMERS', pdf.internal.pageSize.getWidth() - 30, 40, { align: 'center' });

  // Extract table data
  const table = element.getElementsByTagName('table')[0];
  if (!table) return; // Ensure the table element exists

  const data = Array.from(table.rows).slice(1).map(row =>
    Array.from(row.cells).map(cell => cell.textContent || '') // Ensure non-null cell content
  );

  // Add table
  autoTable(pdf, {
    head: [['Dreamers ID', 'Nick Name', 'Full Name', 'Status', 'Signature']],
    body: data,
    startY: 50,
    styles: { fontSize: 8, cellPadding: 2 },
    columnStyles: {
      0: { cellWidth: 20 },
      1: { cellWidth: 25 },
      2: { cellWidth: 50 },
      3: { cellWidth: 20 },
      4: { cellWidth: 30 },
    },
  } as UserOptions);

  pdf.save('class_attendance.pdf');
};

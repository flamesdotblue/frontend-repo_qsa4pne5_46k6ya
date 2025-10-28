import React from 'react';
import { FileText, Search } from 'lucide-react';

const invoices = [
  { id: 'INV-1001', date: '2025-01-05', customer: 'شركة النور', type: 'بيع', amount: 2450.75, status: 'مدفوعة' },
  { id: 'INV-1002', date: '2025-01-08', customer: 'مؤسسة الأمل', type: 'شراء', amount: 1340.0, status: 'غير مدفوعة' },
  { id: 'INV-1003', date: '2025-01-12', customer: 'متاجر السلام', type: 'بيع', amount: 780.0, status: 'مدفوعة' },
  { id: 'INV-1004', date: '2025-01-18', customer: 'شركة الريادة', type: 'شراء', amount: 5120.25, status: 'قيد المعالجة' },
];

const Badge = ({ children, color }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${color}`}>{children}</span>
);

const statusColor = (s) =>
  s === 'مدفوعة' ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-200' : s === 'غير مدفوعة' ? 'bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200' : 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200';

const InvoicesTable = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <FileText size={18} className="text-indigo-600" />
          <h3 className="text-base font-semibold">قائمة الفواتير</h3>
        </div>
        <div className="relative">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="بحث عن فاتورة..."
            className="w-56 rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-right">
          <thead>
            <tr className="text-xs text-gray-500">
              <th className="whitespace-nowrap px-3 py-2 font-medium">رقم الفاتورة</th>
              <th className="whitespace-nowrap px-3 py-2 font-medium">التاريخ</th>
              <th className="whitespace-nowrap px-3 py-2 font-medium">العميل/المورد</th>
              <th className="whitespace-nowrap px-3 py-2 font-medium">النوع</th>
              <th className="whitespace-nowrap px-3 py-2 font-medium">القيمة</th>
              <th className="whitespace-nowrap px-3 py-2 font-medium">الحالة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">{inv.id}</td>
                <td className="whitespace-nowrap px-3 py-2 text-gray-700">{inv.date}</td>
                <td className="whitespace-nowrap px-3 py-2 text-gray-700">{inv.customer}</td>
                <td className="whitespace-nowrap px-3 py-2">
                  <Badge color={inv.type === 'بيع' ? 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200' : 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200'}>
                    {inv.type}
                  </Badge>
                </td>
                <td className="whitespace-nowrap px-3 py-2 tabular-nums text-gray-900">${inv.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                <td className="whitespace-nowrap px-3 py-2">
                  <Badge color={statusColor(inv.status)}>{inv.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesTable;

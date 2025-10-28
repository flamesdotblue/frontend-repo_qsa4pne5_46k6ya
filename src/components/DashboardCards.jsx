import React from 'react';
import { TrendingUp, ShoppingCart, Package, Users } from 'lucide-react';

const Card = ({ title, value, change, icon: Icon, color }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <div className="mt-1 flex items-end gap-2">
          <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
          <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs ${color.bg} ${color.text}`}>
            <TrendingUp size={14} />
            {change}
          </span>
        </div>
      </div>
      <div className={`rounded-lg p-2 ${color.iconBg}`}>
        <Icon className={color.iconText} size={22} />
      </div>
    </div>
  </div>
);

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Card
        title="إجمالي المبيعات"
        value="‏$24,560"
        change="+12%"
        icon={ShoppingCart}
        color={{ bg: 'bg-green-50', text: 'text-green-700', iconBg: 'bg-green-100', iconText: 'text-green-700' }}
      />
      <Card
        title="المشتريات"
        value="‏$13,420"
        change="+5%"
        icon={Package}
        color={{ bg: 'bg-blue-50', text: 'text-blue-700', iconBg: 'bg-blue-100', iconText: 'text-blue-700' }}
      />
      <Card
        title="المخزون المتاح"
        value="3,284"
        change="-2%"
        icon={Package}
        color={{ bg: 'bg-amber-50', text: 'text-amber-700', iconBg: 'bg-amber-100', iconText: 'text-amber-700' }}
      />
      <Card
        title="العملاء النشطون"
        value="842"
        change="+9%"
        icon={Users}
        color={{ bg: 'bg-purple-50', text: 'text-purple-700', iconBg: 'bg-purple-100', iconText: 'text-purple-700' }}
      />
    </div>
  );
};

export default DashboardCards;

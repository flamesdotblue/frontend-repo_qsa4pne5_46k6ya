import React from 'react';
import { Home, FileText, Boxes, Users, BarChart3 } from 'lucide-react';

const items = [
  { key: 'dashboard', label: 'لوحة التحكم', icon: Home },
  { key: 'invoices', label: 'فواتير', icon: FileText },
  { key: 'inventory', label: 'المخازن', icon: Boxes },
  { key: 'accounts', label: 'العملاء والموردين', icon: Users },
  { key: 'reports', label: 'التقارير', icon: BarChart3 },
];

const Sidebar = ({ active, onChange }) => {
  return (
    <aside className="h-full w-full max-w-64 border-l border-gray-200 bg-white/70 p-3 text-right">
      <nav className="space-y-1">
        {items.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`group flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-sm transition ${
              active === key
                ? 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="truncate">{label}</span>
            <Icon size={18} className={active === key ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'} />
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

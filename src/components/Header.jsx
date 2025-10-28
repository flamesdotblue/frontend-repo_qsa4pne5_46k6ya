import React from 'react';
import { LayoutDashboard, Settings, LogOut, User } from 'lucide-react';

const Header = ({ onLogout, user = { name: 'Admin' } }) => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <LayoutDashboard size={18} />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">نظام الحسابات والمخازن</h1>
            <p className="text-xs text-gray-500">فواتير • مخازن • تقارير • عملاء وموردين</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            aria-label="Settings"
          >
            <Settings size={16} />
            الإعدادات
          </button>
          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
            <User size={16} className="text-indigo-600" />
            <span className="font-medium">{user.name}</span>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 ring-1 ring-inset ring-red-200 transition hover:bg-red-100"
          >
            <LogOut size={16} />
            خروج
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

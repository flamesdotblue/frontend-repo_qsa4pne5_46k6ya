import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardCards from './components/DashboardCards';
import InvoicesTable from './components/InvoicesTable';
import { LogIn } from 'lucide-react';

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <LogIn size={22} />
          </div>
          <h2 className="text-xl font-bold">تسجيل الدخول</h2>
          <p className="mt-1 text-sm text-gray-500">مرحباً بك في نظام الحسابات والمخازن</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin({ name: 'Admin' });
          }}
          className="space-y-4 text-right"
        >
          <div>
            <label className="mb-1 block text-sm text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-200"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-700">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-200"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700">
            <LogIn size={16} />
            دخول
          </button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState('dashboard');
  const [user, setUser] = useState(null);

  if (!user) return <LoginScreen onLogin={setUser} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header onLogout={() => setUser(null)} user={user} />
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_260px] lg:px-8">
        <section className="space-y-6">
          {active === 'dashboard' && (
            <>
              <DashboardCards />
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="mb-3 text-base font-semibold text-gray-900">نظرة سريعة</h3>
                <p className="text-sm text-gray-600">
                  اطلع على أداء المبيعات والمشتريات وحالة المخزون. استخدم القائمة الجانبية للتنقل بين الفواتير والمخازن والحسابات والتقارير.
                </p>
              </div>
              <InvoicesTable />
            </>
          )}

          {active === 'invoices' && (
            <>
              <InvoicesTable />
            </>
          )}

          {active === 'inventory' && (
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-base font-semibold text-gray-900">المخازن</h3>
              <p className="text-sm text-gray-600">إدارة الأصناف والكميات وتنبيهات حد الطلب ستظهر هنا في الإصدارات القادمة.</p>
            </div>
          )}

          {active === 'accounts' && (
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-base font-semibold text-gray-900">حسابات العملاء والموردين</h3>
              <p className="text-sm text-gray-600">عرض الأرصدة وكشوف الحسابات وإنشاء قيود اليومية.</p>
            </div>
          )}

          {active === 'reports' && (
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-base font-semibold text-gray-900">التقارير</h3>
              <p className="text-sm text-gray-600">تقارير مفصلة للمبيعات والمشتريات والمخزون سيتم توفيرها هنا.</p>
            </div>
          )}
        </section>

        <aside className="order-first lg:order-none">
          <Sidebar active={active} onChange={setActive} />
        </aside>
      </main>
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} نظام الحسابات والمخازن – جميع الحقوق محفوظة
      </footer>
    </div>
  );
}

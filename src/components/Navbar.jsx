'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  Menu, 
  X, 
  ChevronDown, 
  User, 
  BookMarked, 
  ShieldCheck, 
  LogOut 
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dashboardDropdownOpen, setDashboardDropdownOpen] = useState(false);

  // Mock state for layout testing (will connect to real auth context later)
  const [user, setUser] = useState({
    name: 'Reader Demo',
    email: 'reader@example.com',
    role: 'user', // Change to 'librarian' or 'admin' to preview dropdown items
  });

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Browse Books', href: '/browse' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600 transition hover:opacity-90">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
            <BookOpen size={22} />
          </span>
          <span className="tracking-tight text-gray-900">
            Biblio<span className="text-blue-600">Drop</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                isActive(link.href)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Role-based Dashboard Dropdown (Logged In) */}
          {user && (
            <div className="relative ml-1">
              <button
                onClick={() => setDashboardDropdownOpen(!dashboardDropdownOpen)}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                  pathname.startsWith('/dashboard')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Dashboard
                <ChevronDown size={15} className={`transition-transform duration-200 ${dashboardDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dashboardDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setDashboardDropdownOpen(false)}
                  />
                  <div className="absolute right-0 z-20 mt-2 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                    <div className="px-3 py-2 border-b border-gray-100 mb-1">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Role Portals</p>
                    </div>

                    <Link
                      href="/dashboard/user"
                      onClick={() => setDashboardDropdownOpen(false)}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition ${
                        pathname === '/dashboard/user' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <User size={16} className="text-blue-500" />
                      User Dashboard
                    </Link>

                    <Link
                      href="/dashboard/librarian"
                      onClick={() => setDashboardDropdownOpen(false)}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition ${
                        pathname === '/dashboard/librarian' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <BookMarked size={16} className="text-emerald-500" />
                      Librarian Dashboard
                    </Link>

                    <Link
                      href="/dashboard/admin"
                      onClick={() => setDashboardDropdownOpen(false)}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition ${
                        pathname === '/dashboard/admin' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <ShieldCheck size={16} className="text-purple-500" />
                      Admin Dashboard
                    </Link>
                  </div>
                </>
              )}
            </div>
          )}
        </nav>

        {/* Desktop Auth Controls */}
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 uppercase">
                {user.role}
              </span>
              <button
                onClick={() => setUser(null)}
                className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3 md:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-base font-medium ${
                  isActive(link.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {user && (
              <>
                <p className="px-3 pt-3 text-xs font-semibold uppercase text-gray-400">Dashboards</p>
                <Link
                  href="/dashboard/user"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  User Dashboard
                </Link>
                <Link
                  href="/dashboard/librarian"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Librarian Dashboard
                </Link>
                <Link
                  href="/dashboard/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Admin Dashboard
                </Link>
              </>
            )}
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            {user ? (
              <button
                onClick={() => {
                  setUser(null);
                  setMobileMenuOpen(false);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
              >
                <LogOut size={16} />
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
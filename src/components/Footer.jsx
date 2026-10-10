'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand & Mission (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                <BookOpen size={22} />
              </span>
              <span className="tracking-tight text-gray-900">
                Biblio<span className="text-blue-600">Drop</span>
              </span>
            </Link>

            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Connecting avid readers and students with local libraries and independent book providers.
              Discover, borrow, and enjoy doorstep delivery seamlessly.
            </p>

            {/* Social Links using react-icons (FaXTwitter & FaGithub) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition"
                aria-label="Follow us on X"
              >
                <FaXTwitter size={15} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition"
                aria-label="GitHub Repository"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              </li>
              <li>
                <Link href="/browse" className="hover:text-blue-600 transition">Browse Books</Link>
              </li>
              <li>
                <Link href="/browse?filter=featured" className="hover:text-blue-600 transition">Featured Collections</Link>
              </li>
              <li>
                <Link href="/browse?category=Academic" className="hover:text-blue-600 transition">Academic & Textbooks</Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900">Support & Legal</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-600 transition">About Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition">Contact Support</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup (Frontend only) */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900">Stay Updated</h3>
            <p className="text-xs text-gray-500">
              Get notified when rare books and new local libraries join BiblioDrop.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-xs font-medium text-green-700 border border-green-200">
                <CheckCircle2 size={16} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 px-3 text-xs font-medium text-white shadow-sm hover:bg-blue-700 transition"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 border-t border-gray-100 pt-6 flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} BiblioDrop. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-900 transition">Privacy</Link>
            <Link href="#" className="hover:text-gray-900 transition">Terms</Link>
            <Link href="#" className="hover:text-gray-900 transition">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
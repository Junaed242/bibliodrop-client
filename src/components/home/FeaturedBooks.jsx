'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, Clock } from 'lucide-react';

// Sample books used while the backend server is not connected
const fallbackBooks = [
  {
    _id: '1',
    title: 'Clean Code: Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    category: 'Academic',
    deliveryFee: 4.5,
    isAvailable: true,
    coverImage: 'https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=800&q=80',
  },
  {
    _id: '2',
    title: 'Dune: The Graphic Novel & Epic',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    deliveryFee: 3.0,
    isAvailable: true,
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    _id: '3',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    category: 'Non-Fiction',
    deliveryFee: 5.0,
    isAvailable: false, // demonstrates "Unavailable" checked out badge
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
  },
  {
    _id: '4',
    title: 'Atomic Habits: Tiny Changes, Remarkable Results',
    author: 'James Clear',
    category: 'Self-Help',
    deliveryFee: 3.5,
    isAvailable: true,
    coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
  },
  {
    _id: '5',
    title: 'The Pragmatic Programmer: 20th Anniversary',
    author: 'David Thomas & Andrew Hunt',
    category: 'Academic',
    deliveryFee: 4.0,
    isAvailable: true,
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
  },
  {
    _id: '6',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    deliveryFee: 2.5,
    isAvailable: false,
    coverImage: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80',
  },
];

export default function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const res = await fetch(`${apiUrl}/books/featured`, { cache: 'no-store' });
        if (!res.ok) throw new Error('API offline');
        const data = await res.json();
        setBooks(data.books?.length > 0 ? data.books.slice(0, 6) : fallbackBooks);
      } catch (err) {
        // Fallback to sample books when backend is not running yet
        setBooks(fallbackBooks);
      } finally {
        setLoading(false);
      }
    }
    fetchFeatured();
  }, []);

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-2">
              <Sparkles size={13} />
              <span>Community Picks</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured Books
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
              Handpicked titles currently available for doorstep request from neighborhood libraries.
            </p>
          </div>

          <Link
            href="/browse"
            className="inline-flex items-center gap-2 self-start md:self-end text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            <span>Explore All Books</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Loading Skeletons */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-gray-200 p-4 space-y-4">
                <div className="aspect-3/4 w-full rounded-xl bg-gray-200" />
                <div className="h-4 w-1/3 rounded bg-gray-200" />
                <div className="h-5 w-3/4 rounded bg-gray-200" />
                <div className="h-4 w-1/2 rounded bg-gray-200" />
                <div className="h-10 w-full rounded-lg bg-gray-200" />
              </div>
            ))}
          </div>
        ) : (
          /* Book Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, idx) => (
              <motion.div
                key={book._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div>
                  {/* Book Cover Image with Badges */}
                  <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Category Chip */}
                    <div className="absolute top-3 left-3">
                      <span className="rounded-lg bg-white/95 px-2.5 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
                        {book.category}
                      </span>
                    </div>

                    {/* Availability Badge */}
                    <div className="absolute top-3 right-3">
                      {book.isAvailable ? (
                        <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
                          <CheckCircle2 size={12} />
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-lg bg-amber-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
                          <Clock size={12} />
                          Unavailable
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Author */}
                  <div className="mt-4 space-y-1">
                    <h3 className="line-clamp-1 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {book.title}
                    </h3>
                    <p className="line-clamp-1 text-xs font-medium text-gray-500">
                      By {book.author}
                    </p>
                  </div>
                </div>

                {/* Footer: Fee & CTA */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Delivery Fee</p>
                    <p className="text-base font-extrabold text-blue-600">${book.deliveryFee.toFixed(2)}</p>
                  </div>

                  <Link
                    href={`/book/${book._id}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-600 transition"
                  >
                    <span>View Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
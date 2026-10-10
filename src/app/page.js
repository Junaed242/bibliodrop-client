import { BookOpen, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center space-y-4">
      {/* Badge */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
        <Sparkles size={14} />
        BiblioDrop v1.0
      </span>

      {/* Main Title */}
      <h1 className="text-4xl font-extrabold tracking-tight text-blue-600 sm:text-5xl">
        Your Local Library, Delivered
      </h1>

      <p className="max-w-md text-gray-600 text-base sm:text-lg">
        Browse thousands of titles from local libraries and independent book owners with doorstep delivery.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-all">
          <BookOpen size={18} />
          Browse Books
        </button>
        <button className="px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition-all">
          Learn More
        </button>
      </div>
    </main>
  );
}
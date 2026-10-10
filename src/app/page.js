import HeroBanner from '@/components/home/HeroBanner';
import FeaturedBooks from '@/components/home/FeaturedBooks';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Animated Hero Carousel */}
      <HeroBanner />

      {/* 2. Featured Books (Dynamic 6-book Grid) */}
      <FeaturedBooks />
    </main>
  );
}
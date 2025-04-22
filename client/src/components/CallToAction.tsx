import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section className="bg-[#556B2F] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Experience excellence in education at our institution
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-[#556B2F] hover:bg-gray-100"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#800000] hover:bg-[#660000] text-white"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
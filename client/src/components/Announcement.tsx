import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
import { announcement } from '@/data/schoolData';

export default function Announcement() {
  const [visible, setVisible] = useState(true);
  const announcementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation to make announcement bounce slowly
    const element = announcementRef.current;
    if (element) {
      const animation = element.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-4px)' },
          { transform: 'translateY(0)' }
        ],
        {
          duration: 3000,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );

      return () => animation.cancel();
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-[#800000] text-white py-2 relative overflow-hidden">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex-1 overflow-hidden">
          <div ref={announcementRef} className="whitespace-nowrap overflow-hidden text-ellipsis">
            <span>{announcement.text}</span>
          </div>
        </div>
        <Link href={announcement.link} className="text-white hover:text-[#DAA520] transition ml-2 text-sm flex items-center">
          View All
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

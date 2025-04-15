import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Array of gallery images with their descriptions
const galleryImages = [
  {
    id: 1,
    src: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464748073_8563082410446949_8902343514568291852_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHCI0mfc3kRKSLC-8DlfaoduiVJFkozXHC6JUkWSjNccCJR0d2IePPPoYW2ZPNYhDffTGGVhGqBb5rjdcJLGenH&_nc_ohc=10e8-6bDFAoQ7kNvwFTaSO7&_nc_oc=AdnTLkomGVEXpV0aFIRoqrzuL1kljWFbAEW4ea-5B-ejKJD0FrgtDHlPqCY7_SqxpGo&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=Pn2ipAjuEGRw0cDdB2isuQ&oh=00_AfHhBOTfdYiFxf8uZjzZNITblpKUINg0OBJVx2-FhxOFPg&oe=6803ACFB",
    alt: "School Facilities",
    title: "Modern Infrastructure",
    description: "State-of-the-art facilities to support learning and development"
  },
  {
    id: 2,
    src: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464450978_8534882656600258_8760644078716708290_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEBBcuvY0ERxPWzvdyqA7g-6WqRI5-BxF3papEjn4HEXXwteKcY1Usxsk2xCfUG1uiMFJSYKAKQTUPf8SNRY2aw&_nc_ohc=3x2RkSOHeYcQ7kNvwHvLOT9&_nc_oc=AdnyDejKLMyXPX8JMouTybt1RnU3dvSQ1-HBmVqn4IfmiqAjGyQ1JSAnEqLSrbkCz8s&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=5o_4h3hc6199PmjLC9aaaA&oh=00_AfERAQx-33rLGRiZ7REe_JRDc20xGkEWefuov3c0zgeopQ&oe=68039A1E",
    alt: "School Activities",
    title: "Student Life",
    description: "Engaging activities that foster holistic development"
  },
  {
    id: 3,
    src: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464323190_8534882639933593_2849266266521394042_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEGC_E6a4uug4dL9lijNygbyaOtZKdZa7fJo61kp1lrt5nF9JzVERz1rfigzSOawLKFY2pK9nNldWBhD8euSuXe&_nc_ohc=vcnoCNb9q7IQ7kNvwEzu5T5&_nc_oc=Adm9iE8qW1u3_bfFwRLd3fur2AZIfX_V1pbkdOOOSvALksiRGYxBfoKFiJwCjJnBrQ8&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=ER7sjLfP9C051AbLYO2LTg&oh=00_AfEEV9-Wp9bIjfV-jaM3-p5hYXbW-Hq_JfMsnERLyR3kJA&oe=6803A853",
    alt: "Academic Excellence",
    title: "Academic Focus",
    description: "Committed to academic excellence and student achievement"
  }
];

export default function WelcomeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-advance images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Intersection Observer to trigger animation when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('welcome-gallery');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-[#556B2F] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to Kiage Tumaini
          </motion.h2>
          <motion.p 
            className="text-gray-700 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Experience our school's environment and culture through these moments
          </motion.p>
        </div>

        <motion.div 
          id="welcome-gallery"
          className="relative rounded-lg overflow-hidden shadow-xl aspect-video max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            scale: isVisible ? 1 : 0.9 
          }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-bold mb-2">
                  {galleryImages[currentIndex].title}
                </h3>
                <p className="text-white/90">
                  {galleryImages[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto mt-6 text-center">
          <p className="text-sm text-gray-500">
            Discover our facilities, activities, and the vibrant life at Kiage Tumaini
          </p>
        </div>
      </div>
    </section>
  );
}
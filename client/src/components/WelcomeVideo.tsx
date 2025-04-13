import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WelcomeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Video URL - replace with actual video URL when available
  const videoUrl = "https://cdn.jsdelivr.net/gh/bradtraversy/dazzle-animation/dist/video/beach.mp4";
  // Using a sample video for demo purposes - replace with the school's actual welcome video
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set visible once when it enters view
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        handlePlay();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  
  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
            Experience our school's environment and culture through this short welcome video
          </motion.p>
        </div>
        
        <motion.div 
          className="relative rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            scale: isVisible ? 1 : 0.9 
          }}
          transition={{ duration: 0.8 }}
        >
          <video 
            ref={videoRef}
            className="w-full aspect-video object-cover"
            poster="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/474380329_1131024558715269_6300357879248411838_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHa0R0AI-ryaNg_4zbA6C1NIdo8yyjk4K4h2jzLKOTgrjaKPHn1pf_GGGbyaj8EUunAuLaX5qz3oweqHw7X87eG&_nc_ohc=g8KXNEktlWkQ7kNvwFIQQdV&_nc_oc=Admby_AgqITT6zGLY9JcVfK6KxZCyY-h2vhN3Bno0CgVpSTXmRx3UK2Yrx9fK-sVNmE&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=dBNFxhEa2NmdgyxaehLkAg&oh=00_AfFB_A-_VLHdpEUTUKaVXMQE48F2fGrnEGM7aV3ztsDINA&oe=68018FC1"
            preload="metadata"
            muted={isMuted}
            loop
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex justify-between items-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={handlePlay}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={handleMute}
            >
              {isMuted ? (
                <VolumeX className="h-6 w-6" />
              ) : (
                <Volume2 className="h-6 w-6" />
              )}
            </Button>
          </div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto mt-6 text-center">
          <p className="text-sm text-gray-500">
            This video showcases our school's facilities, students, and activities
          </p>
        </div>
      </div>
    </section>
  );
}
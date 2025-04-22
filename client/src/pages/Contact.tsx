import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { footerContent } from '@/data/schoolData';

export default function ContactPage() {
  // Update page title
  useEffect(() => {
    document.title = "Contact - Kiage Tumaini Boy's High School";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <>
      <div className="bg-[#556B2F] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="max-w-2xl text-lg">
              Reach out to us with any questions about admissions, programs, or to schedule a campus visit.
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="flex items-center mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#556B2F] mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#800000] mt-1 mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-800">Address</h3>
                      <p className="text-gray-600">{footerContent.contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#800000] mt-1 mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-800">Phone</h3>
                      <p className="text-gray-600">{footerContent.contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#800000] mt-1 mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-800">Email</h3>
                      <p className="text-gray-600">{footerContent.contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-[#800000] mt-1 mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-800">Office Hours</h3>
                      <p className="text-gray-600">{footerContent.contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#556B2F] mb-6">Visit Our Campus</h2>
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div className="h-80 bg-gray-200 flex items-center justify-center">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7570567159344!2d34.7698!3d-0.6772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMCLDosKwNCcwMi40IlMgMzTCsM0yJzExLjAiRQ!5e0!3m2!1sen!2sus!4v1625585321654!5m2!1sen!2sus"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        title="School location map"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700">
                        We invite you to schedule a campus tour to see our facilities and meet our staff in person.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

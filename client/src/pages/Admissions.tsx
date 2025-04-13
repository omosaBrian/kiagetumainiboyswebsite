import { useEffect } from 'react';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

export default function AdmissionsPage() {
  // Update page title
  useEffect(() => {
    document.title = "Admissions - Kiage Tumaini Boy's High School";
  }, []);

  return (
    <>
      <div className="bg-[#556B2F] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Admissions</h1>
            <p className="max-w-2xl text-lg">
              Take the first step toward a transformative educational experience at Kiage Tumaini Boy's High School.
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[#556B2F] mb-6">Admission Process</h2>
            
            <div className="space-y-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-3">Step 1: Application Submission</h3>
                  <p className="text-gray-700 mb-4">
                    Complete and submit the application form along with all required documents. You can apply online or download the form below.
                  </p>
                  <Button asChild className="bg-[#556B2F] hover:bg-[#455B1F]">
                    <a href="#" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download Application Form
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-3">Step 2: Entrance Assessment</h3>
                  <p className="text-gray-700">
                    Qualified applicants will be invited to take an entrance assessment to evaluate their academic readiness.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-3">Step 3: Interview</h3>
                  <p className="text-gray-700">
                    Selected students and their parents/guardians will be invited for an interview with school administrators.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-3">Step 4: Admission Decision</h3>
                  <p className="text-gray-700">
                    Admission decisions are based on assessment results, interview, and available space. Successful candidates will receive an offer letter.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-3xl font-serif font-bold text-[#556B2F] mb-6">Required Documents</h2>
            <Card className="mb-12">
              <CardContent className="p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-[#800000] rounded-full mr-3"></div>
                    <span>Completed application form</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-[#800000] rounded-full mr-3"></div>
                    <span>Copy of birth certificate</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-[#800000] rounded-full mr-3"></div>
                    <span>Most recent academic records/transcripts</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-[#800000] rounded-full mr-3"></div>
                    <span>Two passport-sized photographs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-[#800000] rounded-full mr-3"></div>
                    <span>Recommendation letter from previous school (if applicable)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <CallToAction />
    </>
  );
}

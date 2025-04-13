import { useEffect, useState } from 'react';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

export default function AdmissionsPage() {
  // Update page title
  useEffect(() => {
    document.title = "Admissions - Kiage Tumaini Boy's High School";
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '',
    currentSchool: '',
    gradeLevel: '',
    parentFirstName: '',
    parentLastName: '',
    relationship: '',
    email: '',
    phone: '',
    address: '',
    entryYear: '',
    howDidYouHear: '',
    additionalInfo: ''
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the data to the server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Application Submitted",
      description: "Thank you for your application. We will contact you shortly.",
    });
    
    // Reset form
    setFormData({
      studentFirstName: '',
      studentLastName: '',
      dateOfBirth: '',
      currentSchool: '',
      gradeLevel: '',
      parentFirstName: '',
      parentLastName: '',
      relationship: '',
      email: '',
      phone: '',
      address: '',
      entryYear: '',
      howDidYouHear: '',
      additionalInfo: ''
    });
  };

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
                    Complete and submit the application form along with all required documents.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-[#556B2F]">Student Information</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="studentFirstName">First Name *</Label>
                          <Input 
                            id="studentFirstName" 
                            name="studentFirstName" 
                            value={formData.studentFirstName} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="studentLastName">Last Name *</Label>
                          <Input 
                            id="studentLastName" 
                            name="studentLastName" 
                            value={formData.studentLastName} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                          <Input 
                            id="dateOfBirth" 
                            name="dateOfBirth" 
                            type="date" 
                            value={formData.dateOfBirth} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="currentSchool">Current School</Label>
                          <Input 
                            id="currentSchool" 
                            name="currentSchool" 
                            value={formData.currentSchool} 
                            onChange={handleInputChange} 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="gradeLevel">Current Grade Level *</Label>
                          <Select 
                            value={formData.gradeLevel} 
                            onValueChange={(value) => handleSelectChange('gradeLevel', value)}
                          >
                            <SelectTrigger id="gradeLevel">
                              <SelectValue placeholder="Select grade level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="form1">Form 1</SelectItem>
                              <SelectItem value="form2">Form 2</SelectItem>
                              <SelectItem value="form3">Form 3</SelectItem>
                              <SelectItem value="form4">Form 4</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <h4 className="text-lg font-semibold text-[#556B2F]">Parent/Guardian Information</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="parentFirstName">First Name *</Label>
                          <Input 
                            id="parentFirstName" 
                            name="parentFirstName" 
                            value={formData.parentFirstName} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="parentLastName">Last Name *</Label>
                          <Input 
                            id="parentLastName" 
                            name="parentLastName" 
                            value={formData.parentLastName} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="relationship">Relationship to Student *</Label>
                          <Select 
                            value={formData.relationship} 
                            onValueChange={(value) => handleSelectChange('relationship', value)}
                          >
                            <SelectTrigger id="relationship">
                              <SelectValue placeholder="Select relationship" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="parent">Parent</SelectItem>
                              <SelectItem value="guardian">Legal Guardian</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            type="tel" 
                            value={formData.phone} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="address">Home Address *</Label>
                          <Textarea 
                            id="address" 
                            name="address" 
                            rows={3} 
                            value={formData.address} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <h4 className="text-lg font-semibold text-[#556B2F]">Additional Information</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="entryYear">Desired Entry Year *</Label>
                          <Select 
                            value={formData.entryYear} 
                            onValueChange={(value) => handleSelectChange('entryYear', value)}
                          >
                            <SelectTrigger id="entryYear">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2025">2025</SelectItem>
                              <SelectItem value="2026">2026</SelectItem>
                              <SelectItem value="2027">2027</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
                          <Select 
                            value={formData.howDidYouHear} 
                            onValueChange={(value) => handleSelectChange('howDidYouHear', value)}
                          >
                            <SelectTrigger id="howDidYouHear">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="website">School Website</SelectItem>
                              <SelectItem value="socialMedia">Social Media</SelectItem>
                              <SelectItem value="currentStudent">Current Student</SelectItem>
                              <SelectItem value="alumnus">Alumnus</SelectItem>
                              <SelectItem value="newspaper">Newspaper</SelectItem>
                              <SelectItem value="event">School Event</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea 
                          id="additionalInfo" 
                          name="additionalInfo" 
                          rows={4} 
                          placeholder="Please share any additional information about the student that may be relevant to their application."
                          value={formData.additionalInfo} 
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-[#800000] hover:bg-[#660000] text-white"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Submit Application
                      </Button>
                    </div>
                  </form>
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

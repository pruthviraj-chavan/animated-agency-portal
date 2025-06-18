
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";

export function ScheduleMeetingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Meeting scheduled:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main large blob */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-64 bg-gradient-to-br from-orange-400 via-purple-500 to-pink-500 rounded-full opacity-20 animate-float blur-3xl"></div>
        
        {/* Secondary blobs */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30 animate-pulse-slow blur-2xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-25 animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-30 animate-pulse-slow blur-xl" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Small floating elements */}
        <div className="absolute top-32 left-20 w-4 h-4 bg-orange-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-500 rounded-full animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse-slow opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-purple-600 mb-4 animate-fade-in">
              CONSULTATION & STRATEGY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-scale-in">
              Schedule a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600">Meeting</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Let's discuss your project and explore how our AI-powered solutions can transform your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Call Us Card */}
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl text-white shadow-lg transform transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <Phone className="w-6 h-6 mb-3" />
                  <h3 className="font-semibold mb-2">CALL US</h3>
                  <p className="text-sm opacity-90">1 (234) 567-891</p>
                  <p className="text-sm opacity-90">1 (234) 987-654</p>
                </div>

                {/* Location Card */}
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white shadow-lg transform transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <MessageSquare className="w-6 h-6 mb-3" />
                  <h3 className="font-semibold mb-2">LOCATION</h3>
                  <p className="text-sm opacity-90">121 Rock Street, 21 Avenue</p>
                  <p className="text-sm opacity-90">New York, NY 32103-9000</p>
                </div>

                {/* Hours Card */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg transform transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '500ms' }}>
                  <Clock className="w-6 h-6 mb-3" />
                  <h3 className="font-semibold mb-2">HOURS</h3>
                  <p className="text-sm opacity-90">Mon - Fri ...... 11 am - 8 pm</p>
                  <p className="text-sm opacity-90">Sat, Sun ...... 6 am - 8 pm</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-800 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">What to Expect</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Comprehensive project analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Custom AI solution recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Timeline and budget discussion
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Next steps planning
                  </li>
                </ul>
              </div>
            </div>

            {/* Meeting Form */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border border-purple-100 dark:border-purple-800 animate-slide-in-bottom" style={{ animationDelay: '400ms' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                      <User className="w-4 h-4 mr-2" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-all focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-all focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="transition-all focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      Preferred Date
                    </Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="transition-all focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      Preferred Time
                    </Label>
                    <Input
                      id="preferredTime"
                      name="preferredTime"
                      type="time"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="transition-all focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Project Details
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background transition-all duration-200 focus-within:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Schedule Meeting
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import MainLayout from "../layouts/MainLayout";
import { Search, Briefcase, Building, User, Award, Clock, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const featuredJobs = [
    {
      id: 1,
      title: "Senior UX Designer",
      company: "TechVision Inc.",
      location: "San Francisco, CA",
      salary: "$120K - $150K",
      type: "Full-time",
      tags: ["Design", "UI/UX", "Figma"],
      posted: "2 days ago",
      logo: "/assets/images/techVision.png"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "InnovateTech Solutions",
      location: "Remote",
      salary: "$90K - $120K",
      type: "Full-time",
      tags: ["React", "Node.js", "MongoDB"],
      posted: "3 days ago",
      logo: "/assets/images/innovaTech.png"
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "GrowthBoost Media",
      location: "New York, NY",
      salary: "$80K - $100K",
      type: "Full-time",
      tags: ["Digital Marketing", "SEO", "Content"],
      posted: "1 day ago",
      logo: "/assets/images/growthBoost.png"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
<section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0">
    <div className="absolute animate-pulse top-10 left-10 w-32 h-32 rounded-full bg-yellow-300 opacity-10"></div>
    <div className="absolute animate-pulse delay-200 top-40 right-20 w-40 h-40 rounded-full bg-pink-400 opacity-10"></div>
    <div className="absolute animate-pulse delay-500 bottom-10 left-1/4 w-24 h-24 rounded-full bg-green-300 opacity-10"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
  </div>
  
  <div className="container mx-auto px-4 py-24 relative z-10">
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find Your <span className="text-yellow-300 relative">
              Dream Job
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 animate-pulse"></span>
            </span> & Build Your Career
          </h1>
        </div>
        
        <p className="text-lg text-blue-100 mb-8 max-w-lg">
          Connect with top employers, get personalized job recommendations, and track your career growth all in one platform.
        </p>
        
        <div className="relative max-w-lg bg-white rounded-xl shadow-xl p-2 flex items-center transform hover:shadow-2xl transition-all duration-300">
          <div className="flex-shrink-0 pl-2">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Job title, skills or company..."
            className="w-full px-4 py-3 rounded-xl border-none focus:outline-none text-gray-800"
          />
          <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95">
            <span className="mr-2">Search</span>
            <span className="animate-bounce inline-block">→</span>
          </button>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-full bg-blue-800 bg-opacity-30 px-3 py-1 text-sm text-blue-100 hover:bg-opacity-50 transition-all cursor-pointer">
            <Briefcase size={14} className="mr-1" /> 10,000+ Jobs
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-800 bg-opacity-30 px-3 py-1 text-sm text-blue-100 hover:bg-opacity-50 transition-all cursor-pointer">
            <Building size={14} className="mr-1" /> 1,000+ Companies
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-800 bg-opacity-30 px-3 py-1 text-sm text-blue-100 hover:bg-opacity-50 transition-all cursor-pointer">
            <User size={14} className="mr-1" /> 50,000+ Candidates
          </span>
        </div>
      </div>
      
      <div className="lg:w-1/2 lg:pl-12">
        <div className="relative transform hover:rotate-1 transition-all duration-500">
          <img src="/api/placeholder/600/400" alt="Job seekers" className="rounded-xl shadow-2xl" />
          
          {/* Floating stats cards with hover effects */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-48 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="text-green-600" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Success Rate</p>
                <p className="text-lg font-bold text-gray-800">
                  <span className="inline-block">92%</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-48 transform hover:scale-110 hover:translate-y-2 transition-all duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Average Hiring</p>
                <p className="text-lg font-bold text-gray-800">2 weeks</p>
              </div>
            </div>
          </div>
          
          {/* New floating element */}
          <div className="absolute bottom-6 right-6 bg-white p-3 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Star className="text-purple-600" size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Top Rated</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={12} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured Jobs</h2>
            <a href="/jobs" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium">
              View all jobs <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden mr-4 flex-shrink-0">
                      <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-3 flex items-center">
                      <Building size={14} className="mr-1" /> {job.location}
                    </span>
                    <span className="flex items-center">
                      <Briefcase size={14} className="mr-1" /> {job.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-gray-800">{job.salary}</span>
                    <span className="text-xs text-gray-500">{job.posted}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, index) => (
                      <span key={index} className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">Our Platform at a Glance</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="p-6 md:p-8 bg-blue-50 rounded-xl text-center transform hover:scale-105 transition-transform duration-200">
              <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Briefcase className="text-blue-600" size={28} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">10K+</h3>
              <p className="text-gray-600">Jobs Posted</p>
            </div>
            
            <div className="p-6 md:p-8 bg-green-50 rounded-xl text-center transform hover:scale-105 transition-transform duration-200">
              <div className="w-14 h-14 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <User className="text-green-600" size={28} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-1">5K+</h3>
              <p className="text-gray-600">Successful Hires</p>
            </div>
            
            <div className="p-6 md:p-8 bg-purple-50 rounded-xl text-center transform hover:scale-105 transition-transform duration-200">
              <div className="w-14 h-14 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Building className="text-purple-600" size={28} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">100+</h3>
              <p className="text-gray-600">Business Partners</p>
            </div>
            
            <div className="p-6 md:p-8 bg-yellow-50 rounded-xl text-center transform hover:scale-105 transition-transform duration-200">
              <div className="w-14 h-14 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="text-yellow-600" size={28} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-1">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
            Browse Jobs by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Technology', 'Marketing', 'Design', 'Healthcare', 'Finance', 'Education'].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Briefcase className="text-blue-600" size={20} />
                </div>
                <h3 className="font-medium text-gray-800">{category}</h3>
                <p className="text-sm text-gray-500 mt-1">120+ Jobs</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Take the Next Step in Your Career?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who found their dream jobs through our platform.
            Create your profile today and get discovered by top employers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-200">
              Find Jobs
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-200">
              Post a Job
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;
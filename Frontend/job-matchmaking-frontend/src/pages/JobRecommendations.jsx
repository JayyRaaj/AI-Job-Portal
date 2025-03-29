import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Search, MapPin, Briefcase, Star, Clock, Filter, ChevronDown } from "lucide-react";

function JobRecommendations() {
  const [expanded, setExpanded] = useState(null);
  
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "XYZ Corp",
      location: "Remote",
      match: 87,
      salary: "$90,000 - $120,000",
      posted: "2 days ago",
      description: "We're looking for a skilled Frontend Developer with experience in React, TypeScript, and responsive design. Join our team to build impactful user experiences.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "ABC Ltd",
      location: "Onsite • New York",
      match: 92,
      salary: "$110,000 - $140,000",
      posted: "Just now",
      description: "Backend Engineer needed to design and implement scalable APIs and services. You'll work with our cross-functional team to deliver robust solutions.",
      skills: ["Node.js", "MongoDB", "AWS", "GraphQL"]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Acme Solutions",
      location: "Hybrid • Boston",
      match: 95,
      salary: "$100,000 - $130,000",
      posted: "1 week ago",
      description: "Join our growing team as a Full Stack Developer. You'll work on exciting projects across the stack, from user interfaces to database optimizations.",
      skills: ["JavaScript", "React", "Python", "Django", "PostgreSQL"]
    },
    {
      id: 4,
      title: "UX/UI Designer",
      company: "Design Forward",
      location: "Remote",
      match: 81,
      salary: "$85,000 - $115,000",
      posted: "3 days ago",
      description: "Creative UX/UI Designer wanted to craft beautiful, intuitive interfaces. You'll collaborate with product and engineering teams throughout the design process.",
      skills: ["Figma", "UI Design", "User Research", "Prototyping"]
    }
  ];

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Recommended Jobs</h1>
          <p className="text-gray-500">Showing {jobs.length} jobs matching your profile</p>
        </div>

        {/* Search and filter bar */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search job titles, skills, companies..." 
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition">
                <Filter size={18} />
                <span>Filters</span>
                <ChevronDown size={16} />
              </button>
              <select className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl appearance-none pr-8 focus:outline-none">
                <option>Experience Level</option>
                <option>Entry Level</option>
                <option>Mid-Senior</option>
                <option>Senior</option>
              </select>
              <select className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl appearance-none pr-8 focus:outline-none">
                <option>Sort by: Relevance</option>
                <option>Newest</option>
                <option>Highest Salary</option>
                <option>Match Score</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job cards */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${expanded === job.id ? 'ring-2 ring-primary/30' : 'hover:shadow-md'}`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(job.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold">{job.title}</h2>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${job.match >= 90 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {job.match}% Match
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-gray-600">
                      <p className="text-sm font-medium">{job.company}</p>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{job.salary}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Clock size={14} />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {expanded === job.id && (
                <div className="border-t border-gray-100 p-6 bg-gray-50">
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition flex items-center gap-2">
                      <Briefcase size={16} />
                      Apply Now
                    </button>
                    <button className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition flex items-center gap-2">
                      <Star size={16} />
                      Save Job
                    </button>
                    <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition">
                      View Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white">
              &lt;
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default JobRecommendations;
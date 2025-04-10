import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Search, BookOpen, Clock, Star, Award, Calendar, ChevronDown, Bookmark, Play, Filter } from "lucide-react";
import react from "../assets/images/react.png";
import dsa from "../assets/images/dsa.jpg";
import ux from "../assets/images/ux.jpg";
import ml from "../assets/images/ml.jpg";
import { useEffect, useState } from "react";

function CourseRecommendations() {
  

const [courses, setCourses] = useState([]);
const [expanded, setExpanded] = useState(null);

useEffect(() => {
  const fetchCourses = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:5000/api/recommendations/courses/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    setCourses(data);
  };

  fetchCourses();
}, []);


  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Recommended Courses</h1>
          <p className="text-gray-500">Discover courses tailored to your career goals</p>
        </div>

        {/* Search and filter bar */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search for courses, skills, topics..." 
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
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl appearance-none pr-8 focus:outline-none">
                <option>All Platforms</option>
                <option>Udemy</option>
                <option>Coursera</option>
                <option>edX</option>
                <option>Udacity</option>
              </select>
            </div>
          </div>
          
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
              All Courses
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Programming
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Data Science
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Design
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Business
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Marketing
            </button>
          </div>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id}
              className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${expanded === course.id ? 'ring-2 ring-primary/30' : 'hover:shadow-md'}`}
            >
              <div className="relative">
                <img 
src={course.image_url || "https://via.placeholder.com/300"}                   alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${course.price === "Free" ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {course.price}
                  </span>
                  <span className="px-3 py-1 bg-gray-800 bg-opacity-70 text-white rounded-full text-xs font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-gray-800 bg-opacity-70 text-white rounded-full text-xs font-medium flex items-center gap-1">
                    <Star size={14} className="text-yellow-400" />
                    {course.rating} ({course.students} students)
                  </span>
                </div>
              </div>
              
              <div 
                className="p-5 cursor-pointer"
                onClick={() => toggleExpand(course.id)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{course.title}</h2>
                </div>
                
                <div className="flex items-center gap-4 text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <BookOpen size={16} />
                    <span className="text-sm">{course.platform}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(course.tags?.split(',') || []).map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {expanded !== course.id && (
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition flex items-center justify-center gap-2">
                      <Play size={16} />
                      Enroll Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition">
                      <Bookmark size={16} />
                    </button>
                  </div>
                )}
              </div>

              {expanded === course.id && (
                <div className="px-5 pb-5">
                  <div className="p-4 bg-gray-50 rounded-xl mb-4">
                    <p className="text-gray-700 text-sm">{course.description}</p>
                    <div className="mt-3 flex items-center text-xs text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {course.updated}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 mr-3">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium">{course.instructor}</p>
                      <p className="text-xs text-gray-500">Course Instructor</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition flex items-center justify-center gap-2">
                      <Play size={16} />
                      Enroll Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition flex items-center gap-2">
                      <Bookmark size={16} />
                      Save
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition">
                      Preview
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

export default CourseRecommendations;
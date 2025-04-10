import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";

import {
  Briefcase,
  CalendarDays,
  Bookmark,
  GaugeCircle,
  Sparkles,
  Building2,
} from "lucide-react";



function JobseekerDashboard() {


const [stats, setStats] = useState({
  applications: 0,
  interviews: 0,
  savedJobs: 0,
  profileComplete: "0%",
});

const [recommendedJobs, setRecommendedJobs] = useState([]);
const [interviews, setInterviews] = useState([]);

const userId = localStorage.getItem('userId');
const token = localStorage.getItem('token');

useEffect(() => {
  const fetchData = async () => {
    const headers = { Authorization: `Bearer ${token}` };

    const [appsRes, recRes, intRes] = await Promise.all([
      fetch(`http://localhost:5000/api/applications/user/${userId}`, { headers }),
      fetch(`http://localhost:5000/api/recommendations/jobs/${userId}`, { headers }),
      fetch(`http://localhost:5000/api/reminders/${userId}`, { headers }),
    ]);

    const applications = await appsRes.json();
    const recommendations = await recRes.json();
    const reminders = await intRes.json();

    setStats({
      applications: applications.length,
      interviews: reminders.length,
      savedJobs: 5, // placeholder
      profileComplete: "80%" // placeholder
    });

    setRecommendedJobs(recommendations);
    setInterviews(reminders);
  };

  fetchData();
}, []);



  return (
    <MainLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Welcome, Jobseeker
        </h1>
        <p className="text-lg text-gray-500 mt-1">Here's your job hunt overview.</p>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <StatCard icon={<Briefcase className="text-indigo-600 w-6 h-6" />} label="Applications" value="12" />
        <StatCard icon={<CalendarDays className="text-green-600 w-6 h-6" />} label="Scheduled Interviews" value="3" />
        <StatCard icon={<Bookmark className="text-yellow-600 w-6 h-6" />} label="Saved Jobs" value="5" />
        <StatCard icon={<GaugeCircle className="text-purple-600 w-6 h-6" />} label="Profile Complete" value="80%" />
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <h2 className="text-2xl font-semibold text-gray-800">Recommended Jobs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <JobCard title="Frontend Developer" company="ABC Corp" />
          <JobCard title="React Native Engineer" company="XYZ Ltd" />
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <CalendarDays className="w-5 h-5 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Upcoming Interviews</h2>
        </div>
        <ul className="space-y-4">
          <InterviewItem title="Software Engineer" company="ABC Corp" date="5 Apr" time="10:00 AM" />
          <InterviewItem title="Frontend Developer" company="XYZ Ltd" date="8 Apr" time="2:00 PM" />
        </ul>
      </section>
    </MainLayout>
  );
}

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition text-center">
    <div className="flex justify-center mb-3">{icon}</div>
    <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

const JobCard = ({ title, company }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 flex items-center gap-1">
      <Building2 className="w-4 h-4" />
      {company}
    </p>
    <button className="mt-4 inline-block text-sm text-indigo-600 font-medium hover:underline">
      View Details
    </button>
  </div>
);

const InterviewItem = ({ title, company, date, time }) => (
  <li className="bg-white p-5 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition">
    <p className="text-gray-800 font-semibold">
      {title} <span className="text-gray-500 font-normal">@ {company}</span>
    </p>
    <p className="text-sm text-gray-500">{date}, {time}</p>
  </li>
);

export default JobseekerDashboard;

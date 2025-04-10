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

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const headers = { Authorization: `Bearer ${token}` };

      const [appsRes, recRes, intRes] = await Promise.all([
        fetch(`http://localhost:5000/api/applications/user/${userId}`, {
          headers,
        }),
        fetch(`http://localhost:5000/api/recommendations/jobs/`, {
          headers,
        }),
        fetch(`http://localhost:5000/api/reminders/`, { headers }),
      ]);

      const applications = await appsRes.json();
      const recommendations = await recRes.json();
      const reminders = await intRes.json();

      setStats({
        applications: applications.length,
        interviews: reminders.length,
        savedJobs: 5, // placeholder
        profileComplete: "80%", // placeholder
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
        <p className="text-lg text-gray-500 mt-1">
          Here's your job hunt overview.
        </p>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <StatCard
          icon={<Briefcase className="text-indigo-600 w-6 h-6" />}
          label="Applications"
          value={stats.applications}
        />
        <StatCard
          icon={<CalendarDays className="text-green-600 w-6 h-6" />}
          label="Scheduled Interviews"
          value={stats.interviews}
        />
        <StatCard
          icon={<Bookmark className="text-yellow-600 w-6 h-6" />}
          label="Saved Jobs"
          value={stats.savedJobs}
        />
        <StatCard
          icon={<GaugeCircle className="text-purple-600 w-6 h-6" />}
          label="Profile Complete"
          value={stats.profileComplete}
        />
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Recommended Jobs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendedJobs.map((job, i) => (
            <JobCard
              key={i}
              title={job.title}
              company={job.location || "N/A"}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <CalendarDays className="w-5 h-5 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Upcoming Interviews
          </h2>
        </div>
        <ul className="space-y-4">
          {interviews.map((item, i) => (
            <InterviewItem
              key={i}
              title={item.title}
              company={item.platform || "N/A"}
              date={new Date(item.interview_date).toLocaleDateString()}
              time={new Date(item.interview_date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            />
          ))}
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
    <p className="text-sm text-gray-500">
      {date}, {time}
    </p>
  </li>
);

export default JobseekerDashboard;

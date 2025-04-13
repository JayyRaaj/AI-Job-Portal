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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [applied, setApplied] = useState(false);

  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const headers = { Authorization: `Bearer ${token}` };

        // Using the exact route from applicationRoutes.js
        const appsRes = await fetch(
          `http://localhost:5000/api/applications/user/${userId}`,
          {
            headers,
          }
        );

        if (!appsRes.ok) {
          throw new Error(`Applications request failed: ${appsRes.status}`);
        }

        const applications = await appsRes.json();

        const recRes = await fetch(
          `http://localhost:5000/api/recommendations/jobs`,
          { headers }
        );
        if (!recRes.ok)
          throw new Error(`Recommendations failed: ${recRes.status}`);
        const recommendations = await recRes.json();
        setRecommendedJobs(recommendations);

        // For interviews, filter applications with interview status
        const scheduledInterviews = applications.filter(
          (app) =>
            app.status === "interview_scheduled" ||
            app.status === "interview_accepted"
        );

        setStats({
          applications: applications.length,
          interviews: scheduledInterviews.length,
          savedJobs: 5, // placeholder
          profileComplete: "80%", // placeholder
        });

        const reminderRes = await fetch(
          `http://localhost:5000/api/interviewreminders/user/${userId}`,
          {
            headers,
          }
        );
        if (!reminderRes.ok)
          throw new Error(`Interview reminders failed: ${reminderRes.status}`);
        const reminders = await reminderRes.json();
        setInterviews(reminders);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId && token) {
      fetchData();
    }
  }, [userId, token]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-96">
          <p className="text-gray-500">Loading your dashboard...</p>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex flex-col justify-center items-center h-96">
          <p className="text-red-500 mb-4">Failed to load dashboard data</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </MainLayout>
    );
  }

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
          value={interviews.length}
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
          {recommendedJobs.length > 0 ? (
            recommendedJobs.map((job, i) => (
              <JobCard
                key={i}
                title={job.title}
                company={job.reason}
                onClick={() => setSelectedJob(job)}
              />
            ))
          ) : (
            <p className="text-gray-500">No recommended jobs available.</p>
          )}
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
          {interviews.length > 0 ? (
            interviews.map((item, i) => (
              <InterviewItem
                key={i}
                title={item.title || "Interview"}
                company={item.company_name || "Company"}
                date={new Date(item.interview_date).toLocaleDateString()}
                time={new Date(item.interview_date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                onClick={() => setSelectedInterview(item)}
              />
            ))
          ) : (
            <p className="text-gray-500">No upcoming interviews.</p>
          )}
        </ul>
      </section>
      {selectedJob && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-200 relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              {selectedJob.title}
            </h2>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Reason:</span>{" "}
              {selectedJob.reason}
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Location:</span>{" "}
              {selectedJob.location}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Recommended on{" "}
              {new Date(selectedJob.recommended_at).toLocaleDateString()}
            </p>
            <button
  onClick={() => {
    setSelectedJob(null);
    window.location.href = "/job-recommendations";
  }}
  className={`mt-6 w-full py-2 px-4 rounded-xl font-semibold text-white ${
    applied ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  {applied ? "Apply" : "Apply"}
</button>

          </div>
        </div>
      )}

      {selectedInterview && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-200 relative">
            <button
              onClick={() => setSelectedInterview(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Interview Details
            </h2>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Platform:</span>{" "}
              {selectedInterview.platform}
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Meeting Link:</span>{" "}
              <a
                href={selectedInterview.meeting_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline"
              >
                {selectedInterview.meeting_link}
              </a>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Date:</span>{" "}
              {new Date(selectedInterview.interview_date).toLocaleDateString()}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Time:</span>{" "}
              {new Date(selectedInterview.interview_date).toLocaleTimeString(
                [],
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </p>
          </div>
        </div>
      )}
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

const JobCard = ({ title, company, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-white p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition"
  >
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 flex items-center gap-1">
      <Building2 className="w-4 h-4" />
      {company}
    </p>
  </div>
);

const InterviewItem = ({ title, company, date, time, onClick }) => (
  <li
    onClick={onClick}
    className="cursor-pointer bg-white p-5 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition"
  >
    <p className="text-gray-800 font-semibold">
      {title} <span className="text-gray-500 font-normal">@ {company}</span>
    </p>
    <p className="text-sm text-gray-500">
      {date}, {time}
    </p>
  </li>
);

export default JobseekerDashboard;

import MainLayout from "../layouts/MainLayout";
import {
  Briefcase,
  Users,
  CalendarCheck2,
  FileText,
  ClipboardList,
  UserCheck,
} from "lucide-react";

function EmployerDashboard() {
  return (
    <MainLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          👋 Welcome, Employer
        </h1>
        <p className="text-lg text-gray-500 mt-1">Manage your postings, candidates, and interviews all in one place.</p>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <StatCard icon={<Briefcase className="text-indigo-600 w-6 h-6" />} label="Active Postings" value="8" />
        <StatCard icon={<Users className="text-blue-600 w-6 h-6" />} label="Applications Received" value="27" />
        <StatCard icon={<CalendarCheck2 className="text-green-600 w-6 h-6" />} label="Scheduled Interviews" value="5" />
        <StatCard icon={<FileText className="text-yellow-600 w-6 h-6" />} label="Drafts" value="2" />
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <ClipboardList className="w-5 h-5 text-indigo-500" />
          <h2 className="text-2xl font-semibold text-gray-800">Recent Applications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ApplicationCard name="John Doe" position="Frontend Developer" />
          <ApplicationCard name="Jane Smith" position="UI/UX Designer" />
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <UserCheck className="w-5 h-5 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Interview Schedule</h2>
        </div>
        <ul className="space-y-4">
          <InterviewItem name="John Doe" date="3 Apr" time="11:00 AM" />
          <InterviewItem name="Jane Smith" date="6 Apr" time="3:00 PM" />
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

const ApplicationCard = ({ name, position }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
    <p className="text-sm text-gray-500">{position}</p>
    <button className="mt-4 inline-block text-sm text-indigo-600 font-medium hover:underline">
      View Application
    </button>
  </div>
);

const InterviewItem = ({ name, date, time }) => (
  <li className="bg-white p-5 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition">
    <p className="text-gray-800 font-semibold">{name}</p>
    <p className="text-sm text-gray-500">{date}, {time}</p>
  </li>
);

export default EmployerDashboard;

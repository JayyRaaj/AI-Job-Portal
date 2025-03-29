import MainLayout from "../layouts/MainLayout";
import { ListChecks, CalendarDays, Building2, ChevronDown } from "lucide-react";

function ApplicationTracking() {
  return (
    <MainLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-indigo-500" />
          Application Tracker
        </h1>
        <p className="text-lg text-gray-500 mt-1">Track the status of your applications in real time.</p>
      </div>

      <div className="mb-8 flex gap-4">
        <div className="relative">
          <select className="appearance-none p-3 pl-4 pr-10 border border-gray-300 rounded-xl text-sm text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none">
            <option>All Statuses</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offered</option>
            <option>Rejected</option>
          </select>
          <ChevronDown className="w-4 h-4 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-5">
        <AppCard
          title="Frontend Developer"
          company="ABC Corp"
          applied="Mar 10"
          status="Interview Scheduled"
          statusColor="bg-yellow-100 text-yellow-700"
          detail="Interview: Apr 2, 10:00 AM • Zoom"
        />
        <AppCard
          title="Backend Engineer"
          company="XYZ Ltd"
          applied="Mar 5"
          status="Offered"
          statusColor="bg-green-100 text-green-700"
          detail="Offer received on Mar 25"
        />
      </div>
    </MainLayout>
  );
}

const AppCard = ({ title, company, applied, status, statusColor, detail }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition">
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
          <Building2 className="w-4 h-4" />
          {company} • Applied on {applied}
        </p>
      </div>
      <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor}`}>
        {status}
      </span>
    </div>
    <p className="text-sm text-gray-500 mt-4 flex items-center gap-1">
      <CalendarDays className="w-4 h-4" />
      {detail}
    </p>
  </div>
);

export default ApplicationTracking;

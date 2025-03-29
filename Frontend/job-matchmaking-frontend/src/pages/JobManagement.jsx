import MainLayout from "../layouts/MainLayout";
import { Briefcase, PlusCircle, Edit, Trash2 } from "lucide-react";

function JobManagement() {
  const jobs = [
    {
      title: "React Developer",
      applicants: 5,
      posted: "Mar 22",
    },
    {
      title: "Node.js Backend Engineer",
      applicants: 3,
      posted: "Mar 19",
    },
  ];

  return (
    <MainLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2 ml-10">
          <Briefcase className="w-8 h-8 text-blue-500" />
          Job Posting & Management
        </h1>
        <p className="text-lg text-gray-500 mt-2 ml-10">Manage your open roles and find top talent faster.</p>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <PlusCircle className="w-5 h-5 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Create New Job</h2>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
          <input type="text" placeholder="Job Title" className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="Location" className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="Salary Range" className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
          <select className="p-4 border border-gray-200 rounded-xl text-gray-500 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
          <textarea
            placeholder="Job Description"
            className="col-span-2 p-4 border border-gray-200 rounded-xl h-32 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          />
          <div className="col-span-2 text-right">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              Post Job
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Active Postings</h2>
        <div className="space-y-5">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.applicants} Applicants • Posted on {job.posted}</p>
              </div>
              <div className="flex gap-3">
                <button className="inline-flex items-center gap-1 text-sm px-4 py-2 rounded-xl border text-blue-600 hover:bg-blue-50 transition">
                  <Edit className="w-4 h-4" /> Edit
                </button>
                <button className="inline-flex items-center gap-1 text-sm px-4 py-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition">
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export default JobManagement;

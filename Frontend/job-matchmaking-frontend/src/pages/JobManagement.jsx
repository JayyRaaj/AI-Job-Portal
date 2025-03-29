import MainLayout from "../layouts/MainLayout";

function JobManagement() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Job Posting & Management</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Create New Job</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow-card">
          <input type="text" placeholder="Job Title" className="p-3 border rounded-xl" />
          <input type="text" placeholder="Location" className="p-3 border rounded-xl" />
          <input type="text" placeholder="Salary Range" className="p-3 border rounded-xl" />
          <select className="p-3 border rounded-xl">
            <option>Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
          <textarea
            placeholder="Job Description"
            className="col-span-2 p-3 border rounded-xl h-32"
          />
          <div className="col-span-2 text-right">
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded-xl">
              Post Job
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Active Postings</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl shadow-card flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">React Developer</h3>
              <p className="text-sm text-gray-600">5 Applicants • Posted on Mar 22</p>
            </div>
            <div className="flex gap-2">
              <button className="text-sm px-4 py-2 rounded-xl border text-primary">Edit</button>
              <button className="text-sm px-4 py-2 rounded-xl bg-red-100 text-red-600">Delete</button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-card flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Node.js Backend Engineer</h3>
              <p className="text-sm text-gray-600">3 Applicants • Posted on Mar 19</p>
            </div>
            <div className="flex gap-2">
              <button className="text-sm px-4 py-2 rounded-xl border text-primary">Edit</button>
              <button className="text-sm px-4 py-2 rounded-xl bg-red-100 text-red-600">Delete</button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default JobManagement;

import MainLayout from "../layouts/MainLayout";

function JobRecommendations() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Recommended Jobs</h1>

      <div className="mb-6 flex flex-wrap gap-4">
        <select className="p-3 border rounded-xl">
          <option>Sort by</option>
          <option>Most Relevant</option>
          <option>Newest</option>
          <option>Highest Salary</option>
        </select>
        <select className="p-3 border rounded-xl">
          <option>Location</option>
          <option>Remote</option>
          <option>Onsite</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-card">
          <h2 className="text-xl font-semibold">Frontend Developer</h2>
          <p className="text-gray-600 text-sm mb-2">XYZ Corp • Remote</p>
          <p className="text-sm text-gray-500 mb-4">Match: 87%</p>
          <div className="flex justify-between">
            <button className="text-sm px-4 py-2 rounded-xl bg-primary text-white">
              Apply Now
            </button>
            <button className="text-sm px-4 py-2 rounded-xl border text-primary">
              Save
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-card">
          <h2 className="text-xl font-semibold">Backend Engineer</h2>
          <p className="text-gray-600 text-sm mb-2">ABC Ltd • Onsite</p>
          <p className="text-sm text-gray-500 mb-4">Match: 92%</p>
          <div className="flex justify-between">
            <button className="text-sm px-4 py-2 rounded-xl bg-primary text-white">
              Apply Now
            </button>
            <button className="text-sm px-4 py-2 rounded-xl border text-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default JobRecommendations;

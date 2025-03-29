import MainLayout from "../layouts/MainLayout";

function CandidateScreening() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Candidate Screening</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-5 rounded-2xl shadow-card">
          <h2 className="text-xl font-semibold mb-2">John Doe</h2>
          <p className="text-sm text-gray-600 mb-1">Applied: Frontend Developer</p>
          <p className="text-sm text-gray-500 mb-4">Match Score: 88%</p>
          <div className="flex justify-between text-sm">
            <button className="px-4 py-2 bg-primary text-white rounded-xl">Schedule Interview</button>
            <button className="px-4 py-2 border rounded-xl text-primary">View Resume</button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-card">
          <h2 className="text-xl font-semibold mb-2">Jane Smith</h2>
          <p className="text-sm text-gray-600 mb-1">Applied: UI/UX Designer</p>
          <p className="text-sm text-gray-500 mb-4">Match Score: 91%</p>
          <div className="flex justify-between text-sm">
            <button className="px-4 py-2 bg-primary text-white rounded-xl">Schedule Interview</button>
            <button className="px-4 py-2 border rounded-xl text-primary">View Resume</button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Candidate Notes & Rating</h2>
        <div className="bg-white p-6 rounded-2xl shadow-card space-y-4">
          <textarea
            placeholder="Write your notes about the candidate..."
            className="w-full p-3 border rounded-xl h-28"
          />
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Rating:</label>
            <select className="p-2 border rounded-xl">
              <option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option>
              <option> 5</option>
            </select>
            <button className="ml-auto px-4 py-2 bg-primary text-white rounded-xl">Save Feedback</button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default CandidateScreening;

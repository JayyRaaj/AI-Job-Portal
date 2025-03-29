import MainLayout from "../layouts/MainLayout";

function CourseRecommendations() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Recommended Courses</h1>

      <div className="mb-6 flex flex-wrap gap-4">
        <select className="p-3 border rounded-xl">
          <option>Sort by</option>
          <option>Relevance</option>
          <option>Rating</option>
          <option>Duration</option>
        </select>
        <select className="p-3 border rounded-xl">
          <option>Filter by</option>
          <option>Free</option>
          <option>Paid</option>
          <option>Short-term</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-card">
          <h2 className="text-xl font-semibold">React for Beginners</h2>
          <p className="text-gray-600 text-sm mb-2">Udemy • 12 hours</p>
          <p className="text-sm text-gray-500 mb-4">Rating: ⭐ 4.7</p>
          <div className="flex justify-between">
            <button className="text-sm px-4 py-2 rounded-xl bg-primary text-white">
              Enroll
            </button>
            <button className="text-sm px-4 py-2 rounded-xl border text-primary">
              Save
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-card">
          <h2 className="text-xl font-semibold">Data Structures in Python</h2>
          <p className="text-gray-600 text-sm mb-2">Coursera • 8 hours</p>
          <p className="text-sm text-gray-500 mb-4">Rating: ⭐ 4.6</p>
          <div className="flex justify-between">
            <button className="text-sm px-4 py-2 rounded-xl bg-primary text-white">
              Enroll
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

export default CourseRecommendations;

import MainLayout from "../layouts/MainLayout";

function JobseekerDashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Welcome, Jobseeker</h1>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">12</h2>
          <p className="text-gray-600">Applications</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">3</h2>
          <p className="text-gray-600">Scheduled Interviews</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">5</h2>
          <p className="text-gray-600">Saved Jobs</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">80%</h2>
          <p className="text-gray-600">Profile Complete</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Recommended Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl shadow-card">Job Card 1</div>
          <div className="p-4 bg-white rounded-xl shadow-card">Job Card 2</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-xl shadow-card">
            Software Engineer @ ABC Corp - 5 Apr, 10:00 AM
          </li>
          <li className="bg-white p-4 rounded-xl shadow-card">
            Frontend Developer @ XYZ Ltd - 8 Apr, 2:00 PM
          </li>
        </ul>
      </section>
    </MainLayout>
  );
}

export default JobseekerDashboard;

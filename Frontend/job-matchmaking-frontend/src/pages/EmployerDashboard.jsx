import MainLayout from "../layouts/MainLayout";

function EmployerDashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Welcome, Employer</h1>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">8</h2>
          <p className="text-gray-600">Active Postings</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">27</h2>
          <p className="text-gray-600">Applications Received</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">5</h2>
          <p className="text-gray-600">Scheduled Interviews</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">2</h2>
          <p className="text-gray-600">Drafts</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl shadow-card">John Doe - Frontend Developer</div>
          <div className="p-4 bg-white rounded-xl shadow-card">Jane Smith - UI/UX Designer</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Interview Schedule</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-xl shadow-card">
            John Doe - 3 Apr, 11:00 AM
          </li>
          <li className="bg-white p-4 rounded-xl shadow-card">
            Jane Smith - 6 Apr, 3:00 PM
          </li>
        </ul>
      </section>
    </MainLayout>
  );
}

export default EmployerDashboard;

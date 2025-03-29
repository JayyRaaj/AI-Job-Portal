import MainLayout from "../layouts/MainLayout";

function AdminDashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">120</h2>
          <p className="text-gray-600">Total Users</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">45</h2>
          <p className="text-gray-600">Employers</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">75</h2>
          <p className="text-gray-600">Jobseekers</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-card text-center">
          <h2 className="text-2xl font-bold text-primary">8</h2>
          <p className="text-gray-600">Reports Filed</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">User Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl shadow-card">Manage Jobseekers</div>
          <div className="p-4 bg-white rounded-xl shadow-card">Manage Employers</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">System Status</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-xl shadow-card">Database: Online</li>
          <li className="bg-white p-4 rounded-xl shadow-card">API Response: Healthy</li>
          <li className="bg-white p-4 rounded-xl shadow-card">Moderation Queue: 2 pending</li>
        </ul>
      </section>
    </MainLayout>
  );
}

export default AdminDashboard;

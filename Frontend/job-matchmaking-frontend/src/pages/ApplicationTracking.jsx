import MainLayout from "../layouts/MainLayout";

function ApplicationTracking() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Application Tracker</h1>

      <div className="mb-6 flex gap-4">
        <select className="p-3 border rounded-xl">
          <option>All Statuses</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offered</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-5 rounded-2xl shadow-card">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Frontend Developer</h2>
              <p className="text-gray-600 text-sm">ABC Corp • Applied on Mar 10</p>
            </div>
            <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
              Interview Scheduled
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Interview: Apr 2, 10:00 AM • Zoom
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-card">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Backend Engineer</h2>
              <p className="text-gray-600 text-sm">XYZ Ltd • Applied on Mar 5</p>
            </div>
            <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-700">
              Offered
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-3">Offer received on Mar 25</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default ApplicationTracking;

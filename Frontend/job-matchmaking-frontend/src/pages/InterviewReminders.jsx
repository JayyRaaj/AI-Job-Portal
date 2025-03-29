import MainLayout from "../layouts/MainLayout";

function InterviewReminders() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Interview Reminders</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-card">
          <h2 className="text-xl font-semibold mb-1">UI Designer Interview</h2>
          <p className="text-sm text-gray-600 mb-2">ABC Corp • Apr 5, 2:00 PM</p>
          <ul className="list-disc list-inside text-sm text-gray-500 mb-4">
            <li>Check audio/video setup</li>
            <li>Prepare portfolio</li>
            <li>Review company background</li>
          </ul>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Zoom Link</span>
            <a href="#" className="text-primary">Join</a>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-card">
          <h2 className="text-xl font-semibold mb-1">Fullstack Dev Interview</h2>
          <p className="text-sm text-gray-600 mb-2">XYZ Ltd • Apr 7, 11:00 AM</p>
          <ul className="list-disc list-inside text-sm text-gray-500 mb-4">
            <li>Practice coding questions</li>
            <li>Understand job requirements</li>
            <li>Dress professionally</li>
          </ul>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Google Meet</span>
            <a href="#" className="text-primary">Join</a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default InterviewReminders;

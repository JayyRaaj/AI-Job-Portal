import MainLayout from "../layouts/MainLayout";

function Profile() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="bg-white p-6 rounded-2xl shadow-card mb-6">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="p-3 border rounded-xl" />
          <input type="email" placeholder="Email" className="p-3 border rounded-xl" />
          <input type="text" placeholder="Phone" className="p-3 border rounded-xl" />
          <input type="text" placeholder="Location" className="p-3 border rounded-xl" />
        </form>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-card mb-6">
        <h2 className="text-xl font-semibold mb-4">Experience & Skills</h2>
        <textarea
          placeholder="Describe your experience and skills..."
          className="w-full h-32 p-3 border rounded-xl"
        />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-card mb-6">
        <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            Show my profile in search results
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            Allow recruiters to contact me
          </label>
        </div>
      </div>

      <div className="text-right">
        <button className="bg-primary text-white px-6 py-2 rounded-xl">Save Changes</button>
      </div>
    </MainLayout>
  );
}

export default Profile;

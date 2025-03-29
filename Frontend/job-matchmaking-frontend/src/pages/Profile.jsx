import MainLayout from "../layouts/MainLayout";
import { UserCog, Settings2, ShieldCheck, Save } from "lucide-react";

function Profile() {
  return (
    <MainLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
          <UserCog className="w-7 h-7 text-indigo-500" />
          My Profile
        </h1>
        <p className="text-lg text-gray-500 mt-2">Manage your personal info, preferences, and visibility settings.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Settings2 className="w-5 h-5 text-blue-500" />
          Basic Information
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input type="text" placeholder="Full Name" className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          <input type="email" placeholder="Email" className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          <input type="text" placeholder="Phone" className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          <input type="text" placeholder="Location" className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
        </form>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience & Skills</h2>
        <textarea
          placeholder="Describe your experience and skills..."
          className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
        />
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-green-600" />
          Privacy Settings
        </h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3 text-sm text-gray-700">
            <input type="checkbox" className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            Show my profile in search results
          </label>
          <label className="flex items-center gap-3 text-sm text-gray-700">
            <input type="checkbox" className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            Allow recruiters to contact me
          </label>
        </div>
      </div>

      <div className="text-right">
        <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
    </MainLayout>
  );
}

export default Profile;

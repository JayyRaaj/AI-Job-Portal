import MainLayout from "../layouts/MainLayout";
import { UserCog, Settings2, ShieldCheck, Save } from "lucide-react";
import { useEffect, useState } from "react";

function Profile() {
  const userId = localStorage.getItem("userId");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    skills: "",
    certifications: "",
    languages: "",
    linkedin: "",
    github: "",
    bio: "",
    showInSearch: false,
    allowRecruiters: false,
  });

  const fetchProfile = async () => {
    const res = await fetch(`http://localhost:5000/api/profiles/${userId}`);
    if (res.ok) {
      const data = await res.json();
      setProfile({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        address: data.address || "",
        education: data.education || "",
        experience: data.experience || "",
        skills: data.skills || "",
        certifications: data.certifications || "",
        languages: data.languages || "",
        linkedin: data.linkedin || "",
        github: data.github || "",
        bio: data.bio || "",
        showInSearch: !!data.show_in_search,
        allowRecruiters: !!data.allow_recruiters,
      });
    }
  };

  const saveProfile = async () => {
    const res = await fetch(`http://localhost:5000/api/profiles/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });
    if (res.ok) alert("Profile saved");
    else alert("Save failed");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <MainLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
          <UserCog className="w-7 h-7 text-indigo-500" />
          My Profile
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          Manage your personal info, preferences, and visibility settings.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Settings2 className="w-5 h-5 text-blue-500" />
          Basic Information
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          
          <input
            type="text"
            placeholder="Phone"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            placeholder="Address"
            value={profile.address}
            onChange={(e) =>
              setProfile({ ...profile, address: e.target.value })
            }
            className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            placeholder="Education"
            value={profile.education}
            onChange={(e) =>
              setProfile({ ...profile, education: e.target.value })
            }
            className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            placeholder="Skills (comma-separated)"
            value={profile.skills}
            onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
            className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            placeholder="Certifications"
            value={profile.certifications}
            onChange={(e) =>
              setProfile({ ...profile, certifications: e.target.value })
            }
            className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            placeholder="Languages"
            value={profile.languages}
            onChange={(e) =>
              setProfile({ ...profile, languages: e.target.value })
            }
            className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            placeholder="LinkedIn URL"
            value={profile.linkedin}
            onChange={(e) =>
              setProfile({ ...profile, linkedin: e.target.value })
            }
            className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            placeholder="GitHub URL"
            value={profile.github}
            onChange={(e) => setProfile({ ...profile, github: e.target.value })}
            className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </form>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bio</h2>
          <textarea
            placeholder="Write something about yourself..."
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          />
        </div>
      </div>

      

    
     

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-green-600" />
          Privacy Settings
        </h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            Show my profile in search results
          </label>
          <label className="flex items-center gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            Allow recruiters to contact me
          </label>
        </div>
      </div>

      <div className="text-right">
        <button
          onClick={saveProfile}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
    </MainLayout>
  );
}

export default Profile;

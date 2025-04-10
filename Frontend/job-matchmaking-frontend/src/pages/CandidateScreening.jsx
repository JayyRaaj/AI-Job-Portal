import MainLayout from "../layouts/MainLayout";
import { UserCircle2, ClipboardList, Star, FileText, CalendarCheck2 } from "lucide-react";
import { useEffect, useState } from "react";

function CandidateScreening() {

const [candidates, setCandidates] = useState([]);

useEffect(() => {
  const employerId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("token");

  const fetchScreenings = async () => {
    const res = await fetch(`http://localhost:5000/api/screenings/employer/${employerId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setCandidates(data);
  };

  fetchScreenings();
}, []);


  return (
    <MainLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
          <ClipboardList className="w-7 h-7 text-indigo-500" />
          Candidate Screening
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          Review, rate, and manage applicants efficiently.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {candidates.map((candidate, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              <UserCircle2 className="w-10 h-10 text-indigo-500" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {candidate.name}
                </h2>
                <p className="text-sm text-gray-500">Applied:  {candidate.position || "Position"}</p>
              </div>
            </div>
            <p className="text-sm font-medium text-green-600 mb-4">
              Match Score: {candidate.score}%
            </p>
            <div className="flex justify-between mt-4">
              <button className="inline-flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition">
                <CalendarCheck2 className="w-4 h-4" />
                Schedule Interview
              </button>
              <button className="inline-flex items-center gap-1 px-4 py-2 border text-indigo-600 text-sm font-semibold rounded-xl hover:bg-indigo-50 transition">
              <a
  href={candidate.resume_url}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-1 px-4 py-2 border text-indigo-600 text-sm font-semibold rounded-xl hover:bg-indigo-50 transition"
>
  <FileText className="w-4 h-4" />
  View Resume
</a>

              </button>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          Candidate Notes & Rating
        </h2>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg">
          <textarea
            placeholder="Write your notes about the candidate..."
            className="w-full p-4 border border-gray-200 rounded-xl h-28 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          />
          <div className="flex items-center gap-3 mt-4">
            <label className="text-sm font-medium text-gray-700">Rating:</label>
            <select className="p-2 border border-gray-200 rounded-xl text-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button className="ml-auto px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition">
              Save Feedback
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default CandidateScreening;

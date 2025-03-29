import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

function ResumeUpload() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Upload Resume</h1>

      <div className="bg-white p-6 rounded-2xl shadow-card text-center">
        <label
          htmlFor="resume"
          className="block border-2 border-dashed border-primary rounded-xl p-12 cursor-pointer hover:bg-primary/10"
        >
          <p className="text-lg text-gray-600 mb-2">
            Drag & drop your resume here, or click to browse
          </p>
          <p className="text-sm text-gray-400">PDF, DOCX only — Max 5MB</p>
        </label>
        <input
          type="file"
          id="resume"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        {fileName && (
          <div className="mt-4 text-green-600 font-medium">
            Uploaded: {fileName}
          </div>
        )}

        <button className="mt-6 bg-primary text-white px-6 py-2 rounded-xl">
          Save Resume
        </button>
      </div>
    </MainLayout>
  );
}

export default ResumeUpload;

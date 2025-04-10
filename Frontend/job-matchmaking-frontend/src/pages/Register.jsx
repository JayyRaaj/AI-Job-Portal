import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Register() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role: userType })
      });
      const data = await res.json();
      if (res.ok) alert('Registered');
      else alert(data.error);
    } catch (err) {
      alert('Registration failed');
    }
  };
  

  return (
    <MainLayout>
      <div className="max-w-lg mx-auto mt-16 bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 px-8 text-center">
          <h2 className="text-3xl font-semibold">Create Your Account</h2>
          <p className="text-sm mt-1">Join the right side of talent</p>
        </div>

        <div className="px-8 py-10">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-lg font-medium text-gray-800">I am a...</div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => setUserType("jobseeker")}
                  className={`p-4 rounded-xl border transition-all ${
                    userType === "jobseeker"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-50 text-gray-700 hover:border-blue-400"
                  }`}
                >
                  Jobseeker
                </button>
                <button
                  onClick={() => setUserType("employer")}
                  className={`p-4 rounded-xl border transition-all ${
                    userType === "employer"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-50 text-gray-700 hover:border-blue-400"
                  }`}
                >
                  Employer
                </button>
                <button
                  onClick={() => setUserType("admin")}
                  className={`p-4 rounded-xl border transition-all ${
                    userType === "admin"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-50 text-gray-700 hover:border-blue-400"
                  }`}
                >
                  Admin
                </button>
              </div>
              <button
                onClick={handleNext}
                disabled={!userType}
                className={`w-full py-3 rounded-xl text-white font-medium transition ${
                  userType ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <form className="space-y-5" onSubmit={handleSubmit}>
            <input
    type="text"
    name="name"
    placeholder="Full Name"
    value={formData.name}
    onChange={handleChange}
    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="password"
    name="password"
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4" />
                I agree to the <a href="#" className="text-blue-600 underline">Terms</a> & <a href="#" className="text-blue-600 underline">Privacy</a>
              </div>
              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-blue-600 hover:underline"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  Register
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;

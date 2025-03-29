import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Register() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-card">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>

        {step === 1 && (
          <div className="space-y-4">
            <label className="block font-medium">Select Account Type</label>
            <div className="flex gap-4">
              <button
                onClick={() => setUserType("jobseeker")}
                className={`flex-1 p-3 rounded-xl border ${
                  userType === "jobseeker" ? "bg-primary text-white" : "bg-gray-100"
                }`}
              >
                Jobseeker
              </button>
              <button
                onClick={() => setUserType("employer")}
                className={`flex-1 p-3 rounded-xl border ${
                  userType === "employer" ? "bg-primary text-white" : "bg-gray-100"
                }`}
              >
                Employer
              </button>
            </div>
            <button
              onClick={handleNext}
              disabled={!userType}
              className="w-full mt-6 bg-primary text-white py-2 rounded-xl"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-xl"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-xl"
            />
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-600">
                I agree to the Terms & Privacy Policy
              </span>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                type="button"
                className="text-sm text-primary"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-xl"
              >
                Register
              </button>
            </div>
          </form>
        )}
      </div>
    </MainLayout>
  );
}

export default Register;

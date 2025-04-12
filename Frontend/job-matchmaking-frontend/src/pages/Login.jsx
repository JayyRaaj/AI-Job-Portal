import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role");

    if (token) {
      if (role === "jobseeker") navigate("/dashboard/jobseeker");
      else if (role === "employer") navigate("/dashboard/employer");
      else if (role === "admin") navigate("/dashboard/admin");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("userId", data.user.id);
        sessionStorage.setItem("role", data.user.role);

        if (data.user.role === "jobseeker") {
          navigate("/dashboard/jobseeker");
        } else if (data.user.role === "employer") {
          navigate("/dashboard/employer");
        } else if (data.user.role === "admin") {
          navigate("/dashboard/admin");
        }
        console.log(data.user);
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" 
         style={{
           backgroundImage: "url('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
           backgroundSize: "cover",
           backgroundPosition: "center",
           backgroundBlendMode: "overlay",
           backgroundColor: "rgba(0, 0, 0, 0.5)",
           opacity: 0.9,
         }}>
      <div className="max-w-md w-full bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-8 px-8">
          <h2 className="text-3xl font-bold text-center">Skill sync</h2>
          <p className="text-center mt-2 text-blue-100">Welcome back to your fitness journey</p>
        </div>

        <div className="px-8 py-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

           

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
            >
              Sign In
            </button>

            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                </div>
               
              </div>

              
            </div>

            <div className="text-center text-sm">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign up now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      alert('Login successful');
      console.log(data.user); // store in state or localStorage
    } else {
      alert(data.error);
    }
  } catch (err) {
    alert('Login failed');
  }
};


function Login() {
  return (
    <MainLayout>
      <div className="max-w-md mx-auto mt-20 bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-6 px-8 text-center">
          <h2 className="text-3xl font-semibold">Welcome Back</h2>
          <p className="text-sm mt-1">Login to your account</p>
        </div>

        <div className="px-8 py-10">
        <form className="space-y-5" onSubmit={handleLogin}>
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />


            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium"
            >
              Login
            </button>

            <div className="text-center text-sm text-gray-500 mt-6">or continue with</div>

            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-gray-100 px-5 py-2 rounded-xl hover:bg-gray-200">
                Google
              </button>
              <button className="bg-gray-100 px-5 py-2 rounded-xl hover:bg-gray-200">
                LinkedIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;

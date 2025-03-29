import MainLayout from "../layouts/MainLayout";

function Login() {
  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-card">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        <form className="space-y-4">
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
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4" />
              Remember me
            </label>
            <a href="#" className="text-sm text-primary">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-xl"
          >
            Login
          </button>
          <div className="text-center text-sm text-gray-500 mt-4">
            or login with
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <button className="bg-gray-100 px-4 py-2 rounded-xl">Google</button>
            <button className="bg-gray-100 px-4 py-2 rounded-xl">LinkedIn</button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default Login;

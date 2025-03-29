import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          SkillSync
        </Link>

        <div className="hidden md:flex gap-6 text-sm">
          <Link to="/job-recommendations" className="text-gray-700 hover:text-primary">Jobs</Link>
          <Link to="/course-recommendations" className="text-gray-700 hover:text-primary">Courses</Link>
          <Link to="/market-insights" className="text-gray-700 hover:text-primary">Insights</Link>
        </div>

        <div className="flex gap-2 text-sm">
          <Link to="/login" className="px-4 py-2 border rounded-xl text-primary border-primary">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 rounded-xl bg-primary text-white">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

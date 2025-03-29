import MainLayout from "../layouts/MainLayout";

function MarketInsights() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Job Market Insights</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Industry Trends</h2>
        <div className="bg-white p-6 rounded-2xl shadow-card">
          <p className="text-sm text-gray-600">
            The tech industry is seeing a sharp increase in demand for roles like AI engineers, full-stack developers,
            and data analysts. Cloud and cybersecurity roles remain steady.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Salary Ranges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-card">
            <h3 className="font-semibold text-lg">Frontend Developer</h3>
            <p className="text-sm text-gray-500">₹6–15 LPA • India</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-card">
            <h3 className="font-semibold text-lg">Backend Developer</h3>
            <p className="text-sm text-gray-500">₹7–18 LPA • India</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Geographic Hotspots</h2>
        <div className="bg-white p-6 rounded-2xl shadow-card text-sm text-gray-600">
          Bengaluru, Hyderabad, and Pune continue to dominate job growth in IT. NCR and Chennai follow closely with
          steady hiring trends.
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">News & Updates</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-2xl shadow-card">
            Tech hiring to grow 20% in Q2 2025 as per NASSCOM report
          </li>
          <li className="bg-white p-4 rounded-2xl shadow-card">
            Remote-first companies offering higher salaries to retain talent
          </li>
        </ul>
      </section>
    </MainLayout>
  );
}

export default MarketInsights;

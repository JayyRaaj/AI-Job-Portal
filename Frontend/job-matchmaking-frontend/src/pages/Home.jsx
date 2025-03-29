import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">Find Your Dream Job</h1>
        <p className="text-lg text-gray-600 mb-6">Search jobs, get recommendations, and track your career growth</p>
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search for jobs or courses..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none"
          />
        </div>
      </section>

      <section className="py-12 bg-neutral">
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div className="p-6 bg-white shadow-card rounded-2xl">Job #1</div>
          <div className="p-6 bg-white shadow-card rounded-2xl">Job #2</div>
          <div className="p-6 bg-white shadow-card rounded-2xl">Job #3</div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Platform Stats</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-primary">10K+</h3>
            <p className="text-gray-600">Jobs Posted</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">5K+</h3>
            <p className="text-gray-600">Hired</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">100+</h3>
            <p className="text-gray-600">Partners</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;

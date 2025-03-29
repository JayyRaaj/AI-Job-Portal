import MainLayout from "../layouts/MainLayout";
import { TrendingUp, DollarSign, MapPin, Newspaper } from "lucide-react";

function MarketInsights() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section with Gradient Background */}
        <div className="relative overflow-hidden rounded-3xl mb-12 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-20"></div>
          <div className="relative z-10 p-10 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Job Market <span className="text-yellow-300">Insights</span>
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl max-w-2xl">
              Stay ahead with the latest trends, salaries, and opportunities in the tech industry
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Industry Trends Card */}
          <div className="group rounded-3xl bg-gradient-to-br from-white to-indigo-50 p-1 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="bg-white h-full rounded-[22px] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-indigo-100 rounded-bl-full opacity-40 -mr-10 -mt-10"></div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-2xl mr-4">
                  <TrendingUp className="text-indigo-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Industry Trends</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The tech industry is seeing a sharp increase in demand for roles like 
                <span className="font-medium text-indigo-600"> AI engineers</span>, 
                <span className="font-medium text-indigo-600"> full-stack developers</span>, and
                <span className="font-medium text-indigo-600"> data analysts</span>. 
                Cloud and cybersecurity roles remain steady.
              </p>
            </div>
          </div>

          {/* Geographic Hotspots Card */}
          <div className="group rounded-3xl bg-gradient-to-br from-white to-emerald-50 p-1 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="bg-white h-full rounded-[22px] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-100 rounded-bl-full opacity-40 -mr-10 -mt-10"></div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 rounded-2xl mr-4">
                  <MapPin className="text-emerald-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Geographic Hotspots</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-700">Bengaluru</span>
                  <div className="ml-auto bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">Top Hiring</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-700">Hyderabad</span>
                  <div className="ml-auto bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">High Growth</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span className="font-medium text-gray-700">Pune</span>
                  <div className="ml-auto bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">Rising</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Salary Ranges Section */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-amber-100 rounded-2xl mr-4">
              <DollarSign className="text-amber-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Salary Ranges</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-gray-800">Frontend Developer</h3>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">FE</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$80,000 <span className="text-sm font-normal text-gray-500"></span></div>
              <p className="text-sm text-gray-500 flex items-center">
                <MapPin size={14} className="mr-1" /> USA
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full mr-2">React</span>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">Vue</span>
              </div>
            </div>
            
            <div className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-gray-800">Backend Developer</h3>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">BE</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$80,000 <span className="text-sm font-normal text-gray-500"></span></div>
              <p className="text-sm text-gray-500 flex items-center">
                <MapPin size={14} className="mr-1" /> USA
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs rounded-full mr-2">Node</span>
                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs rounded-full">Python</span>
              </div>
            </div>
            
            <div className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-gray-800">Data Scientist</h3>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">DS</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$200,000 <span className="text-sm font-normal text-gray-500"></span></div>
              <p className="text-sm text-gray-500 flex items-center">
                <MapPin size={14} className="mr-1" /> USA
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs rounded-full mr-2">ML</span>
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">AI</span>
              </div>
            </div>
            
            <div className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-gray-800">DevOps Engineer</h3>
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">DO</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$100,000 <span className="text-sm font-normal text-gray-500"></span></div>
              <p className="text-sm text-gray-500 flex items-center">
                <MapPin size={14} className="mr-1" /> Canada
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs rounded-full mr-2">AWS</span>
                <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs rounded-full">K8s</span>
              </div>
            </div>
          </div>
        </div>

        {/* News & Updates Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="p-3 bg-rose-100 rounded-2xl mr-4">
              <Newspaper className="text-rose-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">News & Updates</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-rose-500 to-orange-500 h-3"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-rose-50 text-rose-600 text-xs rounded-full mb-4">Trending</span>
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">Tech hiring to grow 20% in Q2 2025 as per NASSCOM report</h3>
                <p className="text-gray-600 mb-4">The growth is driven by investments in AI, digital transformation, and cloud infrastructure projects across major tech hubs.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">March 15, 2025</span>
                  <button className="text-rose-600 font-medium text-sm hover:text-rose-700">Read More →</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full mb-4">Remote Work</span>
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Remote-first companies offering higher salaries to retain talent</h3>
                <p className="text-gray-600 mb-4">As competition for skilled tech workers intensifies, fully remote companies are increasing compensation packages by 15-20%.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">March 20, 2025</span>
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-700">Read More →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default MarketInsights;
import React from 'react';
import { Umbrella, GitBranch, Truck, Upload, LineChart, Calendar } from 'lucide-react';

const OptimizationSection = () => {
  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-[#6366F1]">
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="md:w-1/2">
              <img 
                src="/path-to-your-illustration.svg" // Add your petroleum illustration here
                alt="Optimize Operations"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 text-white">
              <h2 className="text-4xl font-bold mb-4">Optimize Your Operation Today</h2>
              <p className="text-lg">
                Getting started with Petrofly is quick and easy. We provide assistance 
                every step of the way and beyond. No contract is required.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-emerald-500 p-4 rounded-lg text-white text-center">
              <Umbrella className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">24/7 Support</p>
            </div>

            <div className="bg-[#FF6B6B] p-4 rounded-lg text-white text-center">
              <GitBranch className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Software Customization</p>
            </div>

            <div className="bg-emerald-500 p-4 rounded-lg text-white text-center">
              <Truck className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Unlimited Free Training</p>
            </div>

            <div className="bg-[#FF6B6B] p-4 rounded-lg text-white text-center">
              <Upload className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Onboard in 1 day</p>
            </div>

            <div className="bg-emerald-500 p-4 rounded-lg text-white text-center">
              <LineChart className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Drive the Bottomline</p>
            </div>

            <div className="bg-[#FF6B6B] p-4 rounded-lg text-white text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Reduce Time on Daily Tasks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationSection;

import React from "react";

const Stats = () => {
  return (
    <section className="w-full px-4 py-10 flex justify-center">
      <div className="container flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-12 lg:gap-18">
          <div className="group text-center p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary group-hover:scale-105 transition">
              6,842
            </h2>
            <p className="text-xs sm:text-sm text-white mt-2">
              Agents Minted
            </p>
          </div>

          <div className="group text-center p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary group-hover:scale-105 transition">
              24.7K
            </h2>
            <p className="text-xs sm:text-sm text-white mt-2">
              SOL Distributed
            </p>
          </div>

          <div className="group text-center p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary group-hover:scale-105 transition">
              1,209
            </h2>
            <p className="text-xs sm:text-sm text-white mt-2">
              Active Swarms
            </p>
          </div>

          <div className="group text-center p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <h2 className="text-xl sm:text-3xl font-semibold text-primary group-hover:scale-105 transition">
              ∞
            </h2>
            <p className="text-xs sm:text-sm text-white mt-2">
              Folklore to Unlock
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

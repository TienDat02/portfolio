"use client";
import React from 'react';
import CountUp from 'react-countup';

const Stats = ({ stats }) => {
    return (
        <section className="py-14">
        <div className="mx-auto max-w-[1350px]">
          <div
            className="flex flex-col gap-10 justify-between items-center px-10 py-10 rounded-2xl xl:py-16 xl:px-20 bg-primary lg:flex-row">
            <div className="w-full lg:w-60">
              <h2
                className="mb-4 text-4xl font-bold text-center font-manrope text-accent lg:text-left"
              >
                My Stats
              </h2>
              <p className="text-sm leading-6 text-center text-white lg:text-left">
                What I have achieved so far
              </p>
            </div>
            <div className="w-full lg:w-4/5">
              <div
                className="flex flex-col flex-1 gap-4 lg:gap-0 lg:flex-row lg:justify-between"
              >
                <StatItem value={3} label="Months of Experience" />
                <StatItem value={5} label="Academic Projects Done" />
                <StatItem value={8} label="Graduate Score" />
                <StatItem value={22} label="Years single :<" />
              </div>
            </div>
          </div>
        </div>
    </section>
                                            
    );
    }
    
const StatItem = ({ value, label }) => (
  <div className="block">
    <div className="mb-3 text-4xl font-bold text-center text-indigo-500 font-manrope lg:text-left">
      <CountUp end={value} duration={2.5} suffix="+" />
    </div>
    <span className="block text-center text-white lg:text-left">
      {label}
    </span>
  </div>
);

export default Stats;
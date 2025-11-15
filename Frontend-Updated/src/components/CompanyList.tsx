"use client";

import React from "react";

// The Company interface remains the same
interface Company {
  _id: string;
  name: string;
  jobTitle: string;
  type: string;
  package: string;
  location: string;
  minCgpa: string;
  batch: string;
}

// The onView prop is re-introduced
interface CompanyListProps {
  companies: Company[];
  onView: (company: Company) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({ companies, onView }) => {
  return (
    <>
      {/* ======================================================================= */}
      {/* DESKTOP VIEW: TABLE                                                     */}
      {/* ======================================================================= */}
      <div className="hidden lg:block mt-6">
        <div className="overflow-x-auto bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Company Name</th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Type</th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Batch</th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {companies.map((company) => (
                <tr key={company._id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">{company.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${company.type === "Internship" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/60 dark:text-yellow-200" : "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200"}`}>{company.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{company.batch}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => onView(company)} className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transform hover:-translate-y-px transition-all">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* MOBILE & TABLET VIEW: CARDS                                             */}
      {/* ======================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden mt-6">
        {companies.map((company) => (
          <div key={company._id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white pr-2">{company.name}</h3>
                <span className={`flex-shrink-0 px-2.5 py-0.5 text-xs font-semibold rounded-full ${company.type === "Internship" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/60 dark:text-yellow-200" : "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200"}`}>{company.type}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Batch of <span className="font-medium text-slate-700 dark:text-slate-300">{company.batch}</span></p>
            </div>
            <div className="mt-4">
              <button onClick={() => onView(company)} className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transform hover:-translate-y-px transition-all">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompanyList;
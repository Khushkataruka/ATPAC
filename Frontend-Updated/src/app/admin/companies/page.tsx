"use client";

import React from "react";
import Link from "next/link";

const companies = [
  { id: 1, name: "Google", jobTitle: "SWE", type: "Full-time", package: "50LPA", location: "Bangalore", minCgpa: "8", batch: "2025" },
  { name: "Google", jobTitle: "Software Engineer", type: "Full-time", package: "50 LPA", location: "Bangalore", minCgpa: "8", batch: "2025", sector: "IT", website: "https://google.com", logoURL: "" },
  { name: "Microsoft", jobTitle: "SWE Intern", type: "Internship", package: "15 LPA", location: "Hyderabad", minCgpa: "7.5", batch: "2025", sector: "IT", website: "https://microsoft.com", logoURL: "" },
  { name: "Amazon", jobTitle: "Backend Engineer", type: "Full-time", package: "45 LPA", location: "Bangalore", minCgpa: "8", batch: "2025", sector: "IT", website: "https://amazon.com", logoURL: "" },
  { name: "Facebook", jobTitle: "Frontend Engineer", type: "Full-time", package: "48 LPA", location: "Hyderabad", minCgpa: "8.2", batch: "2025", sector: "IT", website: "https://facebook.com", logoURL: "" },
  { name: "Apple", jobTitle: "iOS Developer", type: "Full-time", package: "52 LPA", location: "Bangalore", minCgpa: "8.5", batch: "2025", sector: "IT", website: "https://apple.com", logoURL: "" },
  { name: "Tesla", jobTitle: "Embedded Engineer", type: "Full-time", package: "47 LPA", location: "Delhi", minCgpa: "8", batch: "2025", sector: "Automobile", website: "https://tesla.com", logoURL: "" },
  { name: "Infosys", jobTitle: "Trainee Engineer", type: "Full-time", package: "12 LPA", location: "Pune", minCgpa: "7", batch: "2025", sector: "IT", website: "https://infosys.com", logoURL: "" },
  { name: "TCS", jobTitle: "Developer", type: "Full-time", package: "13 LPA", location: "Mumbai", minCgpa: "7.2", batch: "2025", sector: "IT", website: "https://tcs.com", logoURL: "" },
  { name: "Adobe", jobTitle: "Software Engineer", type: "Full-time", package: "40 LPA", location: "Noida", minCgpa: "8", batch: "2025", sector: "IT", website: "https://adobe.com", logoURL: "" },
  { name: "IBM", jobTitle: "Cloud Engineer", type: "Full-time", package: "35 LPA", location: "Bangalore", minCgpa: "7.8", batch: "2025", sector: "IT", website: "https://ibm.com", logoURL: "" },
  { name: "LinkedIn", jobTitle: "Full Stack Intern", type: "Internship", package: "18 LPA", location: "Bangalore", minCgpa: "8", batch: "2025", sector: "IT", website: "https://linkedin.com", logoURL: "" },
  { name: "Paytm", jobTitle: "Mobile Developer", type: "Full-time", package: "30 LPA", location: "Noida", minCgpa: "7.5", batch: "2025", sector: "FinTech", website: "https://paytm.com", logoURL: "" },
  { name: "Flipkart", jobTitle: "Backend Developer", type: "Full-time", package: "32 LPA", location: "Bangalore", minCgpa: "7.8", batch: "2025", sector: "E-commerce", website: "https://flipkart.com", logoURL: "" },
  { name: "Ola", jobTitle: "Data Scientist", type: "Full-time", package: "28 LPA", location: "Bangalore", minCgpa: "8", batch: "2025", sector: "Automobile", website: "https://ola.com", logoURL: "" },
  { name: "Zomato", jobTitle: "Frontend Developer", type: "Full-time", package: "26 LPA", location: "Gurgaon", minCgpa: "7.5", batch: "2025", sector: "FoodTech", website: "https://zomato.com", logoURL: "" },
  { name: "Swiggy", jobTitle: "SDE Intern", type: "Internship", package: "14 LPA", location: "Bangalore", minCgpa: "7.8", batch: "2025", sector: "FoodTech", website: "https://swiggy.com", logoURL: "" },
  { name: "PayPal", jobTitle: "Backend Engineer", type: "Full-time", package: "42 LPA", location: "Bangalore", minCgpa: "8.2", batch: "2025", sector: "FinTech", website: "https://paypal.com", logoURL: "" },
  { name: "Samsung", jobTitle: "Embedded Intern", type: "Internship", package: "16 LPA", location: "Noida", minCgpa: "7.5", batch: "2025", sector: "Electronics", website: "https://samsung.com", logoURL: "" },
  { name: "Intel", jobTitle: "Chip Design Engineer", type: "Full-time", package: "45 LPA", location: "Bangalore", minCgpa: "8", batch: "2025", sector: "Electronics", website: "https://intel.com", logoURL: "" },
  { name: "Dell", jobTitle: "Software Developer", type: "Full-time", package: "35 LPA", location: "Bangalore", minCgpa: "7.8", batch: "2025", sector: "IT", website: "https://dell.com", logoURL: "" },
];

const CompaniesPage: React.FC = () => {
  return (
    <div>
      <div className="mt-20 flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Companies</h1>
        <Link href="/admin/companies/add" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Company
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl border border-gray-300 shadow-sm">
        <table className="w-full text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Job Title</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Package</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Min CGPA</th>
              <th className="px-4 py-3">Batch</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr key={c.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3">{c.name}</td>
                <td className="px-4 py-3">{c.jobTitle}</td>
                <td className="px-4 py-3">{c.type}</td>
                <td className="px-4 py-3">{c.package}</td>
                <td className="px-4 py-3">{c.location}</td>
                <td className="px-4 py-3">{c.minCgpa}</td>
                <td className="px-4 py-3">{c.batch}</td>
                <td className="px-4 py-3 space-x-2">
                  <Link href={`/admin/companies/edit/${c.id}`} className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">Edit</Link>
                  <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompaniesPage;

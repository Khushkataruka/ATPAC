"use client";

import React from "react";

interface Company {
  id: number;
  name: string;
  role: string;
  package: string;
  location: string;
}

interface CompanyCardProps {
  company: Company;
  onView: (company: Company) => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, onView }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
      <h3 className="text-lg font-semibold">{company.name}</h3>
      <p className="text-gray-600 text-sm">Role: {company.role}</p>
      <p className="text-gray-600 text-sm">Package: {company.package}</p>
      <p className="text-gray-600 text-sm">Location: {company.location}</p>
      <button
        onClick={() => onView(company)}
        className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
      >
        View
      </button>
    </div>
  );
};

export default CompanyCard;

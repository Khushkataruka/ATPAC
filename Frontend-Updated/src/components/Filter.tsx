"use client";

import React, { useState } from "react";

// Interfaces remain the same
interface Company {
  name: string;
  batch: string;
  type: string;
}

export interface Filters {
  category: string;
  degree: string;
  company: string;
  batch: string;
  placementType: string;
  cgpa: number;
}

interface FilterProps {
  companies?: Company[];
  onSearch: (query: string) => void;
  onApply: (filters: Filters) => void;
  onReset: () => void;
}

const Filter: React.FC<FilterProps> = ({
  companies = [],
  onSearch,
  onApply,
  onReset,
}) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [degree, setDegree] = useState("All Degrees");
  const [company, setCompany] = useState("All Companies");
  const [batch, setBatch] = useState("All Batches");
  const [placementType, setPlacementType] = useState("All Types");
  const [cgpa, setCgpa] = useState(0);

  const companyOptions = Array.from(new Set(companies.map((c) => c.name)));
  const batchOptions = Array.from(new Set(companies.map((c) => c.batch)));
  const typeOptions = Array.from(new Set(companies.map((c) => c.type)));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleApply = () => {
    onApply({ category, degree, company, batch, placementType, cgpa });
  };

  const formElementClasses = "w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer hover:border-blue-400 dark:hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-600";
  return (
    <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 space-y-6 bg-white dark:bg-slate-800 shadow-lg mb-8">
      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by job title, company, or location..."
        className={`${formElementClasses} placeholder:text-slate-400 dark:placeholder:text-slate-500`}
      />

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Category */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} className={formElementClasses}>
          <option>All Categories</option>
          <option>Software</option>
          <option>Core</option>
          <option>Consulting</option>
        </select>

        {/* Degree */}
        <select value={degree} onChange={(e) => setDegree(e.target.value)} className={formElementClasses}>
          <option>All Degrees</option>
          <option>MSc Mathematics</option>
          <option>MSc Physics</option>
          <option>MSc Chemistry</option>
          <option>B.Tech</option>
          <option>M.Tech</option>
          <option>MBA</option>
        </select>

        {/* Company */}
        <select value={company} onChange={(e) => setCompany(e.target.value)} className={formElementClasses}>
          <option>All Companies</option>
          {companyOptions.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* Batch */}
        <select value={batch} onChange={(e) => setBatch(e.target.value)} className={formElementClasses}>
          <option>All Batches</option>
          {batchOptions.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>

        {/* Placement Type */}
        <select value={placementType} onChange={(e) => setPlacementType(e.target.value)} className={formElementClasses}>
          <option>All Types</option>
          {typeOptions.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        {/* CGPA */}
        <div className="lg:col-span-1 md:col-span-3">
          <label className="text-slate-600 dark:text-slate-300 text-sm mb-1 block">
            Your CGPA: {cgpa.toFixed(1)}
          </label>
          <input
            type="range"
            min={0}
            max={10}
            step={0.1}
            value={cgpa}
            onChange={(e) => setCgpa(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-blue-500"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
        <button
          onClick={onReset}
          // --- HOVER EFFECT IMPROVED HERE ---
          className="px-5 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 font-semibold transform hover:-translate-y-px transition-all duration-200"
        >
          Reset
        </button>
        <button
          onClick={handleApply}
          // --- HOVER EFFECT IMPROVED HERE ---
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-semibold transform hover:scale-105 hover:-translate-y-px transition-all duration-200"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
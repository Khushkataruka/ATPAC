"use client";

import React, { useState, useEffect } from "react";
import Filter from "@/components/Filter";
import CompanyList from "@/components/CompanyList";
import { Company, Filters } from "@/types";
import Preloader from "@/components/Preloader";
import toast from "react-hot-toast";

const Page: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({
    category: "All Categories",
    degree: "All Degrees",
    company: "All Companies",
    batch: "All Batches",
    placementType: "All Types",
    cgpa: 0,
  });
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      const toastId = toast.loading("Fetching company data...");
      try {
        const res = await fetch("https://atpac-backend-2.onrender.com/api/companies/");
        if (!res.ok) throw new Error("Failed to fetch companies");
        const data = await res.json();
        const list = data.data || data;

        setCompanies(list);
        if (list.length > 0) {
          toast.success(`Loaded ${list.length} companies successfully 🏢`, { id: toastId });
        } else {
          toast(`⚠️ No company records found.`, { id: toastId });
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
        toast.error("❌ Failed to load companies.", { id: "company-error" });
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    toast.success(`Searching for "${query}"`, { duration: 1000 });
  };

  const handleApply = (newFilters: Filters) => {
    setFilters(newFilters);
    toast.success("Filters applied successfully!", { duration: 1500 });
  };

  const handleReset = () => {
    setSearchQuery("");
    setFilters({
      category: "All Categories",
      degree: "All Degrees",
      company: "All Companies",
      batch: "All Batches",
      placementType: "All Types",
      cgpa: 0,
    });
    toast("Filters reset 🔄", { duration: 1500 });
  };

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (company.jobTitle || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (company.location || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCompany =
      !filters.company || filters.company === "All Companies"
        ? true
        : company.name === filters.company;
    const matchesBatch =
      !filters.batch || filters.batch === "All Batches"
        ? true
        : company.batch === filters.batch;
    const matchesType =
      !filters.placementType || filters.placementType === "All Types"
        ? true
        : company.type === filters.placementType;
    const matchesCgpa =
      !filters.cgpa || filters.cgpa === 0
        ? true
        : company.minCgpa === "N/A" || Number(company.minCgpa) <= filters.cgpa;
    return matchesSearch && matchesCompany && matchesBatch && matchesType && matchesCgpa;
  });

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="p-6 max-w-7xl mx-auto pt-24">
        <Filter
          companies={companies}
          onSearch={handleSearch}
          onApply={handleApply}
          onReset={handleReset}
        />

        {loading ? (
          <Preloader />
        ) : filteredCompanies.length > 0 ? (
          <CompanyList companies={filteredCompanies} onView={setSelectedCompany} />
        ) : (
          <p className="text-center text-slate-500 dark:text-slate-400 mt-16">
            No companies match your current criteria.
          </p>
        )}

        {selectedCompany && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity"
              onClick={() => setSelectedCompany(null)}
            >
              <div
                className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-lg shadow-xl p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="absolute top-4 right-4 p-1 rounded-full text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-110 hover:rotate-90 transform transition-all duration-300 ease-in-out"
                  aria-label="Close company details"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {selectedCompany.name}
                </h2>

                <div className="space-y-3 text-base text-slate-600 dark:text-slate-300">
                  <p>
                    <strong>Role:</strong> {selectedCompany.jobTitle || "Not specified"}
                  </p>
                  <p>
                    <strong>Package:</strong> {selectedCompany.package || "Not specified"}
                  </p>
                  <p>
                    <strong>Location:</strong> {selectedCompany.location || "Not specified"}
                  </p>
                  <p>
                    <strong>Min CGPA:</strong> {selectedCompany.minCgpa || "N/A"}
                  </p>
                  <p>
                    <strong>Batch:</strong> {selectedCompany.batch}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Page;

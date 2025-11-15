"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Internship {
  _id: string;
  name: string;
  jobTitle: string;
  type: string;
  package: string;
  location: string;
  batch: string;
  website?: string;
  logoURL?: string; // optional logo
}

const InternshipCard: React.FC<{ internship: Internship }> = ({ internship }) => {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg shadow p-5 bg-white dark:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      {/* Logo */}
      {internship.logoURL && (
        <img
          src={internship.logoURL}
          alt={internship.name}
          className="w-full h-32 object-contain mb-3"
        />
      )}

      {/* Internship Details */}
      <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
        {internship.name}
      </h2>

      {internship.jobTitle && (
        <p className="text-slate-600 dark:text-slate-400 mb-1">
          <strong>Job Title:</strong> {internship.jobTitle}
        </p>
      )}
      {internship.location && (
        <p className="text-slate-600 dark:text-slate-400 mb-1">
          <strong>Location:</strong> {internship.location}
        </p>
      )}
      {internship.batch && (
        <p className="text-slate-600 dark:text-slate-400 mb-1">
          <strong>Batch:</strong> {internship.batch}
        </p>
      )}
      {internship.package && (
        <p className="text-slate-600 dark:text-slate-400 mb-3">
          <strong>Package:</strong> {internship.package}
        </p>
      )}

      {/* Apply Button */}
      {internship.website ? (
        <a
          href={internship.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 px-4 py-2 rounded text-center font-medium transition"
        >
          Apply Now
        </a>
      ) : (
        <button
          disabled
          className="text-white bg-slate-400 dark:bg-slate-600 px-4 py-2 rounded cursor-not-allowed text-center font-medium"
        >
          No Link
        </button>
      )}
    </div>
  );
};

const InternshipsPage: React.FC = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternships = async () => {
      const toastId = toast.loading("Fetching internships...");

      try {
        const res = await fetch("https://atpac-backend-2.onrender.com/api/companies");
        if (!res.ok) throw new Error("Failed to fetch internship data");

        const json = await res.json();
        const data = json.data || json;

        const internshipData = data.filter((item: Internship) => item.type === "Internship");
        setInternships(internshipData);

        if (internshipData.length > 0) {
          toast.success(`Loaded ${internshipData.length} internships 🧑‍💻`, { id: toastId });
        } else {
          toast(`⚠️ No internships available currently.`, { id: toastId });
        }
      } catch (err) {
        console.error("Error fetching internships:", err);
        toast.error("❌ Failed to load internships.", { id: "internship-error" });
        setInternships([]);
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  if (loading) {
    return (
      <p className="text-center py-10 text-slate-700 dark:text-slate-300">
        Loading internships...
      </p>
    );
  }

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-10 mt-20 text-slate-900 dark:text-white">
        Internship Opportunities
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
        {internships.length > 0 ? (
          internships.map((internship) => (
            <InternshipCard key={internship._id} internship={internship} />
          ))
        ) : (
          <p className="text-center col-span-full text-slate-500 dark:text-slate-400">
            No internships available at this time.
          </p>
        )}
      </div>
    </section>
  );
};

export default InternshipsPage;

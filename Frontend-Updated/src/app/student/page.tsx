"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Loader2, Search } from "lucide-react";
import { Student, StudentCard } from "../../components/StudentCard";
import toast from "react-hot-toast";

const StudentGrid: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");

  const [allBranches, setAllBranches] = useState<string[]>([]);
  const [allBatches, setAllBatches] = useState<number[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // show loading toast (unique id so it replaces on update)
        toast.loading("Fetching students...", { id: "students" });

        const res = await fetch("https://atpac-backend-2.onrender.com/api/students");
        if (!res.ok) throw new Error("Failed to fetch students");

        const data: Student[] = await res.json();
        setStudents(data);

        // populate filter options
        const branches = new Set(data.map((s) => s.branch));
        const batches = new Set(data.map((s) => s.batch));
        setAllBranches(["", ...Array.from(branches).sort()]);
        setAllBatches([0, ...Array.from(batches).sort((a, b) => b - a)]);

        if (data.length > 0) {
          toast.success(`Loaded ${data.length} students 🎓`, { id: "students" });
        } else {
          toast("No students found", { icon: "⚠️", id: "students" });
        }
      } catch (error) {
        console.error("Error fetching students:", error);
        toast.error("Failed to load students.", { id: "students" });
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        student.name.toLowerCase().includes(searchLower) ||
        student.skills.some((skill) => skill.toLowerCase().includes(searchLower)) ||
        student.rollNo.toLowerCase().includes(searchLower);

      const matchesBranch = !selectedBranch || student.branch === selectedBranch;
      const matchesBatch = !selectedBatch || student.batch === Number(selectedBatch);

      return matchesSearch && matchesBranch && matchesBatch;
    });
  }, [students, searchTerm, selectedBranch, selectedBatch]);


  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-slate-900 dark:text-white">
          Placed Students & Their Interview Experiences
        </h1>

        {/* --- Filter Bar --- */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-lg bg-white dark:bg-slate-800/50 shadow-sm border border-slate-200 dark:border-slate-700">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, skill, roll no..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>

          {/* Branch Filter */}
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {allBranches.map((branch) => (
              <option key={branch} value={branch}>
                {branch || "All Branches"}
              </option>
            ))}
          </select>

          {/* Batch Filter */}
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="w-full py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {allBatches.map((batch) => (
              <option key={batch} value={batch}>
                {batch === 0 ? "All Batches" : batch}
              </option>
            ))}
          </select>
        </div>
        {/* --- End Filter Bar --- */}

        {filteredStudents.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-slate-400 py-10">
            No students match your criteria.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredStudents.map((student) => (
              <StudentCard key={student._id} student={student} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentGrid;

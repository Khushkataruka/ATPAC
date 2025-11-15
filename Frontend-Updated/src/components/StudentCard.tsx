"use client";

import React, { useState } from "react";
import Link from "next/link"; // Re-import Link
import { Linkedin, Github, FileText, Mail } from "lucide-react";

// Define and export the Student interface
export interface Student {
  _id: string;
  name: string;
  rollNo: string;
  email: string;
  branch: string;
  batch: number;
  currentStatus: string;
  skills: string[];
  linkedIn?: string;
  github?: string;
  resumeURL?: string;
  offers?: string[];
}

interface StudentCardProps {
  student: Student;
}

// Re-usable IconLink component
const IconLink: React.FC<{ href: string; children: React.ReactNode; ariaLabel: string }> = ({ href, children, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition"
  >
    {children}
  </a>
);

export const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = showAllSkills
    ? student.skills
    : student.skills.slice(0, 6);

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md hover:shadow-xl rounded-xl p-5 flex flex-col items-center text-center border border-slate-200 dark:border-slate-700 h-full">
      {/* Avatar */}
      <img
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
          student.name
        )}`}
        alt={student.name}
        className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-sm mb-3"
      />

      {/* Name & Info */}
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
        {student.name}
      </h2>
      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
        {student.branch} • Batch {student.batch}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Roll No: {student.rollNo}
      </p>
      <p
        className={`mt-1 text-xs font-medium ${
          student.currentStatus === "Placed"
            ? "text-green-600 dark:text-green-400"
            : student.currentStatus === "Job Prep"
            ? "text-yellow-600 dark:text-yellow-400"
            : "text-slate-500 dark:text-slate-400"
        }`}
      >
        {student.currentStatus}
      </p>

    

      {/* Offers */}
      {student.offers && student.offers.length > 0 && (
        <div className="mt-4 text-left w-full border-t border-slate-200 dark:border-slate-700 pt-3">
          <h3 className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            Offers:
          </h3>
          <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400 space-y-0.5">
            {student.offers.map((offer, idx) => (
              <li key={idx}>{offer}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Links (IconLink) */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center w-full border-t border-slate-200 dark:border-slate-700 pt-4">
        {student.linkedIn && (
          <IconLink href={student.linkedIn} ariaLabel={`${student.name}'s LinkedIn`}>
            <Linkedin className="w-5 h-5" />
          </IconLink>
        )}
        {student.github && (
          <IconLink href={student.github} ariaLabel={`${student.name}'s GitHub`}>
            <Github className="w-5 h-5" />
          </IconLink>
        )}
        {student.resumeURL && (
          <IconLink href={student.resumeURL} ariaLabel={`${student.name}'s Resume`}>
            <FileText className="w-5 h-5" />
          </IconLink>
        )}
        <IconLink href={`mailto:${student.email}`} ariaLabel={`Email ${student.name}`}>
          <Mail className="w-5 h-5" />
        </IconLink>
      </div>

      {/* Blog Button */}
      <Link
        href={`/student/${student.rollNo.toLowerCase()}`}
        className="mt-5 inline-block w-full text-center bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
      >
        View Interview Experience
      </Link>
    </div>
  );
};
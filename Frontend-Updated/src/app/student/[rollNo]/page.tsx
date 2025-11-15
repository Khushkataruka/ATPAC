"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Loader2,
  Briefcase,
  MapPin,
  Calendar,
  DollarSign,
  Trophy,
  Building2,
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

interface InterviewRound {
  roundType: string;
  mode: string;
  description: string;
}

interface Blog {
  studentName: string;
  rollNo: string;
  branch: string;
  role: string;
  jobType: string;
  campusType: string;
  workMode: string;
  location: string;
  offerStatus: string;
  companyName: string;
  compensation: string;
  hiringPeriod: string;
  difficultyLevel: string;
  selectionProcess: string;
  interviewRounds: InterviewRound[];
  experienceSummary: string;
  tips?: string;
  tags?: string[];
  author: string;
}

const BlogDetailPage: React.FC = () => {
  const { rollNo } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!rollNo) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5003/api/blogs/${rollNo}`);
        const data = await res.json();

        if (data.success && data.data) {
          setBlog(data.data);
          toast.success(`Loaded interview for ${data.data.companyName}`);
        } else {
          toast.error("Interview details not found");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast.error("Failed to fetch interview data");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [rollNo]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <Loader2 className="animate-spin text-blue-400 dark:text-blue-400 w-8 h-8 mb-2" />
        <p className="text-slate-600 dark:text-slate-300">Loading interview details...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <p className="text-slate-500 dark:text-slate-400 text-lg">
          No interview details found.
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 mt-20 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* MAIN CONTENT */}
        <div className="flex-1">
          {/* Company Heading */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <Building2 className="text-blue-600 dark:text-blue-400" />
              {blog.companyName}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Interview Experience by <span className="font-medium">{blog.studentName}</span> ({blog.rollNo})
            </p>
          </div>

          {/* Experience Summary */}
          <div className="bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-md mb-6">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Experience Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {blog.experienceSummary}
            </p>
          </div>

          {/* Selection Process */}
          <div className="bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-md mb-6">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Selection Process
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {blog.selectionProcess}
            </p>
          </div>

          {/* Interview Rounds */}
          {blog.interviewRounds?.length > 0 && (
            <div className="bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-md mb-6">
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Interview Rounds
              </h2>
              <div className="space-y-4">
                {blog.interviewRounds.map((round, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700"
                  >
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                      {index + 1}. {round.roundType} ({round.mode})
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {round.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          {blog.tips && (
            <div className="bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-md mb-6">
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Tips & Preparation
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {blog.tips}
              </p>
            </div>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <Link
            href="/students"
            className="mt-8 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            ← Back to Students
          </Link>
        </div>

        {/* SIDEBAR */}
        <aside className="w-full md:w-80 bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md p-6 h-fit">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Interview Details
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Briefcase className="text-blue-600 dark:text-blue-400 w-4 h-4" />
              <span className="font-medium">Role:</span> {blog.role}
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <MapPin className="text-blue-600 dark:text-blue-400 w-4 h-4" />
              <span className="font-medium">Location:</span> {blog.location}
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Calendar className="text-blue-600 dark:text-blue-400 w-4 h-4" />
              <span className="font-medium">Hiring Period:</span> {blog.hiringPeriod}
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <DollarSign className="text-blue-600 dark:text-blue-400 w-4 h-4" />
              <span className="font-medium">Compensation:</span> {blog.compensation}
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Trophy className="text-blue-600 dark:text-blue-400 w-4 h-4" />
              <span className="font-medium">Difficulty:</span> {blog.difficultyLevel}
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-medium">Campus Type:</span> {blog.campusType}
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-medium">Work Mode:</span> {blog.workMode}
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-medium">Offer Status:</span> {blog.offerStatus}
            </p>
          </div>

          <div className="mt-6 border-t border-slate-200 dark:border-slate-700 pt-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Written by{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                {blog.author}
              </span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogDetailPage;

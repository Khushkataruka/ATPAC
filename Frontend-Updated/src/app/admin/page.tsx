"use client";

import React from "react";
import Link from "next/link";

const AdminDashboardPage: React.FC = () => {
  return (
    <div>
      <div className=" mt-20 grid  grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/companies" className="p-6 bg-white rounded-xl shadow hover:shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">Companies</h2>
          <p>Manage all companies</p>
        </Link>
        <Link href="/admin/students" className="p-6 bg-white rounded-xl shadow hover:shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">Students</h2>
          <p>Manage all students</p>
        </Link>
        <Link href="/admin/blogs" className="p-6 bg-white rounded-xl shadow hover:shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">Blogs</h2>
          <p>Manage all blogs</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

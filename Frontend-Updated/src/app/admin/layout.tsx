"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { HiOutlineHome, HiOutlineUser, HiOutlineBuildingOffice2 } from "react-icons/hi2";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white w-64 shadow-md transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`}>
        <div className="p-6 font-bold text-xl border-b">Admin Panel</div>
        <nav className="mt-6">
          <ul>
            <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
              <HiOutlineHome /> <Link href="/admin">Dashboard</Link>
            </li>
            <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
              <HiOutlineBuildingOffice2 /> <Link href="/admin/companies">Companies</Link>
            </li>
            <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
              <HiOutlineUser /> <Link href="/admin/students">Students</Link>
            </li>
            <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
              <Link href="/admin/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;

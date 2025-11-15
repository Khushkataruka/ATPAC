"use client";

import React, { useState } from "react";
import AdminLayout from "../../layout";

const AddCompanyPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    jobTitle: "",
    type: "Full-time",
    package: "",
    location: "",
    minCgpa: "",
    batch: "",
    sector: "",
    website: "",
    logoURL: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Company added (frontend only)");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-20">Add Company</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
        <input type="text" name="name" placeholder="Company Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="jobTitle" placeholder="Job Title" value={form.jobTitle} onChange={handleChange} className="w-full border p-2 rounded" />
        <select name="type" value={form.type} onChange={handleChange} className="w-full border p-2 rounded">
          <option>Full-time</option>
          <option>Internship</option>
        </select>
        <input type="text" name="package" placeholder="Package" value={form.package} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="minCgpa" placeholder="Min CGPA" value={form.minCgpa} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="batch" placeholder="Batch" value={form.batch} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="sector" placeholder="Sector" value={form.sector} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="website" placeholder="Website URL" value={form.website} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="logoURL" placeholder="Logo URL" value={form.logoURL} onChange={handleChange} className="w-full border p-2 rounded" />

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompanyPage;

import mongoose, { Schema, Document } from "mongoose";

// Define the interface for Company
export interface ICompany extends Document {
  name: string;
  jobTitle: string;
  type: string; // e.g., "Internship", "Full-time"
  package: string;
  location: string;
  minCgpa: string;
  batch: string;
  sector?: string;
  website?: string;
  logoURL?: string;
}

const CompanySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    jobTitle: { type: String, required: true },
    type: { type: String, required: true },
    package: { type: String, required: true },
    location: { type: String, required: true },
    minCgpa: { type: String, required: true },
    batch: { type: String, required: true },
    sector: { type: String },
    website: { type: String },
    logoURL: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<ICompany>("Company", CompanySchema);

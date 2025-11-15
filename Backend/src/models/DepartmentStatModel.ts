import mongoose, { Schema, Document } from "mongoose";

// The interface must match the schema fields
export interface IDepartmentStats extends Document {
  departmentName: string;
  degree: string;
  batchYear: number;
  totalStudents: number;
  eligibleStudents: number;
  placementsPlaced: number;
  internshipsPlaced: number;
  unplaced: number; // <-- This property was likely missing or named incorrectly
}

const DepartmentStatsSchema: Schema = new Schema(
  {
    departmentName: { type: String, required: true },
    degree: { type: String, required: true },
    batchYear: { type: Number, required: true },
    totalStudents: { type: Number, required: true, default: 0 },
    eligibleStudents: { type: Number, required: true, default: 0 },
    placementsPlaced: { type: Number, required: true, default: 0 },
    internshipsPlaced: { type: Number, required: true, default: 0 },
    unplaced: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

// Unique compound index to act as a primary key
DepartmentStatsSchema.index(
  { departmentName: 1, degree: 1, batchYear: 1 },
  { unique: true }
);

export default mongoose.model<IDepartmentStats>("DepartmentStat", DepartmentStatsSchema);
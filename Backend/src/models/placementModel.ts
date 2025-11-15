import mongoose, { Schema, Document } from "mongoose";

// We can define the allowed types for better code readability
export type PlacementType = "Placement" | "Internship";

// The updated interface with the new 'type' field
export interface IPlacement extends Document {
  companyName: string;
  departmentName: string;
  degree: string;
  batchYear: number;
  studentCount: number;
  type: PlacementType;
}

// The updated Mongoose Schema
const PlacementSchema: Schema = new Schema(
  {
    companyName: { type: String, required: true, index: true },
    departmentName: { type: String, required: true, index: true },
    degree: { type: String, required: true },
    batchYear: { type: Number, required: true, index: true },
    studentCount: { type: Number, required: true, default: 0 },
    
    // --- New field to distinguish the type ---
    type: {
      type: String,
      required: true,
      enum: ["Placement", "Internship"], // Ensures only these values are allowed
      index: true, // Indexing this field will speed up filtering
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPlacement>("Placement", PlacementSchema);
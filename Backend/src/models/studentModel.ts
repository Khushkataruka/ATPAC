import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
  name: string;
  rollNo: string;
  email: string;
  branch: string;
  batch: number;
  currentStatus: "Placed" | "Higher Studies" | "Job Prep" | "Unplaced";
  skills: string[];
  linkedIn?: string;
  github?: string;
  resumeURL?: string;
  offers: mongoose.Types.ObjectId[];
  password: string;
  resetPasswordToken?: string;
  resetPasswordExpire?: number;
  emailVerificationToken?: string;
  isVerified: boolean;
}

const StudentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    rollNo: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    branch: { type: String, required: true },
    batch: { type: Number, required: true },
    currentStatus: { type: String, enum: ["Placed", "Higher Studies", "Job Prep", "Unplaced"], default: "Unplaced" },
    skills: [String],
    linkedIn: String,
    github: String,
    resumeURL: String,
    offers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Offer" }],
    password: { type: String, required: true },
  resetPasswordToken: { type: String },
  resetPasswordExpire: { type: Number },
  emailVerificationToken: { type: String },
  isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IStudent>("Student", StudentSchema);

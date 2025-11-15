import mongoose, { Schema, Document } from "mongoose";

export interface IInterviewExperience extends Document {
  studentName: string;
  rollNo: string;
  branch: string;
  role: string;
  jobType: string;
  campusType: "On Campus" | "Off Campus" | "Referral";
  workMode: "Onsite" | "Hybrid" | "Remote";
  location: string;
  offerStatus: "Offered" | "Accepted" | "Declined" | "Pending";
  companyName: string;
  compensation: string;
  hiringPeriod: string; //format october 15th - december 15th
  difficultyLevel: string; //out of 10

  selectionProcess: string;
  interviewRounds: {
    roundType: string;
    mode: string;
    description: string;
  }[];

  experienceSummary: string;
  tips?: string;
  tags?: string[];
  author: string; // admin or moderator posting
  createdAt?: Date;
  updatedAt?: Date;
}

const InterviewExperienceSchema: Schema = new Schema<IInterviewExperience>(
  {
    studentName: { type: String, required: true },
    rollNo: { type: String, required: true },
    branch: { type: String, required: true },
    role: { type: String, required: true },
    jobType: { type: String, required: true },
    campusType: {
      type: String,
      enum: ["On Campus", "Off Campus", "Referral"],
      required: true,
    },
    workMode: {
      type: String,
      enum: ["Onsite", "Hybrid", "Remote"],
      required: true,
    },
    location: { type: String, required: true },
    offerStatus: {
      type: String,
      enum: ["Offered", "Accepted", "Declined", "Pending"],
      default: "Offered",
    },
    companyName: { type: String, required: true },
    compensation: { type: String, required: true },
    hiringPeriod: { type: String, required: true },
    difficultyLevel: { type: String, required: true },

    selectionProcess: { type: String, required: true },
    interviewRounds: [
      {
        roundType: { type: String, required: true },
        mode: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],

    experienceSummary: { type: String, required: true },
    tips: { type: String },
    tags: [{ type: String }],

    author: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IInterviewExperience>(
  "InterviewExperience",
  InterviewExperienceSchema
) || mongoose.model<IInterviewExperience>("InterviewExperience");

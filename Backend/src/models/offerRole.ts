import mongoose, { Schema, Document } from "mongoose";

interface IOffer extends Document {
   _id: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
    companyId: mongoose.Types.ObjectId;
    role: string;
    package: number;
    offerType: "Full-time" | "Internship" | "PPO";
    placementYear: number;
    location: string;
    roundDetails: string[];
  }
  
  const OfferSchema: Schema = new Schema(
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
      companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
      role: { type: String, required: true },
      package: Number,
      offerType: { type: String, enum: ["Full-time", "Internship", "PPO"], required: true },
      placementYear: Number,
      location: String,
      roundDetails: [String],
    },
    { timestamps: true }
  );
  
  export default mongoose.model<IOffer>("Offer", OfferSchema);
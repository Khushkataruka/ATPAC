import mongoose,{Schema} from "mongoose";

interface IAlumni extends Document {
    name: string;
    batch: number;
    email: string;
    company: string;
    role: string;
    skills: string[];
    linkedin?: string;
    willingToMentor: boolean;
  }
  
  const AlumniSchema: Schema = new Schema(
    {
      name: { type: String, required: true },
      batch: Number,
      email: { type: String, required: true, unique: true },
      company: String,
      role: String,
      skills: [String],
      linkedin: String,
      willingToMentor: { type: Boolean, default: false },
    },
    { timestamps: true }
  );
  
  export default mongoose.model<IAlumni>("Alumni", AlumniSchema);
  
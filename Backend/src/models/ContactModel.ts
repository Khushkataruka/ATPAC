import mongoose, { Schema, Document, Types } from "mongoose";


interface IContact extends Document {
  // --- Fields submitted by the user ---
  name: string;
  email: string;
  phone?: string; // Optional field
  companyName: string;
  message: string;
}

const ContactSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your full name."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email address."],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address."],
    },
    phone: {
      type: String,
      trim: true,
    },
    companyName: {
      type: String,
      required: [true, "Please provide the company name."],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Please provide a message."],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export default mongoose.model<IContact>("Contact", ContactSchema);
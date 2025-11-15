// backend/test/seedCompanies.ts
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import Company from "../src/models/companyModel"; // adjust path if needed

// Load environment variables from .env
dotenv.config();

const MONGO_URI = "mongodb+srv://iitknitin06:VgzjTjHjg3hNn4eb@cluster0.ibp5of9.mongodb.net/atpac"

if (!MONGO_URI) {
  console.error("❌ MONGO_URI not found in .env file");
  process.exit(1);
}

async function seedCompanies() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Load JSON file
    const filePath = path.join(__dirname, "companies_cleaned.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const companies = JSON.parse(rawData);

    // Upsert (update if exists, insert if not)
    for (const company of companies) {
      await Company.updateOne(
        { name: company.name }, // match by company name
        { $set: company },
        { upsert: true }
      );
    }

    console.log(`✅ Upserted ${companies.length} companies`);

    // Close connection
    await mongoose.connection.close();
    console.log("🔌 MongoDB connection closed");
  } catch (error) {
    console.error("❌ Error seeding companies:", error);
    process.exit(1);
  }
}

seedCompanies();

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./src/routes/authRoutes";
import studentRoutes from "./src/routes/studentRoutes";
import blogsRoutes from "./src/routes/blogsRoutes";
import cors from "cors";
import companyRoutes from "./src/routes/companyRoutes";
import contactRoutes from "./src/routes/contactRoutes";
import departmentStatRoutes from "./src/routes/departmentStatRoutes";
import placementRoutes from "./src/routes/placementRoutes";
dotenv.config();

const PORT = process.env.PORT || 5003;

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req,res) => {
  res.json({ message: "API is working 🚀" });
});
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/blogs', blogsRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/stats', departmentStatRoutes);
app.use('/api/placements', placementRoutes);


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => console.log('Server running on port ' + process.env.PORT));
  })
  .catch(err => console.error(err));

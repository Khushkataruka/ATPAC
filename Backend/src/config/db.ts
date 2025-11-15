import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

export default mongoose;
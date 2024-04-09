import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Suppress the deprecation warning
mongoose.set('strictQuery', false);

const URI = process.env.MONGODB_URL;
export const connectDB = async () => {
  try {
    mongoose.connect(URI, { retryWrites: true }).then(() => {
      console.log('DataBase Connected on:', mongoose.connection.host);
    });
  } catch (error) {
    console.error(`Error connecting to the database: ${error}`);
  }
};

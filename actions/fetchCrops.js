"use server"
import { connectToDB } from "@/lib/connectDB";
import Crop from "@/models/Crops";

// Server action to fetch crops from the database
export async function fetchCrops() {
  try {
    // Connect to MongoDB
    await connectToDB();

    // Fetch crops from MongoDB
    const crops = await Crop.find(); 
    return crops;
  } catch (error) {
    console.error("Error fetching crops:", error);
    throw new Error("Unable to fetch crops");
  }
}

"use server";

import { connectToDB } from "@/lib/connectDB";
import Crop from "@/models/Crops";
import { revalidatePath } from "next/cache";


export const saveCrop = async (formData) => {
  try {
    await connectToDB();

    const cropData = {
      name: formData.get("name"),
      species: formData.get("species"),
      land: formData.get("land"),
      seed: parseInt(formData.get("seed")) || 0,
      date_start: new Date(formData.get("date_start")),
      date_end: new Date(formData.get("date_end")),
      photo: formData.get("photo") || null, // This assumes photo is a string (e.g., file path)
      notes: formData.get("notes") || "",
    };

    const newCrop = new Crop(cropData);
    const savedCrop = await newCrop.save();

    revalidatePath("/dashboard/crops")

    return { success: true, crop: savedCrop };
  } catch (error) {
    console.error("Error saving crop:", error.message);
    return { success: false, error: error.message };
  }
};

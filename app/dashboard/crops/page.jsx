import React from 'react'
import Crop from './Crop';

const page = () => {

  const fetchCrops= async()=> {
    'use server'
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
  
  return (
    <div>
      <Crop />
      
    </div>
  )
}

export default page

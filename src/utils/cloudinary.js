import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // File has been uploaded successfully
    console.log("File is uploaded on Cloudinary:", response.url);
    return response;
  } catch (error) {
    // Remove locally saved temporary file if upload fails
    fs.unlinkSync(localFilePath);
    console.error("Cloudinary upload failed:", error);
    return null;
  }
};

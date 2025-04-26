import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { predictImage } from "../../../../utils/model";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Save the uploaded file temporarily
    const filePath = path.join(process.cwd(), "public", "uploads", file.name);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    // Process the image and get the prediction
    const prediction = await predictImage(filePath);

    // Clean up the temporary file
    fs.unlinkSync(filePath);

    return NextResponse.json({ prediction });
  } catch (error) {
    console.error("Error predicting image:", error);
    return NextResponse.json({ error: "Failed to process image" }, { status: 500 });
  }
}
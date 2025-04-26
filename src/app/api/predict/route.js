
import { NextResponse } from "next/server";
import { predictImage } from "../../../../utils/model";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Perform prediction
    const prediction = await predictImage(file);

    return NextResponse.json({ prediction });
  } catch (error) {
    console.error("Error predicting image:", error);
    return NextResponse.json({ error: "Failed to process image" }, { status: 500 });
  }
}
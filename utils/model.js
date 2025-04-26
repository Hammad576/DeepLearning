import { InferenceSession, Tensor } from "onnxruntime-node";
import path from "path";

let session;

export async function loadModel() {
  if (!session) {
    try {
      console.log("Loading ONNX model...");
      
      // Get the absolute path to your model file
      const modelPath = path.join(process.cwd(), "public", "catdog_cnn.onnx");
      
      // Create inference session
      session = await InferenceSession.create(modelPath);
      
      console.log("ONNX model loaded successfully.");
    } catch (error) {
      console.error("Error loading ONNX model:", error);
      throw error;
    }
  }
  return session;
}

// Preprocess the image (server-side version)
function preprocessImage(imageBuffer) {
  const size = 64;
  const jimp = require("jimp"); // You'll need to install jimp: npm install jimp
  
  return new Promise(async (resolve, reject) => {
    try {
      const image = await jimp.read(imageBuffer);
      
      // Resize and normalize the image
      await image.resize(size, size);
      
      const data = new Float32Array(size * size * 3);
      
      // Process each pixel
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const pixel = jimp.intToRGBA(image.getPixelColor(x, y));
          const idx = (y * size + x) * 3;
          
          // Normalize each channel (R, G, B)
          data[idx] = (pixel.r / 255.0 - 0.5) / 0.5;
          data[idx + 1] = (pixel.g / 255.0 - 0.5) / 0.5;
          data[idx + 2] = (pixel.b / 255.0 - 0.5) / 0.5;
        }
      }
      
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

// Predict the class of the image
export async function predictImage(fileBuffer) {
  if (!session) {
    await loadModel();
  }

  try {
    // Preprocess the image
    const tensor = await preprocessImage(fileBuffer);

    // Create input tensor
    const inputTensor = new Tensor("float32", tensor, [1, 3, 64, 64]);

    // Run inference
    const outputs = await session.run({ input: inputTensor });
    const output = outputs.output.data[0];

    // Interpret the result
    return output > 0.5 ? "Dog" : "Cat";
  } catch (error) {
    console.error("Error during prediction:", error);
    throw error;
  }
}
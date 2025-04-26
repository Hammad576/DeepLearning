import path from "path";
import fs from "fs";
import * as tf from "@tensorflow/tfjs-node";
import torch from "torch"; // Ensure you have PyTorch installed in your Node.js environment

// Load your pre-trained CNN model
const modelPath = path.join(process.cwd(), "utils", "catdog_cnn.pth");
const model = torch.load(modelPath); // Load the PyTorch model
model.eval(); // Set the model to evaluation mode

// Preprocess the image for the model
function preprocessImage(imagePath) {
  const image = tf.node.decodeImage(fs.readFileSync(imagePath), 3); // Decode the image
  const resizedImage = tf.image.resizeBilinear(image, [224, 224]); // Resize to match model input size
  const normalizedImage = resizedImage.div(255.0).expandDims(); // Normalize and add batch dimension
  return normalizedImage;
}

// Predict the class of the image
export async function predictImage(imagePath) {
  // Preprocess the image
  const tensor = preprocessImage(imagePath);

  // Perform inference
  const output = model(tensor); // Pass the tensor through the model
  const probabilities = torch.softmax(output, dim=1); // Apply softmax to get probabilities
  const result = probabilities.argmax(dim=1).item(); // Get the predicted class index

  // Interpret the result (e.g., 0 = Cat, 1 = Dog)
  const label = result === 0 ? "Cat" : "Dog";

  return label;
}
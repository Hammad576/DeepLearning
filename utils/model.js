import { InferenceSession } from "onnxruntime-web";

// Load the ONNX model
let session;

export async function loadModel() {
  if (!session) {
    // Load the ONNX model using onnxruntime-web
    session = await InferenceSession.create("/utils/catdog_cnn.onnx"); // Path to your ONNX model
  }
}

// Preprocess the image
function preprocessImage(image) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Resize the image to match the input dimensions of the model (e.g., 64x64)
  const size = 64;
  canvas.width = size;
  canvas.height = size;
  ctx.drawImage(image, 0, 0, size, size);

  // Convert the image to a tensor
  const imageData = ctx.getImageData(0, 0, size, size).data;
  const data = new Float32Array(size * size * 3);

  for (let i = 0; i < imageData.length / 4; i++) {
    data[i * 3] = (imageData[i * 4] / 255.0 - 0.5) / 0.5; // Normalize R channel
    data[i * 3 + 1] = (imageData[i * 4 + 1] / 255.0 - 0.5) / 0.5; // Normalize G channel
    data[i * 3 + 2] = (imageData[i * 4 + 2] / 255.0 - 0.5) / 0.5; // Normalize B channel
  }

  return data;
}

// Predict the class of the image
export async function predictImage(file) {
  if (!session) {
    await loadModel(); // Ensure the model is loaded
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = async () => {
      try {
        // Preprocess the image
        const tensor = preprocessImage(img);

        // Create input tensor
        const inputTensor = new Float32Array(1 * 3 * 64 * 64); // Batch size=1, channels=3, 64x64 image
        inputTensor.set(tensor);

        // Run inference
        const feeds = { input: new Tensor("float32", inputTensor, [1, 3, 64, 64]) }; // Input tensor with shape [batch_size, channels, height, width]
        const outputs = await session.run(feeds);
        const output = outputs.output.data[0]; // Extract the output

        // Interpret the result
        const label = output > 0.5 ? "Dog" : "Cat";
        resolve(label);
      } catch (error) {
        console.error("Error during prediction:", error);
        reject(error);
      }
    };
  });
}
import sys
import torch
from torchvision import transforms
from PIL import Image

# Load the trained PyTorch model
model_path = "utils/catdog_cnn.pth"
model = torch.load(model_path)
model.eval()

# Define image preprocessing
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# Read the image path from the command line
image_path = sys.argv[1]
image = Image.open(image_path).convert('RGB')
image_tensor = transform(image).unsqueeze(0)  # Add batch dimension

# Perform inference
with torch.no_grad():
    output = model(image_tensor)
    probabilities = torch.softmax(output, dim=1)
    prediction = torch.argmax(probabilities, dim=1).item()

# Output the result
print("Cat" if prediction == 0 else "Dog")
# 🚀 No-Code ML Pipeline Builder

A drag-and-drop, no-code machine learning pipeline builder that allows users to train classification models in minutes — without writing any ML code.

## Features

✅ Dataset Upload (CSV / Excel) ✅ Dataset Information Display

Number of rows
Number of columns
Column names
✅ Data Preprocessing

Standard Scaler (mean = 0, std = 1)
Min-Max Normalization (range 0–1)
✅ Train-Test Split

70% / 30%
80% / 20%
✅ Model Selection

Logistic Regression
Decision Tree Classifier
✅ Real-time Accuracy Results ✅ Step-by-step Pipeline Flow ✅ Graceful Error Handling ✅ Production-ready Backend (Gunicorn supported)

## 🏗️ Project Structure

no-code-ml-builder/
├── backend/
│ ├── app.py # Flask backend with ML APIs
│ ├── requirements.txt # Python dependencies
│ └── start.sh # Production startup script
│
└── frontend/
├── src/
│ ├── App.js # Controls pipeline steps
│ ├── components/
│ │ ├── Upload.jsx # Dataset upload & info display
│ │ ├── Preprocessing.jsx # Data scaling
│ │ ├── Split.jsx # Train-test split
│ │ ├── ModelPicker.jsx # Model training
│ │ └── Results.jsx # Accuracy results
│ ├── index.css # Tailwind CSS styles
│ └── index.js # React entry point
└── package.json

## 🔄 Pipeline Flow

Upload Dataset
↓
View Dataset Information
↓
Preprocess Data
↓
Split Dataset
↓
Train Model
↓
View Accuracy

## 📊 Dataset Requirements

File Types: .csv, .xls, .xlsx
Target Column: Last column must be the label
Features: All other columns must be numeric (or convertible)
Empty datasets are rejected

### Example Dataset

age,income,score,label
25,50000,80,1
30,60000,75,0
22,45000,90,1

## 🔧 Backend Setup (Flask)

1️⃣ Navigate to backend
cd backend
2️⃣ Create virtual environment

# Windows

python -m venv venv
venv\Scripts\activate

# macOS/Linux

python3 -m venv venv
source venv/bin/activate
3️⃣ Install dependencies
pip install -r requirements.txt
4️⃣ Run locally
python app.py
Backend runs on:

http://localhost:5000

### Production Startup (Gunicorn)

start.sh
#!/bin/bash
gunicorn app:app

## Frontend Setup (React)

1️⃣ Navigate to frontend
cd frontend
2️⃣ Install dependencies
npm install
3️⃣ Start development server
npm start
Frontend runs on:

http://localhost:3000

## Deployment

### Backend Hosting

Platform: Render
Environment: Python
Start Command:
./start.sh

### Frontend Hosting

Platform: Netlify / Vercel
Build Command:
npm run build

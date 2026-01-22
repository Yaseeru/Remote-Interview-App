# Remote Interview App via ZEGOCLOUD

A premium, modern web application for remote interviews and video conferencing, built with React, Vite, and ZEGOCLOUD.

## 🚀 Features

- **Instant Join**: No sign-up required, just enter a name and room ID.
- **High-Quality Video**: Powered by ZEGOCLOUD's global low-latency network.
- **Premium UI**: Modern, responsive design with glassmorphism effects and smooth animations.
- **Secure**: Uses ZEGOCLOUD AppID and AppSign for secure access.

## 🛠️ Tech Stack

- **Frontend**: React (TypeScript) + Vite
- **Styling**: Custom CSS (Glassmorphism, Gradients)
- **Video SDK**: @zegocloud/zego-uikit-prebuilt

## 📋 Prerequisites

- Node.js (v16 or higher)
- ZEGOCLOUD Account (for AppID and AppSign)

## ⚙️ Setup & Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    - Rename `.env` to `.env.local` (or keep as .env for development).
    - Open the file and update the `VITE_ZEGO_APP_ID` and `VITE_ZEGO_APP_SIGN`.
    
    ```env
    VITE_ZEGO_APP_ID=your_app_id_here
    VITE_ZEGO_APP_SIGN=your_app_sign_here
    ```
    
    > **Note**: You can get your AppID and AppSign from the [ZEGOCLOUD Console](https://console.zegocloud.com/).

4.  **Run the application**:
    ```bash
    npm run dev
    ```

## 🎥 Usage

1.  Open the app in your browser (usually `http://localhost:5173`).
2.  Enter your **Name** (e.g., "John Doe").
3.  Enter a **Room ID** (e.g., "interview-101").
4.  Click **Join Interview**.
5.  Share the Room ID (or the generated link) with others to join the same call.

##  deployment

This app is optimized for Vercel. 
1.  Import the project into Vercel.
2.  Add `VITE_ZEGO_APP_ID` and `VITE_ZEGO_APP_SIGN` to the Vercel Environment Variables.
3.  Deploy!

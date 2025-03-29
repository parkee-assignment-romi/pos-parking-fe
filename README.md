# Parking POS Frontend – React Application

This repository contains the frontend for the **Parking POS System**. It is built using **React** and communicates with the **Spring Boot backend** to handle vehicle check-ins and check-outs.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Frontend Setup](#frontend-setup)
  - [Install Dependencies](#install-dependencies)
  - [Run the Frontend](#run-the-frontend)
- [Connecting to the Backend](#connecting-to-the-backend)
- [Testing the Frontend](#testing-the-frontend)

## Prerequisites

Before setting up the frontend, ensure you have the following installed on your system:
- **Node.js** and **npm**.

## Frontend Setup

### 1. Install Dependencies
This project uses **React** to build the user interface.

#### a. **Install Node.js and npm**
- Download and install **Node.js** from the official website: [Node.js Download](https://nodejs.org/).
- Verify the installation by running:
  ```bash
  node -v
  npm -v
  ```
### 2. Run the Frontend
1. Navigate to the frontend folder (e.g., parking-pos-frontend/).
2. Install the necessary frontend dependencies using npm:
    ```bash
    npm install
    ```
3. Once the installation is complete, start the React development server:
    ```bash
    npm start
    ```
4. The frontend should now be running on http://localhost:3000.

## Connecting to the Backend

Ensure the frontend is able to communicate with the backend (which should be running on http://localhost:8080).
1. In your React app, locate the code where API requests are made (e.g., in CheckInPage.jsx or CheckOutPage.jsx).
2. Make sure that the API URL is set to http://localhost:8080 (or whichever port your backend is running on).
Example:
```javascript
const backendUrl = 'http://localhost:8080/api/tickets';
```

## Testing the Frontend

After running the frontend application, open your browser and go to http://localhost:3000. You should see the check-in and check-out forms.
1. For Check-In: Enter the vehicle plate number and click Submit Ticket.
2. For Check-Out: Enter the vehicle plate number and click Finish Check-Out to calculate the total price based on the duration.
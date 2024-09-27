- Quiz Application Backend
  - This is a backend API for managing quizzes and user responses, built with Node.js, Express, and MongoDB. The API provides endpoints to fetch quizzes, retrieve specific quizzes by ID, and submit user answers to calculate their scores.

- Features
  - Get All Quizzes: Fetch a list of all available quizzes.
  - Get Quiz by ID: Fetch a specific quiz along with its questions.
  - Submit Quiz: Users can submit their answers to a quiz, and the system will calculate the score.

- Tech Stack
  - Node.js
  - Express.js
  - MongoDB (Mongoose ODM)
  - dotenv for environment variables
  - Body-parser for handling JSON request bodies
 
- Prerequisites
  - Node.js (version 12 or higher)
  - MongoDB installed and running locally or remotely
  - npm or yarn

- Environment Variables
  - PORT
  - MONGO_URI
 
- API Endpoints
  - Get All Quizzes
    - Endpoint: GET /api/quizzes
    - Description: Fetch all available quizzes.
    - Response: A list of quizzes with titles, descriptions, and IDs.

  - Get Quiz by ID
    - Endpoint: GET /api/quizzes/:id
    - Description: Fetch a specific quiz and its questions by providing the quiz ID.
    - Response: A quiz object with questions and answer choices.

  - Submit Quiz
    - Endpoint: POST /api/quizzes/:id/submit
    - Description: Submit answers for a specific quiz and receive the score.

- Error Handling
  - The API includes robust error handling, providing appropriate responses for invalid requests or server issues.
  - 400 Bad Request: Returned when the user submits invalid data (e.g., missing answers).
  - 404 Not Found: Returned when a quiz or question is not found in the database.
  - 500 Internal Server Error: Returned for any unexpected server issues.

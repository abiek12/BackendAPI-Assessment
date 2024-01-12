# User Authentication API

## Overview

This project is a user authentication system built as a backend service. It supports functionalities such as user registration, login, password reset, and retrieving user information. The API is built using Node.js and Express and uses MongoDB for data storage.

## Features

- **User Registration**: Allows new users to create an account.
- **User Login**: Enables users to log in to their account.
- **Forgot Password**: Provides users with the ability to reset their password if they forget it.
- **Reset Password**: Allows users to set a new password using a unique token sent to their email.
- **Get User Info**: Retrieves the authenticated user's information.

## How to Use

You can test the API endpoints using Postman. Detailed documentation for the API endpoints, including required parameters and example requests/responses, is available here: [Postman Documentation](https://documenter.getpostman.com/view/25801055/2s9YsNcpSb)

## Local Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/abiek12/BackendAPI-Assessment
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the project root.
   - Add the necessary variables (e.g., `DB_URI`, `TOKEN_SECRET`).

4. **Run the Server:**
   ```bash
   npm start
   ```

## API Endpoints

- POST `/api/user/register`: Register a new user.
- POST `/api/user/login`: Log in a user.
- POST `/api/user/forgot-password`: Request a password reset.
- POST `/api/user/reset-password/:token`: Reset the user's password.
- GET `/api/user/info`: Get the logged-in user's info.

## Hosting

The API is hosted on Render at [Render] (https://snabbtech-api-assesment.onrender.com.)

## Testing

For testing the API endpoints, refer to the Postman documentation linked above. It includes detailed instructions on how to use each endpoint, including the expected request format and example responses.

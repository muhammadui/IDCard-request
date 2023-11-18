


# Campus ID

Campus ID is an innovative solution designed to streamline the processing of school ID card requests, offering an efficient and quick experience. This system simplifies the traditionally lengthy process, empowering students to enter their details, make payments, and promptly receive their new ID cards.

## Tech Stack:

- Frontend: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
- Backend: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/)
- Database: [MySQL](https://www.mysql.com/)
- Authentication and User Management: [Clerk](https://clerk.dev/)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/muhammadui/IDCard-request.git
   ```

   Navigate to the project directory:

   ```bash
   cd IDCard-request
   ```

2. **Configure and Run the Backend:**

   Navigate to the server directory and set up the backend:

   ```bash
   cd server
   ```

   Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

   Create a `.env` file in the `server` directory with the following variables:

   ```env
   PORT=3001
   DATABASE_URL=mysql://username:password@localhost:3306/campus_id
   ALLOWED_ORIGINS=https://id-card-request.vercel.app/
   ```

   Adjust the values according to your setup, then run the backend:

   ```bash
   npm start
   ```

   The backend server will run on [http://localhost:3001](http://localhost:3001).

3. **Set Up MySQL Database:**

   - Create a MySQL database named `campus_id`.
   - Execute the SQL script provided in the `db-scripts` directory:

     ```bash
     mysql -u username -p campus_id < db-scripts/init.sql
     ```

4. **Update CORS Rules:**

   In your backend code, set up CORS rules to allow connections from your frontend. For example, using Express and the `cors` middleware:

   ```javascript
   const cors = require("cors");

   app.use(
     cors({
       origin: process.env.ALLOWED_ORIGINS.split(","),
     })
   );
   ```

   Ensure the `ALLOWED_ORIGINS` environment variable matches your frontend's address.

5. **Configure and Run the Frontend:**

   Navigate to the client directory to configure and run the frontend:

   ```bash
   cd client
   ```

   Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

## Running the App

### Prerequisites

Ensure you have [Node 18.x](https://nodejs.org/) installed on your machine.

1. **Navigate to the Project Directory:**

   ```bash
   cd client
   ```

   This will take you to the project directory.

2. **Install Dependencies:**

   Run the following command to install the project dependencies.

   ```bash
   npm install
   ```

### Running the App

3. **Start the Development Server:**

   To start the development server and run the React Vite app, use the following command:

   ```bash
   npm run dev
   ```

   This will start the development server, and you should see output on your terminal indicating that the app is running.

4. **Access the App:**

   Open your web browser and navigate to [http://localhost:5173](http://localhost:5173) to view your app.

### Additional Commands

You can use the following additional commands for various tasks:

- **Build for Production:**

  ```bash
  npm run build
  ```

  This command creates an optimized production build of your app.

- **Serve the Production Build Locally:**

  ```bash
  npm run serve
  ```

  This command serves the production build locally to test it before deployment.

## Usage Guide

1. **Access the Web App:**

   - Open your browser and go to [http://localhost:5173](http://localhost:5173).

2. **Enter Student Details:**

   - Fill in the required information in the provided form.

3. **Make Payment:**

   - Follow the prompts to complete the payment process securely.

4. **Receive ID Card:**
   - Upon successful payment, expect to be notified or receive a call within the next 15 minutes to collect your new ID card.

## Live Preview

Explore the live preview of the application: [Campus ID Live Preview](https://id-card-request.vercel.app/)

## Contributing Guidelines

We welcome contributions to enhance Campus ID! Please follow these guidelines:

1. Fork the repository and create your branch: `git checkout -b feature/your-feature`.
2. Commit your changes: `git commit -m 'Add your feature'`.
3. Push to the branch: `git push origin feature/your-feature`.
4. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

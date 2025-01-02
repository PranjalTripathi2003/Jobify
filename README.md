# JobiFy: Full-Stack Job Management App

JobiFy is a full-stack CRUD web application built with the **MERN** stack, designed to help users manage job listings. Users can add, edit, delete, search, filter, and sort jobs, with advanced features such as pagination and interactive data visualization using charts. The app offers a clean and responsive UI, allowing users to manage jobs efficiently.

---

## Features

- **Add, Edit, and Delete Jobs**: Users can manage job listings with full CRUD functionality.
- **Job Search with Debounce**: Fast and efficient search with debounce to minimize unnecessary API calls.
- **Job Filtering and Sorting**: Filter jobs based on criteria and sort them for better accessibility.
- **Pagination**: Navigate through large sets of job data with easy pagination.
- **Data Visualization**: Visualize job data with interactive charts for better insights.
- **User Authentication**: Secure login and registration using **JWT** for token-based authentication.

---

## Technologies Used

- **Frontend**:  
  - **React.js** for building the user interface.
  - **Styled Components** for component-level styling.
- **Backend**:  
  - **Node.js** for server-side JavaScript.
  - **Express.js** for building RESTful APIs.
- **Database**:  
  - **MongoDB** for data storage.
- **Authentication**:  
  - **JWT** for secure user authentication.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/jobify.git
   ```

2. Navigate to the project directory:

   ```bash
   cd jobify
   ```

3. Install dependencies for both frontend and backend:

   For the frontend:

   ```bash
   cd client
   npm install
   ```

   For the backend:

   ```bash
   cd server
   npm install
   ```

4. Set up environment variables in the `.env` file for the backend:

   ```
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   ```

5. Start the backend server:

   ```bash
   cd server
   npm start
   ```

6. Start the frontend development server:

   ```bash
   cd client
   npm start
   ```

---

## Usage

- Navigate to the application in your browser (usually `http://localhost:5173` for the frontend).
- Users can register, log in, and manage job listings through the intuitive interface.
- Use the search bar, filters, and sorting options to organize job data.

---

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

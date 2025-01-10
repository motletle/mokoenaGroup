const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db'); // Import the pool from db.js

// Initialize the Express app
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST route to add a new course
app.post('/api/courses', (req, res) => {
  const {
    course_name,
    course_description,
    course_duration,
    course_price,
    faculty_name,
    faculty_description
  } = req.body;

  // Validate the request body (ensure all required fields are present)
  if (!course_name || !course_description || !course_duration || !course_price || !faculty_name || !faculty_description) {
    return res.status(400).json({ message: 'Please fill out all required fields!' });
  }

  // SQL query to insert course and faculty into the database
  const sql = `
    INSERT INTO courses (course_name, course_description, course_duration, course_price, faculty_name, faculty_description)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [course_name, course_description, course_duration, course_price, faculty_name, faculty_description];

  // Use the pool to query the database
  pool.query(sql, values, (err, result) => {
    if (err) {
      // Log the error and respond with a failure message
      console.error('Error inserting course:', err);
      return res.status(500).json({
        message: 'Failed to add course',
        error: err.message || 'Unknown error occurred',
      });
    }

    // Respond with success message and course ID
    console.log('Inserted Course ID:', result.insertId);
    return res.status(200).json({
      message: 'Course and Faculty added successfully!',
      courseId: result.insertId,
    });
  });
});

// Set up the server to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

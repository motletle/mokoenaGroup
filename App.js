import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';  // Import the HomePage component
import AdminPage from './pages/Admin';
import InstitutePage from './pages/Institude';
import StudentSignup from './pages/SignUp.js'; // Sign-up page
import StudentLogin from './pages/Students';
import AddCourses from './components/Admin/AddCourses';  // Correct relative path to AddCourses
import AddFaculty from './components/Admin/AddFaculty';  // Import AddFaculty component
import StudentProfile from './components/Students/StudentsProfile.js';
import AdminPage1 from './pages/AdminDashboard.js';
import CareerGuidance from './pages/CareerGuide.js';
import AdminPage2 from './pages/AdminPage2.js';
import InstituteDashboard from './pages/InstitudeDasboard.js'; // Import the InstituteDashboard 
import ViewAdmissions from './components/Students/ViewAdmissions.js';  // Import the ViewAdmissions component
import ApplyCourse from './components/Students/ApplyCourse.js'; // Import the ApplyCourse component
import StudentDashboard from './pages/StudentsDashbaord'; // For student dashboard after login
import AddCourse from './pages/ApplyForm.js';
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <Header /> {/* Display the header */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page route */}
          <Route path="/admin" element={<AdminPage />} /> {/* Admin page route */}
          <Route path="/institutes" element={<InstitutePage />} /> {/* Institutes page route */}
          <Route path="/institude" element={<InstitutePage />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-signup" element={<StudentSignup />} />  {/* Sign-up route */}
          <Route path="/student-login" element={<StudentLogin />} /> {/* Student login page route */}
          {/* Route for Admin Dashboard (AdminPage) */}
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path='/career-guidance' element ={<CareerGuidance/>} />
          <Route path='Apply-Form' element ={<AddCourse/>} />
          <Route path="/apply-course" element={<ApplyCourse />} /> {/* Add a route for ApplyCourse */}
        <Route path="/admin-dashboard" element={<AdminPage1 />} />
        <Route path="/adminpage2" element={<AdminPage2 />} />
        <Route path="/view-admissions" element={<ViewAdmissions />} />
        <Route path="/institude-dashboard" element={<InstituteDashboard />} />
        <Route path="/add-course" element={<AddCourses />} />  {/* Add Course page */}
        <Route path="/add-faculty" element={<AddFaculty />} />  {/* Add Faculty page */}
          <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* Student dashboard page after login */}
          {/* Add other routes as needed */}
        </Routes>
      </main>
      <Footer /> {/* Display the footer */}
    </Router>
  );
}

export default App;

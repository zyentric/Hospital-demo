import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Departments from './pages/Departments/Departments';
import Doctors from './pages/Doctors/Doctors';
import Appointments from './pages/Appointments/Appointments';
import Consultation from './pages/Consultation/Consultation';
import HealthPackages from './pages/HealthPackages/HealthPackages';
import DoctorProfile from './pages/DoctorProfile/DoctorProfile';
import DepartmentProfile from './pages/DepartmentProfile/DepartmentProfile';
import Blog from './pages/Blog/Blog';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import PatientPortal from './pages/PatientPortal/PatientPortal';
import Insurance from './pages/Insurance/Insurance';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import Services from './pages/Services/Services';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="departments" element={<Departments />} />
            <Route path="departments/:id" element={<DepartmentProfile />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="doctors/:id" element={<DoctorProfile />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="consultation" element={<Consultation />} />
            <Route path="packages" element={<HealthPackages />} />
            <Route path="blog" element={<Blog />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="careers" element={<Careers />} />
            <Route path="portal" element={<PatientPortal />} />
            <Route path="insurance" element={<Insurance />} />
            <Route path="services" element={<Services />} />
          </Route>
          {/* Admin routes outside of the main public Layout if desired, but keeping simple for now */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

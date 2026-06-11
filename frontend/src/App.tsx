
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Doctors } from './pages/Doctors';
import { Booking } from './pages/Booking';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="booking" element={<Booking />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

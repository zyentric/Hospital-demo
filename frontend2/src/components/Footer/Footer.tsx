import React from 'react';
import { Box, Container, Typography, Link, Divider, IconButton, TextField, Button } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#0F172A', color: 'rgba(255,255,255,0.7)', pt: 10, pb: 4, mt: 'auto' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 8 }}>
          
          <Box sx={{ width: { xs: '100%', md: 'calc(30% - 24px)' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, color: 'white' }}>
              <LocalHospitalIcon sx={{ fontSize: 36, mr: 1, color: 'primary.main' }} />
              <Typography variant="h5" sx={{ fontWeight: 800 }}>ZYENTRIC</Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 4, lineHeight: 1.8 }}>
              Providing world-class medical care with experienced doctors, modern technology, and compassionate treatment for over 20 years.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'white', '&:hover': { bgcolor: 'primary.main' } }}><FacebookIcon /></IconButton>
              <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'white', '&:hover': { bgcolor: 'primary.main' } }}><TwitterIcon /></IconButton>
              <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'white', '&:hover': { bgcolor: 'primary.main' } }}><InstagramIcon /></IconButton>
              <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'white', '&:hover': { bgcolor: 'primary.main' } }}><LinkedInIcon /></IconButton>
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(20% - 24px)' } }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>Home</Link>
              <Link component={RouterLink} to="/about" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>About Us</Link>
              <Link component={RouterLink} to="/doctors" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>Find a Doctor</Link>
              <Link component={RouterLink} to="/packages" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>Health Packages</Link>
              <Link component={RouterLink} to="/contact" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>Contact Us</Link>
              <Link component={RouterLink} to="/careers" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>Careers</Link>
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(20% - 24px)' } }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>Departments</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link component={RouterLink} to="/departments/cardiology" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>Cardiology</Link>
              <Link component={RouterLink} to="/departments/neurology" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>Neurology</Link>
              <Link component={RouterLink} to="/departments/orthopedics" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>Orthopedics</Link>
              <Link component={RouterLink} to="/departments/pediatrics" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>Pediatrics</Link>
              <Link component={RouterLink} to="/departments/dental" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>Dental Care</Link>
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 'calc(30% - 24px)' } }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>Newsletter</Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Subscribe to our newsletter for the latest health tips and news.
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
              <TextField 
                size="small" 
                placeholder="Email Address" 
                variant="outlined" 
                fullWidth
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.05)', 
                  borderRadius: 1,
                  input: { color: 'white' }
                }} 
              />
              <Button variant="contained" color="primary" sx={{ borderRadius: 1 }}>Subscribe</Button>
            </Box>
          </Box>

        </Box>

        <Divider sx={{ mb: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Zyentric Healthcare. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover">Terms of Service</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

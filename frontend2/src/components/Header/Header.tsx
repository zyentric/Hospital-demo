import React, { useState } from 'react';
import { Box, Container, Typography, Button, IconButton, Drawer, List, ListItemButton, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setMobileOpen(open);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Departments', path: '/departments' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Box component="header">
      {/* Top Bar - Hidden on xs */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 1, display: { xs: 'none', md: 'block' } }}>
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">Emergency: +1 800 123 4567</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">123 Healthcare Ave, NY</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2">Mon - Sun: 24/7 Open</Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation */}
      <Box sx={{ 
        bgcolor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        position: 'sticky', 
        top: 0, 
        zIndex: 1100,
        borderBottom: '1px solid',
        borderColor: 'grey.200',
        py: 2 
      }}>
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'inherit' }}>
            <LocalHospitalIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', lineHeight: 1 }}>ZYENTRIC</Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', letterSpacing: 2 }}>HEALTHCARE</Typography>
            </Box>
          </Box>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Typography 
                key={link.label}
                component={RouterLink} 
                to={link.path}
                sx={{ 
                  fontWeight: 600, 
                  color: 'text.primary',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button component={RouterLink} to="/portal" variant="outlined" color="primary" sx={{ borderRadius: 2 }}>
              Patient Portal
            </Button>
            <Button component={RouterLink} to="/appointments" variant="contained" color="primary" sx={{ borderRadius: 2 }}>
              Book Appointment
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton sx={{ display: { xs: 'block', md: 'none' }, color: 'primary.main' }} onClick={toggleDrawer(true)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocalHospitalIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>ZYENTRIC</Typography>
          </Box>
          <Divider />
          <List>
            {navLinks.map((link) => (
              <ListItemButton key={link.label} component={RouterLink} to={link.path}>
                <ListItemText primary={link.label} sx={{ color: 'text.primary', '& .MuiTypography-root': { fontWeight: 600 } }} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button component={RouterLink} to="/portal" variant="outlined" fullWidth color="primary" sx={{ borderRadius: 2 }}>
              Patient Portal
            </Button>
            <Button component={RouterLink} to="/appointments" variant="contained" fullWidth color="primary" sx={{ borderRadius: 2 }}>
              Book Appointment
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;

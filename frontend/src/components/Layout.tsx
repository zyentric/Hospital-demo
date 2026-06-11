import { useState, useEffect } from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import { 
  AppBar, Toolbar, Typography, Button, Container, Box, 
  CssBaseline, IconButton, useTheme, useMediaQuery,
  Drawer, List, ListItem, Divider, Grid
} from '@mui/material';
import { Menu as MenuIcon, LocalHospital, Phone } from '@mui/icons-material';
import { siteConfig } from '../config/siteConfig';

export const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Contact', path: '/contact' },
    { label: 'Book Appointment', path: '/booking' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ my: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, fontWeight: 'bold' }}>
        <LocalHospital color="secondary" />
        {siteConfig.hospitalName}
      </Typography>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} component={RouterLink} to={item.path} sx={{ color: 'inherit', textDecoration: 'none', py: 2 }}>
            <Typography sx={{ 
              fontWeight: location.pathname === item.path ? 700 : 500,
              color: location.pathname === item.path ? 'secondary.main' : 'inherit',
              width: '100%',
              textAlign: 'center'
            }}>
              {item.label}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3, bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="subtitle2" gutterBottom>Emergency</Typography>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Phone fontSize="small" /> {siteConfig.emergencyPhone}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar 
        component="nav" 
        position="fixed" 
        sx={{
          background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease-in-out',
          py: scrolled ? 0.5 : 1
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' }, color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
            
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'inherit' }} component={RouterLink} to="/">
              <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'secondary.main', color: 'white', display: 'flex' }}>
                <LocalHospital />
              </Box>
              <Typography variant="h5" component="div" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '-0.02em' }}>
                {siteConfig.hospitalName}
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.path} 
                    component={RouterLink} 
                    to={item.path}
                    sx={{ 
                      px: 2,
                      py: 1,
                      color: location.pathname === item.path ? 'secondary.main' : 'text.primary',
                      fontWeight: location.pathname === item.path ? 700 : 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: location.pathname === item.path ? '20px' : '0px',
                        height: '3px',
                        bgcolor: 'secondary.main',
                        borderRadius: 2,
                        transition: 'width 0.3s ease'
                      },
                      '&:hover::after': {
                        width: '20px'
                      },
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: 'secondary.main'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Box sx={{ ml: 2, pl: 3, borderLeft: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone color="secondary" />
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1 }}>Emergency</Typography>
                    <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 700 }}>{siteConfig.emergencyPhone}</Typography>
                  </Box>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, borderRight: 'none', boxShadow: '20px 0 40px rgba(0,0,0,0.05)' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', pt: '80px' }}>
        <Outlet />
      </Box>

      <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', pt: 10, pb: 4, mt: 'auto' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ mb: 8 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold' }}>
                <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'secondary.main', color: 'white', display: 'flex' }}>
                  <LocalHospital />
                </Box>
                {siteConfig.hospitalName}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, maxWidth: 300, lineHeight: 1.8, mt: 3 }}>
                Providing exceptional healthcare services with state-of-the-art facilities and experienced medical professionals committed to your well-being.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>Contact Information</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body2" sx={{ opacity: 0.8, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <Box component="span" sx={{ color: 'secondary.main', mt: 0.5 }}>📍</Box> {siteConfig.address}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box component="span" sx={{ color: 'secondary.main' }}>📞</Box> {siteConfig.phone}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box component="span" sx={{ color: 'secondary.main' }}>✉️</Box> {siteConfig.email}
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 4, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'secondary.light', fontWeight: 'bold' }}>24/7 Emergency</Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, color: 'white' }}>
                  {siteConfig.emergencyPhone}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>{siteConfig.workingHours}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ mb: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
          <Typography variant="body2" align="center" sx={{ opacity: 0.5 }}>
            © {new Date().getFullYear()} {siteConfig.hospitalName}. All rights reserved. (Demo Application)
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

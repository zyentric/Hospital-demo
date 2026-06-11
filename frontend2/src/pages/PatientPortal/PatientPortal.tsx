import React from 'react';
import { Box, Typography, Card, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

const PatientPortal: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      {/* Left side - Image / Branding (hidden on mobile) */}
      <Box sx={{ 
        width: { xs: '0%', md: '50%' }, 
        display: { xs: 'none', md: 'block' },
        position: 'relative',
        background: 'url(https://images.unsplash.com/photo-1551076805-e1869043e560?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80) center/cover no-repeat',
      }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(15, 76, 129, 0.6)' }} />
        <Box sx={{ position: 'relative', zIndex: 1, p: 8, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white' }}>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 4 }}>Your Health in Your Hands.</Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>Access your medical records, book appointments, and communicate with your care team seamlessly through our secure Patient Portal.</Typography>
        </Box>
      </Box>

      {/* Right side - Login Form */}
      <Box sx={{ 
        width: { xs: '100%', md: '50%' }, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        bgcolor: 'background.default',
        p: 4
      }}>
        <Card sx={{ w: '100%', maxWidth: 480, p: { xs: 4, md: 6 }, borderRadius: 4, boxShadow: 'none', bgcolor: 'transparent' }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>Welcome Back</Typography>
            <Typography variant="body1" color="text.secondary">Please enter your details to sign in.</Typography>
          </Box>
          
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField label="Patient ID or Email" variant="outlined" fullWidth />
            <TextField label="Password" variant="outlined" type="password" fullWidth />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Button variant="text" color="primary" sx={{ fontWeight: 600 }}>Forgot Password?</Button>
            </Box>

            <Button variant="contained" color="primary" size="large" fullWidth sx={{ py: 2, borderRadius: 2, mt: 2, fontSize: '1.1rem' }}>
              Secure Login
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default PatientPortal;

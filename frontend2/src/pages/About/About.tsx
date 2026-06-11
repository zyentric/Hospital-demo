import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 800 }}>About Zyentric Healthcare</Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 8, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          Leading the way in medical excellence, research, and compassionate patient care.
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 8 }}>
           <Box sx={{ width: { xs: '100%', md: 'calc(50% - 16px)' } }}>
             <Box sx={{ height: 400, borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}>
                <Box component="img" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospital Infrastructure" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </Box>
           </Box>
           <Box sx={{ width: { xs: '100%', md: 'calc(50% - 16px)' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Our Vision & Mission</Typography>
             <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
               To be the most trusted healthcare partner globally, providing world-class medical treatments with unparalleled patient safety and care. We are committed to pushing the boundaries of medical science through research and continuous innovation.
             </Typography>
             <Box sx={{ display: 'flex', gap: 4 }}>
               <Box>
                 <Typography variant="h3" color="primary" sx={{ fontWeight: 800 }}>20+</Typography>
                 <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Years of Trust</Typography>
               </Box>
               <Box>
                 <Typography variant="h3" color="primary" sx={{ fontWeight: 800 }}>50k+</Typography>
                 <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Happy Patients</Typography>
               </Box>
             </Box>
           </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default About;

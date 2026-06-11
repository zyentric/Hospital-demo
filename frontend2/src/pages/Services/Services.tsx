import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Services: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', fontWeight: 800 }}>Our Services</Typography>
        <Typography variant="h5" color="text.secondary" sx={{ textAlign: 'center', mb: 8 }}>
          Explore our wide range of medical services designed to provide comprehensive healthcare.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
           <Box sx={{ flex: '1 1 calc(33.33% - 8px)', height: 300, borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
             <Box component="img" src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Emergency Services" sx={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} />
             <Typography variant="h5" sx={{ position: 'absolute', bottom: 20, left: 20, color: 'white', fontWeight: 700 }}>Emergency Services</Typography>
           </Box>
           <Box sx={{ flex: '1 1 calc(33.33% - 8px)', height: 300, borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
             <Box component="img" src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lab Services" sx={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} />
             <Typography variant="h5" sx={{ position: 'absolute', bottom: 20, left: 20, color: 'white', fontWeight: 700 }}>Lab Services</Typography>
           </Box>
           <Box sx={{ flex: '1 1 calc(33.33% - 8px)', height: 300, borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
             <Box component="img" src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pharmacy" sx={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} />
             <Typography variant="h5" sx={{ position: 'absolute', bottom: 20, left: 20, color: 'white', fontWeight: 700 }}>Pharmacy</Typography>
           </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

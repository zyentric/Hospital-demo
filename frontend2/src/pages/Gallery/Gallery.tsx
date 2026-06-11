import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Gallery: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', fontWeight: 800 }}>Hospital Gallery</Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 8 }}>
          Take a virtual tour of our state-of-the-art facilities and modern infrastructure.
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
           {/* Masonry Layout with Images */}
           <Box sx={{ flex: '1 1 calc(50% - 8px)', height: 400, borderRadius: 4, overflow: 'hidden' }}>
             <Box component="img" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Hospital Reception" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           </Box>
           <Box sx={{ flex: '1 1 calc(50% - 8px)', display: 'flex', flexDirection: 'column', gap: 2 }}>
             <Box sx={{ height: 192, borderRadius: 4, overflow: 'hidden' }}>
                <Box component="img" src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern Equipment" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </Box>
             <Box sx={{ height: 192, borderRadius: 4, overflow: 'hidden' }}>
                <Box component="img" src="https://images.unsplash.com/photo-1551076805-e1869043e560?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Patient Care" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </Box>
           </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;

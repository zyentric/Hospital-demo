import React from 'react';
import { Box, Container, Typography, Card, TextField, Button } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', fontWeight: 800 }}>Contact Us</Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Box sx={{ width: { xs: '100%', md: 'calc(50% - 16px)' } }}>
             <Card sx={{ p: 4, borderRadius: 4, height: '100%' }}>
               <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Get In Touch</Typography>
               <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                 Have questions or need assistance? Fill out the form below and our team will contact you shortly.
               </Typography>
               <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                 <TextField label="Full Name" variant="outlined" fullWidth required />
                 <TextField label="Email Address" variant="outlined" type="email" fullWidth required />
                 <TextField label="Phone Number" variant="outlined" fullWidth />
                 <TextField label="Your Message" variant="outlined" multiline rows={4} fullWidth required />
                 <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2 }}>
                   Send Message
                 </Button>
               </Box>
             </Card>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 'calc(50% - 16px)' }, display: 'flex', flexDirection: 'column', gap: 4 }}>
             <Card sx={{ p: 4, borderRadius: 4, bgcolor: 'primary.dark', color: 'white' }}>
               <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>Contact Information</Typography>
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                 <Box>
                   <Typography variant="h6" sx={{ fontWeight: 700 }}>Emergency Service (24/7)</Typography>
                   <Typography variant="h3" color="success.main" sx={{ mt: 1 }}>+1 800 123 4567</Typography>
                 </Box>
                 <Box>
                   <Typography variant="h6" sx={{ fontWeight: 700 }}>General Inquiries</Typography>
                   <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>+1 800 987 6543</Typography>
                   <Typography variant="body1" sx={{ opacity: 0.9 }}>info@zyentrichealth.com</Typography>
                 </Box>
                 <Box>
                   <Typography variant="h6" sx={{ fontWeight: 700 }}>Hospital Address</Typography>
                   <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>123 Healthcare Avenue, Medical District<br />New York, NY 10001, USA</Typography>
                 </Box>
               </Box>
             </Card>

            <Box sx={{ flexGrow: 1, minHeight: 300, borderRadius: 4, overflow: 'hidden' }}>
              <Box component="img" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospital Location Map" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

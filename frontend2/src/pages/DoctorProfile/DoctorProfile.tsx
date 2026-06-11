import React from 'react';
import { Box, Container, Typography, Card, Button, Avatar, Chip, Divider } from '@mui/material';
import { doctors } from '../../data/dummyData';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DoctorProfile: React.FC = () => {
  // Mocking the first doctor for the profile view
  const doctor = doctors[0];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, borderRadius: 4, animation: `${fadeIn} 0.6s ease-out` }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: { xs: '100%', md: '30%' }, borderRight: { xs: 'none', md: '1px solid rgba(0,0,0,0.1)' }, pr: { md: 4 }, mb: { xs: 4, md: 0 } }}>
            <Avatar src={doctor.image} sx={{ width: 200, height: 200, mb: 3, border: '4px solid', borderColor: 'primary.light' }} />
            <Typography variant="h4" sx={{ mb: 1, fontWeight: 700, textAlign: 'center' }}>{doctor.name}</Typography>
            <Typography variant="h6" color="primary" sx={{ mb: 2 }}>{doctor.specialization}</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
              <Chip label={doctor.experience} variant="outlined" color="primary" />
              <Chip label={`Fee: $${doctor.fee}`} variant="outlined" color="success" />
            </Box>
            <Button variant="contained" color="primary" fullWidth size="large" sx={{ borderRadius: 2 }}>
              Book Appointment
            </Button>
          </Box>
          
          <Box sx={{ width: { xs: '100%', md: '70%' }, pl: { md: 4 } }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>About Doctor</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              {doctor.name} is a highly respected {doctor.specialization} with over {doctor.experience} of experience. Dedicated to providing compassionate care and utilizing the latest medical advancements to ensure the best possible outcomes for patients.
            </Typography>

            <Divider sx={{ mb: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>Qualifications</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
               <Typography variant="body1" color="text.secondary">{doctor.qualification}</Typography>
            </Box>

            <Divider sx={{ mb: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>Available Timings</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
               <Chip label={doctor.availability} color="secondary" />
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default DoctorProfile;

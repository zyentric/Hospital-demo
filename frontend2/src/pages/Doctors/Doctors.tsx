import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Avatar, Chip } from '@mui/material';
import { doctors } from '../../data/dummyData';
import { keyframes } from '@mui/system';

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
`;

const Doctors: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ animation: `${slideIn} 0.5s ease-out` }}>
          <Typography variant="h1" sx={{ mb: 2 }}>
            Our Specialists
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: 800 }}>
            Meet our team of experienced and highly qualified medical professionals dedicated to your well-being.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {doctors.map((doctor, index) => {
             const delay = `${0.1 + index * 0.15}s`;
             return (
              <Box key={doctor.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', lg: 'calc(25% - 24px)' }, animation: `${slideIn} 0.5s ease-out ${delay} both` }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 2 }}>
                  <Avatar 
                    src={doctor.image} 
                    sx={{ width: 150, height: 150, mb: 3, border: '4px solid', borderColor: 'primary.light' }} 
                  />
                  <CardContent sx={{ flexGrow: 1, p: 0, width: '100%' }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>{doctor.name}</Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 2 }}>
                      {doctor.specialization}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {doctor.qualification}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                      <Chip label={doctor.experience} size="small" variant="outlined" />
                      <Chip label={`Fee: $${doctor.fee}`} size="small" variant="outlined" />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                      <Button variant="contained" color="primary" fullWidth>
                        Book Appointment
                      </Button>
                      <Button variant="outlined" color="primary" fullWidth>
                        View Profile
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Doctors;

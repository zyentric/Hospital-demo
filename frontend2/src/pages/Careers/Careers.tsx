import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Divider } from '@mui/material';

const Careers: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center', fontWeight: 800 }}>Join Our Team</Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 8, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          Build a rewarding career at Zyentric Healthcare. We are always looking for passionate professionals.
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {[
            { title: 'Senior Cardiologist', type: 'Full-Time', exp: '10+ Years', location: 'New York' },
            { title: 'Registered Nurse (ICU)', type: 'Full-Time', exp: '3+ Years', location: 'New York' },
            { title: 'Medical Receptionist', type: 'Full-Time', exp: '1+ Years', location: 'New York' },
          ].map((job, i) => (
            <Box key={i} sx={{ width: { xs: '100%', md: 'calc(33.333% - 21.33px)' } }}>
              <Card sx={{ p: 4, borderRadius: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" color="primary" sx={{ mb: 2, fontWeight: 700 }}>{job.title}</Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                   <Typography variant="body2" sx={{ bgcolor: 'rgba(0,0,0,0.05)', px: 2, py: 1, borderRadius: 2 }}>{job.type}</Typography>
                   <Typography variant="body2" sx={{ bgcolor: 'rgba(0,0,0,0.05)', px: 2, py: 1, borderRadius: 2 }}>{job.location}</Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, flexGrow: 1 }}>
                  Experience Required: {job.exp}
                </Typography>
                <Button variant="outlined" color="primary" fullWidth sx={{ borderRadius: 2 }}>
                  Apply Now
                </Button>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Careers;

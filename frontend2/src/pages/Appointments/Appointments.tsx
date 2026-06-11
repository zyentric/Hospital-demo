import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { departments, doctors } from '../../data/dummyData';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Appointments: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="md">
        <Box sx={{ animation: `${fadeIn} 0.6s ease-out` }}>
          <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
            Book an Appointment
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
            Schedule your visit with our expert specialists quickly and easily.
          </Typography>

          <Card sx={{ p: { xs: 2, md: 4 } }}>
            <CardContent>
              <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                
                <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                  <TextField fullWidth label="Full Name" variant="outlined" required />
                </Box>
                <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                  <TextField fullWidth label="Mobile Number" variant="outlined" required />
                </Box>
                <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                  <TextField fullWidth label="Email Address" type="email" variant="outlined" />
                </Box>
                <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                  <TextField fullWidth label="Preferred Date" type="date" InputLabelProps={{ shrink: true }} required />
                </Box>

                <Box sx={{ width: '100%' }}>
                  <FormControl fullWidth required>
                    <InputLabel>Select Department</InputLabel>
                    <Select label="Select Department" defaultValue="">
                      {departments.map((dept) => (
                        <MenuItem key={dept.id} value={dept.id}>{dept.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ width: '100%' }}>
                  <FormControl fullWidth required>
                    <InputLabel>Select Doctor (Optional)</InputLabel>
                    <Select label="Select Doctor (Optional)" defaultValue="">
                      {doctors.map((doctor) => (
                        <MenuItem key={doctor.id} value={doctor.id}>{doctor.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ width: '100%' }}>
                  <TextField fullWidth label="Reason for Visit" multiline rows={4} variant="outlined" required />
                </Box>

                <Box sx={{ width: '100%', mt: 2 }}>
                  <Button variant="contained" color="primary" size="large" fullWidth sx={{ py: 2, fontSize: '1.1rem' }}>
                    Confirm Booking
                  </Button>
                </Box>

              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Appointments;

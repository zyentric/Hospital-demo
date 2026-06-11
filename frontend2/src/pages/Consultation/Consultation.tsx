import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { doctors } from '../../data/dummyData';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Consultation: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="md">
        <Box sx={{ animation: `${fadeIn} 0.5s ease-out` }}>
          <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
            Online Consultation
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
            Consult top doctors from the comfort of your home via Video or Audio call.
          </Typography>

          <Card sx={{ p: { xs: 2, md: 4 } }}>
            <CardContent>
              <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                
                <Box sx={{ width: '100%' }}>
                  <FormControl fullWidth required>
                    <InputLabel>Consultation Type</InputLabel>
                    <Select label="Consultation Type" defaultValue="">
                      <MenuItem value="video">Video Call</MenuItem>
                      <MenuItem value="audio">Audio Call</MenuItem>
                      <MenuItem value="chat">Chat Support</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ width: '100%' }}>
                  <FormControl fullWidth required>
                    <InputLabel>Select Specialist</InputLabel>
                    <Select label="Select Specialist" defaultValue="">
                      {doctors.map((doctor) => (
                        <MenuItem key={doctor.id} value={doctor.id}>
                          {doctor.name} - {doctor.specialization} (${doctor.fee})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                  <TextField fullWidth label="Preferred Date" type="date" variant="outlined" slotProps={{ inputLabel: { shrink: true } }} required />
                </Box>
                <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                  <TextField fullWidth label="Preferred Time" type="time" variant="outlined" slotProps={{ inputLabel: { shrink: true } }} required />
                </Box>

                <Box sx={{ width: '100%' }}>
                  <TextField fullWidth label="Briefly describe your symptoms" multiline rows={4} variant="outlined" required />
                </Box>

                <Box sx={{ width: '100%', mt: 2 }}>
                  <Button variant="contained" color="secondary" size="large" fullWidth sx={{ py: 2, fontSize: '1.1rem' }}>
                    Proceed to Payment & Book
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

export default Consultation;

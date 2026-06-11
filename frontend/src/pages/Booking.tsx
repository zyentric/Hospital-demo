import { useState } from 'react';
import { 
  Container, Typography, Box, TextField, MenuItem, 
  Button, Paper, Grid, Snackbar, Alert
} from '@mui/material';
import { motion } from 'framer-motion';
import { departments, doctors, timeSlots } from '../data/dummyData';

const MotionPaper = motion.create(Paper);

export const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    doctorId: '',
    date: '',
    timeSlot: '',
    notes: ''
  });
  const [success, setSuccess] = useState(false);

  const availableDoctors = formData.department 
    ? doctors.filter(d => d.specialty === formData.department)
    : doctors;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'department' ? { doctorId: '' } : {})
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSuccess(true);
      setFormData({
        name: '', email: '', phone: '', department: '',
        doctorId: '', date: '', timeSlot: '', notes: ''
      });
    }, 1000);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
      {/* Header Section */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        color: 'white', 
        pt: 12, 
        pb: 12,
        mb: -8,
        borderRadius: 2,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 0%, rgba(16,185,129,0.2) 0%, rgba(0,0,0,0) 70%)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
              Book a Consultation
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 300 }}>
              Schedule an appointment with our experts in just a few clicks.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <MotionPaper 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          elevation={0} 
          sx={{ 
            p: { xs: 4, md: 6 }, 
            borderRadius: 2,
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              {/* Patient Info */}
              <Grid size={{ xs: 12 }}>
                <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700, mb: 2 }}>
                  Patient Information
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} required variant="outlined" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
              </Grid>

              {/* Appointment Details */}
              <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700, mb: 2 }}>
                  Appointment Details
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField select fullWidth label="Department" name="department" value={formData.department} onChange={handleChange} required>
                  {departments.map(dept => (
                    <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField select fullWidth label="Doctor" name="doctorId" value={formData.doctorId} onChange={handleChange} required disabled={!formData.department && availableDoctors.length === doctors.length}>
                  {availableDoctors.map(doc => (
                    <MenuItem key={doc.id} value={doc.id}>{doc.name}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth type="date" label="Preferred Date" name="date" value={formData.date} onChange={handleChange} required slotProps={{ inputLabel: { shrink: true } }} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField select fullWidth label="Time Slot" name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
                  {timeSlots.map(slot => (
                    <MenuItem key={slot} value={slot}>{slot}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField fullWidth multiline rows={4} label="Additional Notes or Symptoms" name="notes" value={formData.notes} onChange={handleChange} />
              </Grid>

              <Grid size={{ xs: 12 }} sx={{ mt: 4 }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="secondary" 
                  size="large" 
                  fullWidth 
                  sx={{ py: 2, fontSize: '1.2rem', borderRadius: 2 }}
                >
                  Confirm Booking
                </Button>
              </Grid>
            </Grid>
          </form>
        </MotionPaper>

        <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%', fontSize: '1.1rem', py: 2, borderRadius: 2 }}>
            Your consultation request has been received! (This is a demo)
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

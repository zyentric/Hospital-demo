import { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button, Snackbar, Alert, useTheme, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { LocationOn, Phone, Email, AccessTime } from '@mui/icons-material';
import { siteConfig } from '../config/siteConfig';

const MotionPaper = motion.create(Paper);

export const Contact = () => {
  const theme = useTheme();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
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
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 70%)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 300 }}>
              We're here to answer any questions you may have.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  { icon: <LocationOn />, title: 'Address', detail: siteConfig.address },
                  { icon: <Phone />, title: 'Phone', detail: siteConfig.phone },
                  { icon: <Email />, title: 'Email', detail: siteConfig.email },
                  { icon: <AccessTime />, title: 'Working Hours', detail: siteConfig.workingHours }
                ].map((item, i) => (
                  <Paper key={i} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3, borderRadius: 2, '&:hover': { boxShadow: theme.shadows[10] } }}>
                    <Avatar sx={{ bgcolor: 'secondary.light', color: 'primary.dark', width: 56, height: 56 }}>
                      {item.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                      <Typography variant="body1" color="text.secondary">{item.detail}</Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </motion.div>
          </Grid>
          
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionPaper 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              sx={{ p: 5, borderRadius: 2, height: '100%' }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, mb: 4 }}>
                Send us a message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Your Email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth label="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth multiline rows={6} label="Your Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button type="submit" variant="contained" color="secondary" size="large" fullWidth sx={{ py: 2, fontSize: '1.1rem' }}>
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </MotionPaper>
          </Grid>
        </Grid>

        <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
          <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
            Your message has been sent successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

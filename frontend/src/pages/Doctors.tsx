
import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { doctors } from '../data/dummyData';
import { CalendarToday, StarBorder } from '@mui/icons-material';

const MotionGrid = motion.create(Grid);

export const Doctors = () => {

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
      {/* Header Section */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        color: 'white', 
        pt: 12, 
        pb: 8,
        mb: 8,
        borderRadius: 2,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 70%)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
              Our Medical Specialists
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 300 }}>
              Meet our team of experienced and dedicated healthcare professionals.
            </Typography>
          </motion.div>
        </Container>
      </Box>
      
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {doctors.map((doctor, index) => (
            <MotionGrid 
              size={{ xs: 12, sm: 6, md: 4 }} 
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)'
                }
              }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="320"
                    image={doctor.imageUrl}
                    alt={doctor.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1 }}>
                    <Chip 
                      icon={<StarBorder fontSize="small" />} 
                      label={doctor.experience} 
                      size="small" 
                      sx={{ bgcolor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', fontWeight: 'bold' }} 
                    />
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                      {doctor.name}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" color="secondary.main" sx={{ fontWeight: 600, mb: 1 }}>
                      {doctor.specialty}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {doctor.bio}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: 'text.secondary' }}>
                      <CalendarToday fontSize="small" />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>Available Days:</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
                      {doctor.availability.map((day) => (
                        <Chip key={day} label={day} size="small" sx={{ bgcolor: 'grey.100', color: 'text.primary', fontWeight: 500 }} />
                      ))}
                    </Box>
                    
                    <Button 
                      component={RouterLink} 
                      to="/booking" 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      sx={{ py: 1.5 }}
                    >
                      Book Consultation
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </MotionGrid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

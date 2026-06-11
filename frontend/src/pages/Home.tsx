import { Box, Button, Container, Typography, Grid, Card, CardContent, useTheme, Avatar, Rating } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { departments, testimonials, stats } from '../data/dummyData';
import { ArrowForward, LocalHospital, Favorite, Psychology, MedicalServices, Star, Shield, Speed, FormatQuote } from '@mui/icons-material';

const icons = [LocalHospital, Favorite, Psychology, MedicalServices];

const MotionBox = motion.create(Box);

export const Home = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #1e293b 100%)`,
        overflow: 'hidden',
        color: 'white',
      }}>
        {/* Abstract Background Shapes */}
        <Box sx={{ position: 'absolute', top: '-10%', right: '-5%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial="hidden" animate="visible" variants={containerVariants}>
                <MotionBox variants={itemVariants} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', mb: 3 }}>
                  <Star color="secondary" fontSize="small" />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>#1 Healthcare Provider</Typography>
                </MotionBox>
                
                <motion.div variants={itemVariants}>
                  <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.1 }}>
                    Next Generation <Box component="span" sx={{ color: 'secondary.main' }}>Healthcare</Box>
                  </Typography>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Typography variant="h6" sx={{ mb: 5, opacity: 0.8, fontWeight: 300, maxWidth: 500, lineHeight: 1.6 }}>
                    Experience world-class healthcare with our team of expert medical professionals and state-of-the-art facilities designed for your well-being.
                  </Typography>
                </motion.div>
                
                <MotionBox variants={itemVariants} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button 
                    component={RouterLink} 
                    to="/booking" 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{ py: 2, px: 4, fontSize: '1.1rem', borderRadius: 2 }}
                  >
                    Book Appointment
                  </Button>
                  <Button 
                    component={RouterLink} 
                    to="/doctors" 
                    variant="outlined" 
                    size="large"
                    sx={{ py: 2, px: 4, fontSize: '1.1rem', borderRadius: 2, color: 'white', borderColor: 'rgba(255,255,255,0.3)', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' } }}
                  >
                    Meet Our Doctors
                  </Button>
                </MotionBox>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <MotionBox 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                sx={{ position: 'relative' }}
              >
                <Box 
                  component="img" 
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Modern Hospital"
                  sx={{ width: '100%', borderRadius: 2, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
                />
                
                {/* Floating Elements */}
                <MotionBox 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  sx={{ position: 'absolute', top: '10%', left: '-10%', bgcolor: 'background.paper', p: 2, borderRadius: 2, boxShadow: theme.shadows[10], display: 'flex', alignItems: 'center', gap: 2, color: 'text.primary' }}
                >
                  <Avatar sx={{ bgcolor: 'success.main' }}><Shield /></Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Safe & Secure</Typography>
                    <Typography variant="body2" color="text.secondary">100% Guaranteed</Typography>
                  </Box>
                </MotionBox>
                
                <MotionBox 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  sx={{ position: 'absolute', bottom: '15%', right: '-5%', bgcolor: 'background.paper', p: 2, borderRadius: 2, boxShadow: theme.shadows[10], display: 'flex', alignItems: 'center', gap: 2, color: 'text.primary' }}
                >
                  <Avatar sx={{ bgcolor: 'secondary.main' }}><Speed /></Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Fast Recovery</Typography>
                    <Typography variant="body2" color="text.secondary">Advanced care</Typography>
                  </Box>
                </MotionBox>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 6, bgcolor: 'background.paper', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, i) => (
              <Grid size={{ xs: 6, md: 3 }} key={i}>
                <MotionBox 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  sx={{ textAlign: 'center' }}
                >
                  <Typography variant="h3" color="secondary.main" sx={{ fontWeight: 800, mb: 1 }}>{stat.value}</Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>{stat.label}</Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Departments Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h6" color="secondary" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            SPECIALTIES
          </Typography>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 8 }}>
            Our Departments
          </Typography>
        </MotionBox>
        
        <Grid container spacing={4}>
          {departments.map((dept, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={dept}>
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card sx={{ height: '100%', cursor: 'pointer' }}>
                    <CardContent sx={{ textAlign: 'center', p: 4 }}>
                      <Box sx={{ 
                        display: 'inline-flex', 
                        p: 2.5, 
                        borderRadius: 2, 
                        bgcolor: 'primary.main', 
                        color: 'white',
                        mb: 3,
                        boxShadow: '0 10px 20px -5px rgba(15, 23, 42, 0.3)'
                      }}>
                        <Icon fontSize="large" />
                      </Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {dept}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        Comprehensive care and advanced treatments specialized in {dept.toLowerCase()} using state-of-the-art technology.
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button component={RouterLink} to="/services" variant="outlined" color="primary" size="large" sx={{ borderRadius: 2 }}>
            View All Services
          </Button>
        </Box>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: 'primary.dark', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h6" color="secondary.light" gutterBottom sx={{ fontWeight: 'bold' }}>
                  WHY CHOOSE US
                </Typography>
                <Typography variant="h2" gutterBottom sx={{ mb: 4 }}>
                  We Provide The Best Quality Services
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, lineHeight: 1.8 }}>
                  Our hospital is equipped with state-of-the-art technology and staffed by expert medical professionals dedicated to your health and well-being.
                </Typography>
                
                <Grid container spacing={3}>
                  {[
                    { title: "24/7 Emergency Care", desc: "Always available when you need it." },
                    { title: "Expert Doctors", desc: "Highly qualified professionals." },
                    { title: "Modern Equipment", desc: "Latest medical technology." },
                    { title: "Affordable Prices", desc: "Quality care for everyone." }
                  ].map((item, i) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={i}>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Avatar sx={{ bgcolor: 'secondary.main' }}><Star fontSize="small" /></Avatar>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>{item.title}</Typography>
                          <Typography variant="body2" sx={{ opacity: 0.7 }}>{item.desc}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box 
                  component="img" 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Doctor with patient"
                  sx={{ width: '100%', borderRadius: 2, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography variant="h6" color="secondary" gutterBottom sx={{ fontWeight: 'bold' }}>
            TESTIMONIALS
          </Typography>
          <Typography variant="h2" gutterBottom>
            What Our Patients Say
          </Typography>
        </MotionBox>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={testimonial.id}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card sx={{ height: '100%', p: 2, position: 'relative' }}>
                  <FormatQuote sx={{ position: 'absolute', top: 20, right: 20, fontSize: 60, color: 'rgba(59,130,246,0.1)' }} />
                  <CardContent>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 3 }} />
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 4, lineHeight: 1.8 }}>
                      "{testimonial.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={testimonial.avatarUrl} alt={testimonial.name} sx={{ width: 50, height: 50 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>{testimonial.name}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* CTA Section */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 10, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 300 }}>
            Book your consultation today and take the first step towards better health.
          </Typography>
          <Button 
            component={RouterLink} 
            to="/booking" 
            variant="contained" 
            size="large"
            sx={{ bgcolor: 'white', color: 'secondary.main', py: 2, px: 6, fontSize: '1.2rem', borderRadius: 2, '&:hover': { bgcolor: 'grey.100' } }}
          >
            Book Appointment Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

export const About = () => {
  const theme = useTheme();

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
              About Us
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 300 }}>
              Committed to excellence in healthcare and patient well-being.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: 'center', mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
                To provide exceptional, patient-centered healthcare through a combination of expert medical professionals, advanced technology, and compassionate care.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
                We believe that everyone deserves access to world-class medical facilities and treatments. Our hospital was founded on the principles of integrity, excellence, and a deep commitment to the community we serve.
              </Typography>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Box 
                component="img" 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Hospital Building"
                sx={{ width: '100%', borderRadius: 2, boxShadow: theme.shadows[10] }}
              />
            </motion.div>
          </Grid>
        </Grid>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Paper sx={{ p: 6, borderRadius: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center', boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.4)' }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Our Vision
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 300, maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
              "To be the leading healthcare institution recognized globally for redefining the standards of clinical excellence, medical education, and innovative research."
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

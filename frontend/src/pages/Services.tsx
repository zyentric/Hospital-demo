import { Box, Container, Typography, Grid, Card, CardContent, useTheme, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { detailedServices } from '../data/dummyData';
import { 
  LocalHospital, Science, BabyChangingStation, 
  Healing, Scanner, MedicalServices 
} from '@mui/icons-material';

const iconMap: Record<string, any> = {
  Emergency: LocalHospital,
  Scanner: Scanner,
  Surgery: Healing,
  Science: Science,
  ChildCare: BabyChangingStation,
  Medication: MedicalServices
};

const MotionGrid = motion.create(Grid);

export const Services = () => {
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
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 0%, rgba(16,185,129,0.2) 0%, rgba(0,0,0,0) 70%)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 300 }}>
              Comprehensive medical care tailored to your needs.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {detailedServices.map((service, index) => {
            const Icon = iconMap[service.icon] || MedicalServices;
            return (
              <MotionGrid 
                size={{ xs: 12, sm: 6, md: 4 }} 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', '&:hover': { transform: 'translateY(-8px)', boxShadow: theme.shadows[8] } }}>
                  <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Avatar sx={{ bgcolor: 'secondary.light', color: 'primary.dark', width: 64, height: 64, mb: 3 }}>
                      <Icon fontSize="large" />
                    </Avatar>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionGrid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

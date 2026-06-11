import React from 'react';
import { Box, Container, Typography, Card, Button, Divider } from '@mui/material';
import { departments } from '../../data/dummyData';
import * as Icons from '@mui/icons-material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

import { useParams, Link as RouterLink } from 'react-router-dom';
const DepartmentProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Mocking: find department by id or fallback to first
  const dept = departments.find(d => d.id === id) || departments.find(d => d.name.toLowerCase() === id?.toLowerCase()) || departments[0];
  const IconComponent = (Icons as any)[dept.icon] || Icons.LocalHospital;

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        {/* Banner */}
        <Box sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          p: 6, 
          borderRadius: 4, 
          mb: 6, 
          display: 'flex', 
          alignItems: 'center', 
          gap: 4,
          animation: `${fadeIn} 0.6s ease-out`
        }}>
          <Box sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 3 }}>
            <IconComponent sx={{ fontSize: 60 }} />
          </Box>
          <Box>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>{dept.name}</Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>{dept.overview}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, animation: `${fadeIn} 0.6s ease-out 0.2s both` }}>
          <Box sx={{ width: { xs: '100%', md: 'calc(65% - 16px)' } }}>
            <Card sx={{ p: 4, borderRadius: 4, height: '100%' }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>About The Department</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                The {dept.name} department is equipped with state-of-the-art technology and staffed by internationally recognized experts. We provide comprehensive diagnostic and therapeutic services for a wide range of conditions.
              </Typography>
              
              <Divider sx={{ mb: 4 }} />

              <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Key Treatments</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {['Advanced Diagnostics', 'Minimally Invasive Surgery', 'Rehabilitation Services', '24/7 Emergency Care'].map((treatment, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                    <Icons.CheckCircle color="success" />
                    <Typography variant="body1" color="text.secondary">{treatment}</Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 'calc(35% - 16px)' } }}>
            <Card sx={{ p: 4, borderRadius: 4, bgcolor: 'primary.light', color: 'white', height: '100%' }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>Need Consultation?</Typography>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                Our expert specialists are here to help you. Book an appointment today.
              </Typography>
              <Button component={RouterLink} to="/appointments" variant="contained" color="secondary" fullWidth size="large" sx={{ borderRadius: 2, py: 1.5 }}>
                Book Appointment
              </Button>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DepartmentProfile;

import React from 'react';
import { Box, Container, Typography, Card, Button, CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { departments } from '../../data/dummyData';
import * as Icons from '@mui/icons-material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Departments: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ animation: `${fadeIn} 0.6s ease-out` }}>
          <Typography variant="h1" sx={{ mb: 2 }}>
            Our Departments
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: 800 }}>
            Comprehensive care across all major medical specialities, backed by advanced technology and experienced specialists.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {departments.map((dept, index) => {
            const IconComponent = (Icons as any)[dept.icon] || Icons.LocalHospital;
            const delay = `${0.1 + index * 0.1}s`;
            return (
              <Box key={dept.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', lg: 'calc(25% - 24px)' }, animation: `${fadeIn} 0.5s ease-out ${delay} both` }}>
                <Card sx={{ height: '100%' }}>
                  <CardActionArea component={RouterLink} to={`/departments/${dept.name.toLowerCase()}`} sx={{ height: '100%', p: 4, alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ p: 2, bgcolor: 'rgba(37, 99, 235, 0.1)', display: 'inline-flex', borderRadius: 2, mb: 3, color: 'secondary.main' }}>
                      <IconComponent fontSize="large" />
                    </Box>
                    <Typography variant="h4" sx={{ mb: 2 }}>{dept.name}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                      {dept.overview}
                    </Typography>
                    <Button variant="outlined" color="primary">
                      Learn More
                    </Button>
                  </CardActionArea>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Departments;

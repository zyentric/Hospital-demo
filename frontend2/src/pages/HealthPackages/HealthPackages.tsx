import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Divider } from '@mui/material';
import { healthPackages } from '../../data/dummyData';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { keyframes } from '@mui/system';

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HealthPackages: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Typography variant="h1" sx={{ mb: 2, textAlign: 'center' }}>
          Preventive Health Packages
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 8, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          Comprehensive health checkup plans designed to help you monitor your health proactively.
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {healthPackages.map((pkg, index) => {
            const delay = `${index * 0.15}s`;
            return (
              <Box key={pkg.id} sx={{ width: { xs: '100%', md: 'calc(33.333% - 21.33px)' }, animation: `${slideUp} 0.6s ease-out ${delay} both` }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'visible' }}>
                  {pkg.name.includes('Heart') && (
                    <Box sx={{ position: 'absolute', top: -15, right: 20, bgcolor: 'error.main', color: 'white', px: 2, py: 0.5, borderRadius: 1, fontWeight: 'bold' }}>
                      Recommended
                    </Box>
                  )}
                  <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" sx={{ mb: 1 }}>{pkg.name}</Typography>
                    <Typography variant="h3" color="primary" sx={{ mb: 3 }}>
                      ${pkg.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {pkg.benefits}
                    </Typography>
                    
                    <Divider sx={{ mb: 3 }} />
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4, flexGrow: 1 }}>
                      {pkg.features.map((feature, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CheckCircleIcon color="success" fontSize="small" sx={{ mt: 0.5 }} />
                          <Typography variant="body1">{feature}</Typography>
                        </Box>
                      ))}
                    </Box>

                    <Button variant="contained" color="primary" size="large" fullWidth>
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default HealthPackages;

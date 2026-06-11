import React from 'react';
import { Box, Container, Typography, Card, Divider } from '@mui/material';

const Insurance: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 800 }}>Insurance & Cashless TPA</Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 8, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          We partner with leading health insurance providers to ensure a seamless and hassle-free healthcare experience.
        </Typography>

        <Card sx={{ p: 6, borderRadius: 4, mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Cashless Hospitalization</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
            Zyentric Healthcare provides cashless hospitalization facilities for patients covered under recognized Third Party Administrators (TPAs) and Health Insurance companies. Our dedicated insurance desk will assist you with the pre-authorization and claims process.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Required Documents</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {['Health Insurance Card / TPA ID Card', 'Valid Photo ID (Passport, Driving License, etc.)', 'Doctor’s Recommendation / Prescription', 'Previous Medical Reports'].map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ width: 8, height: 8, bgcolor: 'primary.main', borderRadius: '50%' }} />
                <Typography variant="body1">{item}</Typography>
              </Box>
            ))}
          </Box>
        </Card>

      </Container>
    </Box>
  );
};

export default Insurance;

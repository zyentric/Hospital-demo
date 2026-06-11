import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';

const Blog: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', fontWeight: 800 }}>Health Blog & News</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {[1, 2, 3].map((item) => (
            <Box key={item} sx={{ width: { xs: '100%', md: 'calc(33.333% - 21.33px)' } }}>
              <Card sx={{ borderRadius: 4, height: '100%', overflow: 'hidden' }}>
                <Box component="img" src={`https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&random=${item}`} alt="Blog Post" sx={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="caption" color="primary" sx={{ fontWeight: 700, letterSpacing: 1 }}>HEALTH TIPS</Typography>
                  <Typography variant="h5" sx={{ my: 2, fontWeight: 700 }}>10 Ways to Improve Your Heart Health</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Discover simple lifestyle changes that can significantly boost your cardiovascular health and overall well-being.
                  </Typography>
                  <Button variant="text" color="primary" sx={{ fontWeight: 700 }}>Read Article →</Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;

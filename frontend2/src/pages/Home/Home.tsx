import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, CardMedia, CardActionArea, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as Icons from '@mui/icons-material';
import { keyframes } from '@mui/system';
import { departments, doctors } from '../../data/dummyData';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Home: React.FC = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      
      {/* SECTION 3: HERO SECTION */}
      <Box sx={{
        background: 'linear-gradient(135deg, #0F4C81 0%, #2563EB 100%)',
        color: 'white',
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Box sx={{ width: { xs: '100%', md: '60%' }, animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1)` }}>
              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 2, color: 'success.main', mb: 2, display: 'block' }}>
                TRUSTED HEALTHCARE PARTNER
              </Typography>
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 800, lineHeight: 1.1 }}>
                World-Class Medical Care For You.
              </Typography>
              <Typography variant="h5" sx={{ mb: 5, fontWeight: 400, opacity: 0.9, maxWidth: '80%' }}>
                Experience the highest standards of clinical excellence, modern technology, and compassionate patient care.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button component={RouterLink} to="/appointments" variant="contained" color="success" size="large" sx={{ py: 2, px: 4, fontSize: '1.1rem', borderRadius: 2 }}>
                  Book Appointment
                </Button>
                <Button component={RouterLink} to="/consultation" variant="outlined" color="inherit" size="large" sx={{ py: 2, px: 4, fontSize: '1.1rem', borderRadius: 2 }}>
                  Consult Online
                </Button>
              </Box>
            </Box>
            <Box sx={{ width: { xs: '100%', md: '40%' }, display: { xs: 'none', md: 'block' }, animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both` }}>
              <Box component="img" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospital Doctors" sx={{ width: '100%', borderRadius: 4, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SECTION 4: TRUST INDICATORS */}
      <Container maxWidth="xl" sx={{ mt: -6, position: 'relative', zIndex: 2, mb: 10 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, animation: `${fadeInUp} 1s ease-out 0.3s both` }}>
          {[
            { label: 'Patients Served', value: '50,000+', icon: 'People' },
            { label: 'Expert Doctors', value: '100+', icon: 'MedicalServices' },
            { label: 'Emergency', value: '24/7', icon: 'LocalHospital' },
            { label: 'Years Experience', value: '20+', icon: 'WorkspacePremium' },
          ].map((stat, i) => {
            const Icon = (Icons as any)[stat.icon];
            return (
              <Box key={i} sx={{ flex: '1 1 calc(25% - 24px)', minWidth: '220px' }}>
                <Card sx={{ textAlign: 'center', py: 4, px: 2, height: '100%', borderRadius: 2, border: 'none', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}>
                  <Icon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h3" color="text.primary" sx={{ mb: 1, fontWeight: 800 }}>{stat.value}</Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>{stat.label}</Typography>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Container>

      {/* SECTION 6: ABOUT HOSPITAL */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <Box sx={{ width: { xs: '100%', md: 'calc(50% - 32px)' } }}>
              <Box sx={{ 
                width: '100%', 
                height: 500, 
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
              }}>
                 <Box component="img" src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospital Building" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
            </Box>
            <Box sx={{ width: { xs: '100%', md: 'calc(50% - 32px)' } }}>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>ABOUT ZYENTRIC</Typography>
              <Typography variant="h2" sx={{ my: 2, fontWeight: 800 }}>
                A Legacy of Excellence in Healthcare.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Since our inception, Zyentric Healthcare has been dedicated to providing comprehensive, state-of-the-art medical services. Our mission is to heal with compassion and lead in medical innovation.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                {['Advanced Technology', 'Compassionate Care', 'NABH Accredited'].map(item => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Icons.CheckCircle color="success" />
                    <Typography variant="h6" color="text.primary">{item}</Typography>
                  </Box>
                ))}
              </Box>
              <Button component={RouterLink} to="/about" variant="contained" color="primary" size="large" sx={{ borderRadius: 2, alignSelf: 'flex-start' }}>
                Read Our Story
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SECTION 7: DEPARTMENTS */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>DEPARTMENTS</Typography>
              <Typography variant="h2" sx={{ mt: 1, fontWeight: 800 }}>
                Centers of Excellence
              </Typography>
            </Box>
            <Button component={RouterLink} to="/departments" endIcon={<ArrowForwardIcon />} sx={{ display: { xs: 'none', sm: 'flex' } }}>
              View All
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {departments.slice(0, 6).map((dept) => {
              const IconComponent = (Icons as any)[dept.icon] || Icons.LocalHospital;
              return (
                <Box key={dept.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 21.33px)' } }}>
                  <Card sx={{ height: '100%', borderRadius: 2 }}>
                    <CardActionArea component={RouterLink} to="/departments" sx={{ height: '100%', p: 4 }}>
                      <Box sx={{ p: 2, bgcolor: 'rgba(37, 99, 235, 0.1)', display: 'inline-flex', borderRadius: 2, mb: 3, color: 'secondary.main' }}>
                        <IconComponent fontSize="large" />
                      </Box>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>{dept.name}</Typography>
                      <Typography variant="body1" color="text.secondary">
                        {dept.overview}
                      </Typography>
                    </CardActionArea>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* SECTION 8: DOCTORS */}
      <Box sx={{ py: 12, bgcolor: 'background.default' }}>
        <Container maxWidth="xl">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 2, fontWeight: 800 }}>Expert Specialists</Typography>
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 8, opacity: 0.8, maxWidth: 800, mx: 'auto', color: 'text.secondary' }}>
            Meet our team of dedicated and experienced medical professionals.
          </Typography>
          
          <Box sx={{ mt: 6 }}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              style={{ paddingBottom: '60px', paddingLeft: '10px', paddingRight: '10px', paddingTop: '10px' }}
            >
              {doctors.map((doc, index) => {
                const delay = `${0.1 + index * 0.1}s`;
                return (
                  <SwiperSlide key={doc.id}>
                    <Box sx={{ animation: `${fadeInUp} 0.5s ease-out ${delay} both`, height: '100%' }}>
                      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia 
                          component="img" 
                          height="250" 
                          image={doc.image} 
                          alt={doc.name} 
                          sx={{ filter: 'grayscale(20%)', transition: 'all 0.3s ease', '&:hover': { filter: 'grayscale(0%)', transform: 'scale(1.05)' } }} 
                        />
                        <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{doc.name}</Typography>
                          <Typography variant="body2" color="primary" sx={{ fontWeight: 700, mb: 2, letterSpacing: 1 }}>{doc.specialization}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{doc.experience} Years Experience</Typography>
                          <Button component={RouterLink} to={`/doctors/${doc.id}`} variant="outlined" color="primary" fullWidth sx={{ borderRadius: 2 }}>
                            View Profile
                          </Button>
                        </CardContent>
                      </Card>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Container>
      </Box>

      {/* Section: Testimonials Showcase */}
      <Box sx={{ py: 12, bgcolor: 'primary.dark', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="xl">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 2, fontWeight: 800 }}>Patient Stories</Typography>
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 8, opacity: 0.8, maxWidth: 800, mx: 'auto' }}>
            Hear from our patients who have experienced our world-class healthcare services.
          </Typography>
          
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="mySwiper"
            >
              {[
                { name: 'Sarah Jenkins', text: 'The care I received was absolutely phenomenal. The doctors are incredibly knowledgeable and the staff is so compassionate.', rating: 5 },
                { name: 'Michael Chen', text: 'From the moment I walked in, I felt at ease. The facilities are top-notch and the entire process was seamless.', rating: 5 },
                { name: 'David Smith', text: 'I had a complex surgery and the team here saved my life. I cannot thank them enough for their expertise and dedication.', rating: 5 },
              ].map((testimonial, i) => (
                <SwiperSlide key={i}>
                  <Card sx={{ 
                    p: 6, 
                    borderRadius: 6, 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <Typography variant="h1" sx={{ color: 'secondary.light', opacity: 0.5, lineHeight: 0.5, mb: 4 }}>"</Typography>
                    <Typography variant="h6" sx={{ mb: 4, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.8 }}>
                      {testimonial.text}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.light' }}>{testimonial.name}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mt: 1 }}>
                       {[...Array(testimonial.rating)].map((_, index) => (
                         <Icons.Star key={index} sx={{ color: '#FBBF24', fontSize: 20 }} />
                       ))}
                    </Box>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Box>

      {/* SECTION 10: ONLINE CONSULTATION BANNER */}
      <Box sx={{ py: 10, bgcolor: 'secondary.main', color: 'white' }}>
        <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 800 }}>Consult Doctors Online</Typography>
          <Typography variant="h5" sx={{ mb: 5, opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
            Get expert medical advice from the comfort of your home. Video, audio, and chat consultations available.
          </Typography>
          <Button component={RouterLink} to="/consultation" variant="contained" color="success" size="large" sx={{ py: 2, px: 6, fontSize: '1.2rem', borderRadius: 2 }}>
            Start Consultation Now
          </Button>
        </Container>
      </Box>

      {/* SECTION 14: FAQ */}
      <Box sx={{ py: 12, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', fontWeight: 800 }}>Frequently Asked Questions</Typography>
          {[
            { q: 'How do I book an appointment?', a: 'You can book an appointment through our online portal, mobile app, or by calling our 24/7 helpline.' },
            { q: 'Do you accept insurance?', a: 'Yes, we are partnered with all major health insurance providers and offer cashless facilities.' },
            { q: 'What are your visiting hours?', a: 'General visiting hours are 4 PM to 7 PM. ICU visiting is restricted to immediate family members from 11 AM to 12 PM.' }
          ].map((faq, i) => (
            <Accordion key={i} sx={{ mb: 2, borderRadius: 2, '&:before': { display: 'none' }, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* SECTION 15: CONTACT STRIP */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, bgcolor: 'white', p: 6, borderRadius: 4, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}>
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>Get In Touch</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Have questions or need assistance? Fill out the form below and our team will contact you shortly.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Your Name" variant="outlined" fullWidth />
                <TextField label="Your Email" variant="outlined" fullWidth />
                <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
                <Button variant="contained" color="primary" size="large" sx={{ alignSelf: 'flex-start', borderRadius: 2 }}>
                  Send Message
                </Button>
              </Box>
            </Box>
            <Box sx={{ width: { xs: '100%', md: 'calc(50% - 16px)' } }}>
              <Box sx={{ height: '100%', minHeight: 400, borderRadius: 4, overflow: 'hidden' }}>
                 <Box component="img" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospital Location Map" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
};

export default Home;

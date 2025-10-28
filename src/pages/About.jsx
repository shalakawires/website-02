import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import useTitle from '../hooks/useTitle';

function About() {
  useTitle('About Shalaka Wires | Shalaka Wires', 'Discover Shalaka Wires, a leading wire manufacturer dedicated to innovation, quality, and sustainable practices. Learn about our advanced technology and commitment to customer satisfaction.');

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#005a9e' }}>About Shalaka Wires</Typography>
          <Typography variant="body1" paragraph textAlign="center" sx={{color:'#555', fontSize:'1.1rem', lineHeight:'1.6'}}>At Shalaka Wires, we are a trusted manufacturer of high-quality wire products known for their strength, reliability, and versatility. With over 20 years of experience in the steel and wire drawing industry, our team is dedicated to maintaining the highest standards of quality and trust in every product we deliver. Each wire is crafted to ensure durability, precision, and long-lasting performance. Supported by a state-of-the-art manufacturing facility, rigorous quality checks, and a customer-first approach, Shalaka Wires is committed to building enduring relationships founded on integrity, dependability, and excellence.</Typography>
        </Box>

        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{color:'#005a9e', fontSize:'2rem', fontWeight:'bold'}}>Mission</Typography>
          <Typography variant="body1" paragraph textAlign="center" sx={{color:'#555', fontSize:'1.1rem', lineHeight:'1.6'}}>Our mission is to deliver top-quality wire products that stand for quality, consistency, and trust. We are committed to maintaining the highest standards of quality through advanced manufacturing and continuous improvement. With every product, we aim to ensure reliability and long-lasting performance, building lasting relationships grounded in excellence and integrity.</Typography>
        </Box>

        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{color:'#2E8B57', fontSize:'2rem', fontWeight:'bold'}}>Our Green Energy Commitment</Typography>
          <Typography variant="body1" paragraph textAlign="center" sx={{color:'#555', fontSize:'1.1rem', lineHeight:'1.6'}}>At Shalaka Wires, we believe that industrial growth must go hand-in-hand with environmental responsibility. In line with India’s ambitious green energy initiatives and the national goal of achieving net-zero carbon emissions by 2070, we are proud to announce the installation of a solar rooftop at our facility. This step significantly reduces our carbon footprint and supports the transition to renewable energy sources. By embracing solar energy, we are not only lowering our carbon emissions but also contributing to a cleaner, more sustainable future for generations to come.</Typography>
          <Box
            component="img"
            src="/plant-images/Solar Rooftop - 1.jpg"
            alt="Solar Rooftop"
            loading="lazy"
            sx={{
              width: { xs: '90%', md: '40%' },
              marginTop: '2rem',
              borderRadius: '8px'
            }}
          />
        </Box>
    </Container>
  );
}

export default About;

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Shalaka Wires LLP is a leading manufacturer of high-quality MS wire products. 
          With years of experience in the industry, we are committed to providing our 
          customers with superior products and excellent service.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to be a reliable partner for our clients, offering a diverse 
          range of wire products that meet stringent quality standards. We believe in 
          innovation, customer satisfaction, and sustainable practices.
        </Typography>
        <Typography variant="body1" paragraph>
          Our product portfolio includes binding wire, MS wire nails, GI wire, chain link, mesh, and various other customized wire solutions.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;

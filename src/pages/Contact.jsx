import React from 'react';
import { Box, Typography, Container, Grid, Paper, IconButton, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import useTitle from '../hooks/useTitle';

function Contact() {
  useTitle('Contact Us | Shalaka Wires', 'Ready to start your project? Contact Shalaka Wires today for a personalized quote or to get answers to your questions. We\'re here to help!');

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    mb: 3,
  };

  const iconStyle = {
    mr: 2,
    color: 'primary.main',
  };

  const socialIconStyle = {
    color: 'primary.main',
    '&:hover': {
        transform: 'scale(1.1)'
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#005a9e' }}>
            Get in Touch
        </Typography>
        <Typography variant="h6" color="text.secondary">
            For any inquiries, quotes, or business-related matters, please contact us using the information below.
        </Typography>
      </Box>

      <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Contact Information
              </Typography>
              <Box>
                  <Box sx={contactItemStyle}>
                      <PhoneIcon sx={iconStyle} />
                      <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>Phone</Typography>
                          <Link href="tel:+919822767618" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>+91 98227 67618</Link><br/>
                          <Link href="tel:+919158724723" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>+91 91587 24723</Link>
                      </Box>
                  </Box>
                  <Box sx={contactItemStyle}>
                      <EmailIcon sx={iconStyle} />
                      <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>Email</Typography>
                          <Link href="mailto:shalakawires@gmail.com" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>shalakawires@gmail.com</Link>
                      </Box>
                  </Box>
                  <Box sx={contactItemStyle}>
                      <LocationOnIcon sx={iconStyle} />
                      <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>Address</Typography>
                          <Link href="https://maps.app.goo.gl/E17aAP5yyYJAyyML8" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                          Plot No. E-48, Phase II, Add. MIDC Area, Jalna, Maharashtra
                          </Link>
                      </Box>
                  </Box>
              </Box>
          </Grid>
          <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Follow Us
              </Typography>
              <Box>
                  <IconButton component="a" href="https://www.facebook.com/shalakawires" target="_blank" sx={{...socialIconStyle, '&:hover': {...socialIconStyle['&:hover'], color: '#1877F2'}}}>
                      <Facebook />
                  </IconButton>
                  <IconButton component="a" href="https://x.com/shalakawires" target="_blank" sx={{...socialIconStyle, '&:hover': {...socialIconStyle['&:hover'], color: '#1DA1F2'}}}>
                      <XIcon />
                  </IconButton>
                  <IconButton component="a" href="https://instagram.com/shalakawires" target="_blank" sx={{...socialIconStyle, '&:hover': {...socialIconStyle['&:hover'], color: '#E4405F'}}}>
                      <Instagram />
                  </IconButton>
                  <IconButton component="a" href="https://www.linkedin.com/company/shalaka-wires-llp" target="_blank" sx={{...socialIconStyle, '&:hover': {...socialIconStyle['&:hover'], color: '#0A66C2'}}}>
                      <LinkedIn />
                  </IconButton>
              </Box>
          </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;

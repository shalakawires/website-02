import React from 'react';
import { Box, Typography, Container, Grid, Paper, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';

function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        Contact Us
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
        For any queries or purchasing our product, contact us through the details below.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Typography variant="body1">
                    <a href="tel:+919822767618">+91 98227 67618</a>, <a href="tel:+919158724723">+91 91587 24723</a>
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Typography variant="body1">
                    <a href="mailto:shalakawires@gmail.com">shalakawires@gmail.com</a>
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                <Typography variant="body1">
                    <a href="https://maps.app.goo.gl/E17aAP5yyYJAyyML8" target="_blank" rel="noopener noreferrer">
                    Plot No. E-48, Phase II, Add. MIDC Area, Jalna, Maharashtra
                    </a>
                </Typography>
            </Box>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
                <IconButton href="https://www.facebook.com/shalakawires" target="_blank" color="primary" sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}>
                    <Facebook />
                </IconButton>
                <IconButton href="https://x.com/shalakawires" target="_blank" color="primary" sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}>
                    <XIcon />
                </IconButton>
                <IconButton href="https://instagram.com/shalakawires" target="_blank" color="primary" sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}>
                    <Instagram />
                </IconButton>
                <IconButton href="https://www.linkedin.com/company/shalaka-wires-llp" target="_blank" color="primary" sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}>
                    <LinkedIn />
                </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
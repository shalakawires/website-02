import React from "react";
import { Box, Container, Typography, IconButton, Grid, Link, Stack, Divider } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Home as HomeIcon, Info as InfoIcon, Category as CategoryIcon, AssignmentTurnedIn as QualityIcon, ContactMail as ContactMailIcon, Email, Phone, LocationOn } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "grey.900",
        color: "white",
        py: 1, // Further reduced padding
        borderTop: "1px solid",
        borderColor: "grey.800",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={0.5}> {/* Further reduced margin-bottom */}
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "white", fontFamily: "Montserrat, sans-serif", textTransform: "uppercase" }}>
            Shalaka Wires LLP
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Wires that Bind Excellence.
          </Typography>
        </Box>

        <Divider sx={{ bgcolor: "grey.700", mb: 1 }} /> {/* Reduced margin-bottom */}

        <Grid container spacing={2} justifyContent="space-around"> {/* Reduced spacing */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Stack spacing={0.5} mt={1}> {/* Reduced spacing and margin-top */}
              <Link component={RouterLink} to="/" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                <HomeIcon sx={{ mr: 1, fontSize: 18 }} /> Home
              </Link>
              <Link component={RouterLink} to="/about" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                <InfoIcon sx={{ mr: 1, fontSize: 18 }} /> About Us
              </Link>
              <Link component={RouterLink} to="/products" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                <CategoryIcon sx={{ mr: 1, fontSize: 18 }} /> Products
              </Link>
              <Link component={RouterLink} to="/quality" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                <QualityIcon sx={{ mr: 1, fontSize: 18 }} /> Quality
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                <ContactMailIcon sx={{ mr: 1, fontSize: 18 }} /> Contact Us
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Stack spacing={0.5} mt={1}> {/* Reduced spacing and margin-top */}
              <Typography variant="body2" sx={{ color: "grey.400", display: 'flex', alignItems: 'center' }}>
                <Email sx={{ mr: 1, fontSize: 18 }} /> shalakawires@gmail.com
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400", display: 'flex', alignItems: 'center' }}>
                <Phone sx={{ mr: 1, fontSize: 18 }} /> +91 98227 67618, +91 91587 24723
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400", display: 'flex', alignItems: 'flex-start', mt: 0.5 }}> {/* Reduced margin-top */}
                <LocationOn sx={{ mr: 1, fontSize: 18 }} /> <b>Factory Address:</b> Plot No. E-48, Phase II, Add. MIDC Area, Jalna, Maharashtra
              </Typography>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}> {/* Reduced margin-top */}
              <IconButton
                href="https://www.facebook.com/shalakawires"
                target="_blank"
                color="inherit"
                aria-label="Facebook"
                sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://x.com/shalakawires"
                target="_blank"
                color="inherit"
                aria-label="X (Twitter)"
                sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com/shalakawires"
                target="_blank"
                color="inherit"
                aria-label="Instagram"
                sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/company/shalaka-wires-llp"
                target="_blank"
                color="inherit"
                aria-label="LinkedIn"
                sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Box mt={1} textAlign="center"> {/* Further reduced margin-top */}
          <Typography variant="body2" sx={{ color: "grey.500" }}>
            © {new Date().getFullYear()} Shalaka Wires LLP. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

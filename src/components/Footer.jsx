
import React from "react";
import { Box, Container, Typography, IconButton, Grid, Link } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "grey.900",
        color: "white",
        py: 6,
        borderTop: "1px solid",
        borderColor: "grey.800",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Shalaka Wires LLP
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.400" }}>
              Wires that Bind Excellence.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Link component={RouterLink} to="/" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Home</Link>
            <Link component={RouterLink} to="/about" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>About Us</Link>
            <Link component={RouterLink} to="/products" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Products</Link>
            <Link component={RouterLink} to="/quality" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Quality</Link>
            <Link component={RouterLink} to="/contact" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Contact Us</Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.400" }}>
              Email: shalakawires@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.400" }}>
              Phone: +91 98227 67618, +91 91587 24723
            </Typography>
             <Typography variant="body2" sx={{ color: "grey.400", mt: 1 }}>
              <b>Factory Address:</b> Plot No. E-48, Phase II, Add. MIDC Area, Jalna, Maharashtra
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Follow Us
            </Typography>
            <IconButton
              href="https://www.facebook.com/shalakawires"
              target="_blank"
              color="inherit"
              sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://x.com/shalakawires"
              target="_blank"
              color="inherit"
              sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              href="https://instagram.com/shalakawires"
              target="_blank"
              color="inherit"
              sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/company/shalaka-wires-llp"
              target="_blank"
              color="inherit"
              sx={{ transition: "transform 0.2s", "&:hover": { transform: "scale(1.1)" } }}
            >
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" sx={{ color: "grey.500" }}>
            © {new Date().getFullYear()} Shalaka Wires LLP. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

import React from "react";
import { Box, Container, Typography, IconButton, Grid, Link, Stack, Divider } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Home as HomeIcon, Info as InfoIcon, Category as CategoryIcon, AssignmentTurnedIn as QualityIcon, ContactMail as ContactMailIcon, Email, Phone, LocationOn } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import { Link as RouterLink } from 'react-router-dom';

const products = [
  { name: 'MS Wire' },
  { name: 'Shalaka Binding Wire' },
  { name: 'MS Wire Nails' },
  { name: 'Galvanized Wire' },
  { name: 'Chain Link Fence' },
  { name: 'Barbed Wire' },
  { name: 'MS Weld Mesh' },
  { name: 'Fine Galvanized Wire' },
  { name: 'HB Wire' },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "grey.900",
        color: "white",
        py: 1,
        borderTop: "1px solid",
        borderColor: "grey.800",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={0.5}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "white", fontFamily: "Montserrat, sans-serif", textTransform: "uppercase" }}>
            Shalaka Wires LLP
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Wires that Bind Excellence.
          </Typography>
        </Box>

        <Divider sx={{ bgcolor: "grey.700", mb: 1 }} />

        <Grid container spacing={2} justifyContent="space-around">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Stack spacing={0.5} mt={1}>
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
              Products Link
            </Typography>
            <Stack spacing={0.5} mt={1}>
              {products.map((product) => (
                <Link key={product.name} component={RouterLink} to={`/product/${encodeURIComponent(product.name)}`} color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  {product.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Get In Touch
            </Typography>
            <Stack spacing={1} mt={1}>
              <Link href="mailto:shalakawires@gmail.com" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                <Email sx={{ mr: 1, fontSize: 18 }} /> shalakawires@gmail.com
              </Link>
              <Typography color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone sx={{ mr: 1, fontSize: 18 }} />
                <Link href="tel:+919822767618" color="inherit" sx={{textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>+91 98227 67618</Link>,&nbsp;
                <Link href="tel:+919158724723" color="inherit" sx={{textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>+91 91587 24723</Link>
              </Typography>
              <Link href="https://www.google.com/maps/search/?api=1&query=Plot+No.+E-48,+Phase+II,+Add.+MIDC+Area,+Jalna,+Maharashtra" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ display: 'flex', alignItems: 'flex-start', mt: 0.5, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                <LocationOn sx={{ mr: 1, fontSize: 18 }} /> Plot No. E-48, Phase II, Add. MIDC Area, Jalna, Maharashtra
              </Link>
            </Stack>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mt: 2 }}>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
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

        <Box mt={1} textAlign="center">
          <Typography variant="body2" sx={{ color: "grey.500" }}>
            © {new Date().getFullYear()} Shalaka Wires LLP. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

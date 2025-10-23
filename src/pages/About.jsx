import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import useTitle from '../hooks/useTitle';

function About() {
  useTitle('About Us | Shalaka Wires', 'Discover Shalaka Wires, a leading wire manufacturer dedicated to innovation, quality, and sustainable practices. Learn about our advanced technology and commitment to customer satisfaction.');
  const keyMachinesRef = useRef(null);

  const plantImages = {
    SLM: {
      title: "SLM",
      images: ["/plant-images/SLM-1.jpg", "/plant-images/SLM-2.jpg", "/plant-images/SLM-3.jpg"],
      description: "Our State-of-the-Art SLM (Straight Line Machine) is crucial for precision wire drawing, enabling us to produce wires with exact diameters and superior surface finishes. This machine ensures consistency and high quality for all our fine wire products."
    },
    FineWireDrawingOTO: {
      title: "Fine Wire Drawing OTO",
      images: ["/plant-images/Fine Wire Drawing OTO - 1.jpg", "/plant-images/Fine Wire Drawing OTO - 2.jpg", "/plant-images/Fine Wire Drawing OTO - 3.jpg"],
      description: "The Fine Wire Drawing OTO machine is designed for drawing fine gauge wires with exceptional accuracy and speed. It plays a vital role in manufacturing specialized wires that require meticulous dimensions and strength."
    },
    PitTypeInductionFurnace: {
      title: "Pit Type Induction Furnace",
      images: ["/plant-images/Induction Furnace - 1.jpg", "/plant-images/Induction Furnace - 2.jpg"],
      description: "The Pit Type Induction Furnace is integral to our annealing (heat treatment) process, providing uniform heating for wire coils. This ensures optimal metallurgical properties, enhancing the strength and ductility of our wires."
    },
    NitrogenFurnace: {
      title: "Nitrogen Furnace",
      images: ["/plant-images/Nitrogen Furnace - 1.jpg"],
      description: "Our Nitrogen Furnace is utilized for specialized heat treatments in a controlled inert atmosphere, preventing oxidation and decarburization. This process is crucial for producing wires with a bright finish and enhanced mechanical properties, meeting high-performance requirements."
    },
    HighSpeedNailMachine: {
      title: "High Speed Nail Machine",
      images: ["/plant-images/High Speed Nail Machine - 1.jpg"],
      description: "The High Speed Nail Machine is engineered for rapid and efficient production of various types of MS wire nails. Its advanced capabilities ensure consistent nail geometry, sharpness, and strength, catering to diverse construction and industrial needs."
    },
    AutomaticChainLinkFencingMachine: {
      title: "Automatic Chain Link Fencing Machine",
      images: ["/plant-images/Automatic Chain Link Fencing Machine - 1.jpg"],
      description: "This machine automates the production of chain link fencing, ensuring high output and consistent quality. It is a key part of our capacity to deliver large orders for fencing products."
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#005a9e' }}>About Us</Typography>
          <Typography variant="body1" paragraph textAlign="justify">Shalaka Wires LLP is a leading manufacturer of high-quality MS wire products. With years of experience in the industry, we are committed to providing our customers with superior products and excellent service.</Typography>
          <Typography variant="body1" paragraph textAlign="justify">Our mission is to be a reliable partner for our clients, offering a diverse range of wire products that meet stringent quality standards. We believe in innovation, customer satisfaction, and sustainable practices.</Typography>
          <Typography variant="body1" paragraph textAlign="justify">Our product portfolio includes MS Wire, Shalaka Binding Wire, MS Wire Nails, Galvanized Wire, Chain Link Fence, Barbed Wire, MS Weld Mesh, Fine Galvanized Wire, HB Wire, etc.</Typography>
        </Box>

      <Box sx={{ my: 2 }} ref={keyMachinesRef} id="key-machines">
        <Typography variant="h2" component="h2" gutterBottom sx={{ textAlign: 'center', color: '#005a9e', mb: 4, fontSize: '2rem', fontWeight: 'bold' }}>Key Machines in Our Production Process</Typography>
        <Grid container spacing={4} justifyContent="center">
          {Object.keys(plantImages).map((machine) => (
            <Grid item xs={12} sm={6} md={6} key={machine} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, maxWidth: 530 }}>
                <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false} showIndicators={false}>
                  {plantImages[machine].images.map((image, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      sx={{ height: 400, objectFit: 'contain', width: '100%' }}
                      image={image}
                      alt={`${machine} ${index + 1}`}
                      loading="lazy"
                    />
                  ))}
                </Carousel>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
                  <Typography variant="h6" component="h3" textAlign="center" gutterBottom sx={{ height: '3em' }}>{plantImages[machine].title}</Typography>
                  <Typography variant="body2" textAlign="justify">{plantImages[machine].description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{color:'#2E8B57', fontSize:'2rem', fontWeight:'bold'}}>Our Green Energy Commitment</Typography>
          <Typography variant="body1" paragraph textAlign="justify" sx={{color:'#555', fontSize:'1.1rem', lineHeight:'1.6'}}>At Shalaka Wires, we believe that industrial growth must go hand-in-hand with environmental responsibility. In line with India’s ambitious green energy initiatives and the national goal of achieving net-zero carbon emissions by 2070, we are proud to announce the installation of a rooftop solar power plant at our facility. This step significantly reduces our carbon footprint and supports the transition to renewable energy sources. By embracing solar energy, we are not only lowering our carbon emissions but also contributing to a cleaner, more sustainable future for generations to come.</Typography>
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

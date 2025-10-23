import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Card, CardMedia, CardContent, IconButton, useMediaQuery, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { gsap } from 'gsap';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import useTitle from '../hooks/useTitle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const featuredProducts = [
  {
    name: 'MS Wire',
    image: '/product-images/binding wire-2.png',
  },
  {
    name: 'Shalaka Binding Wire',
    image: '/product-images/binding-wire.png',
  },
  {
    name: 'Galvanized Wire',
    image: '/product-images/GI-wire.png',
  },
  {
    name: 'MS Wire Nails',
    image: '/product-images/ms-nails.png',
  },
  {
    name: 'Chain Link Fence',
    image: '/product-images/chain link.png',
  },
  {
    name: 'Barbed Wire',
    image: '/product-images/barbed-wire.png',
  },
  {
    name: 'MS Weld Mesh',
    image: '/product-images/MS-weld-mesh.jpg',
  },
  {
    name: 'Fine Galvanized Wire',
    image: '/product-images/fine-GI-wire.jpg',
  },
  {
    name: 'HB Wire',
    image: '/product-images/HB-wire.jpg',
  },
];

function Home() {
  useTitle('High-Quality MS Wire, GI Wire & MS Wire Nails Manufacturer in India | Shalaka Wires', 'Discover high-strength binding wires, durable galvanized wires, and more from a leading manufacturer. Get a quote today for your industrial needs.');
  const featuredProductsRef = useRef(null);
  const heroTextRef = useRef(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (heroTextRef.current) {
      gsap.fromTo(heroTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }
  }, []);

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <IconButton onClick={onClickHandler} title={label} aria-label="Previous slide" style={{ position: 'absolute', zIndex: 2, top: 'calc(50% - 15px)', left: 15, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <ArrowBackIos />
      </IconButton>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <IconButton onClick={onClickHandler} title={label} aria-label="Next slide" style={{ position: 'absolute', zIndex: 2, top: 'calc(50% - 15px)', right: 15, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <ArrowForwardIos />
      </IconButton>
    );

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'grey.900',
          color: 'white',
          py: 8,
          textAlign: 'center',
          position: 'relative',
          minHeight: '35vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/factory.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
            zIndex: 1,
          },
          '> *': {
            position: 'relative',
            zIndex: 2,
          }
        }}
      >
        <Container maxWidth="md">
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Container sx={{ py: 8, position: 'relative' }} maxWidth="lg" ref={featuredProductsRef}>
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#005a9e', cursor: 'pointer' }}>
            Featured Products
          </Typography>
        </Link>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          centerMode={!isMobile}
          centerSlidePercentage={isMobile ? 100 : 33.33}
          stopOnHover={true}
          transitionTime={1000}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
          showIndicators={false}
        >
          {featuredProducts.map((product) => (
            <Box key={product.name} sx={{ p: 2 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Link to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 250, 
                      objectFit: 'contain',
                    }}
                    image={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" textAlign="center">
                      {product.name}
                    </Typography>
                  </CardContent>
                </Link>
                <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2, mt: 'auto' }}>
                  <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        borderRadius: '50px',
                        padding: '10px 25px',
                        fontWeight: 'bold',
                        color: '#fff',
                        background: 'linear-gradient(to right, var(--secondary-grey), var(--secondary-grey-light))',
                        boxShadow: '0 3px 5px 2px rgba(65, 64, 66, .3)',
                        transition: 'background 0.3s, transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          background: 'linear-gradient(to right, var(--secondary-grey-light), var(--secondary-grey))',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 10px 4px rgba(65, 64, 66, .3)',
                        },
                      }}
                    >
                      Request Quote
                    </Button>
                  </Link>
                </Box>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}

export default Home;

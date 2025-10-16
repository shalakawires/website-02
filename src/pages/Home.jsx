
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const featuredProducts = [
  {
    name: 'GI Wire',
    image: '/product-images/GI-wire.png',
  },
  {
    name: 'MS Nails',
    image: '/product-images/ms-nails.png',
  },
  {
    name: 'Chain Link',
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
    name: 'Binding Wire',
    image: '/product-images/binding-wire.png',
  },
];

function Home() {
  const featuredProductsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      featuredProductsRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
       <style>
        {`
          .carousel .control-arrow, .carousel.carousel-slider .control-arrow {
            background: rgba(0, 0, 0, 0.5) !important;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            top: 50% !important;
            transform: translateY(-50%);
          }
          .carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {
            border-top-width: 10px;
            border-bottom-width: 10px;
            border-left-width: 10px;
            border-right-width: 10px;
          }
          .carousel .dot {
            background: #9e9e9e !important;
            width: 12px !important;
            height: 12px !important;
            border-radius: 50% !important;
            box-shadow: none !important;
            opacity: 0.5 !important;
          }
          .carousel .dot.selected, .carousel .dot:hover {
            background: #3f51b5 !important;
            opacity: 1 !important;
          }
          .carousel .control-dots {
            bottom: -40px !important;
          }
        `}
      </style>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'grey.900',
          color: 'white',
          py: 12,
          textAlign: 'center',
          position: 'relative',
          minHeight: '25vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
            opacity: 0.3,
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
      <Container sx={{ py: 8 }} maxWidth="lg" ref={featuredProductsRef}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
          Featured Products
        </Typography>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          centerMode={true}
          centerSlidePercentage={33.33}
          stopOnHover={false}
          transitionTime={1000}
        >
          {featuredProducts.map((product) => (
            <Box key={product.name} sx={{ p: 2 }}>
              <Card sx={{ height: 300, display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 250, 
                    objectFit: 'contain',
                  }}
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
                  <Typography gutterBottom variant="h6" component="h2" textAlign="center">
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Container>
      
      {/* Explore Products Button */}
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Button variant="contained" color="primary" size="large" component={Link} to="/products">
          Explore Our Products
        </Button>
      </Box>
    </Box>
  );
}

export default Home;

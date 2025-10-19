import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { gsap } from 'gsap';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

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

const plantImages = {
    SLM: {
      title: "SLM",
      images: ["/plant-images/SLM-1.jpg", "/plant-images/SLM-2.jpg", "/plant-images/SLM-3.jpg"],
    },
    FineWireDrawingOTO: {
      title: "Fine Wire Drawing OTO",
      images: ["/plant-images/Fine Wire Drawing OTO - 1.jpg", "/plant-images/Fine Wire Drawing OTO - 2.jpg", "/plant-images/Fine Wire Drawing OTO - 3.jpg"],
    },
    PitTypeInductionFurnace: {
      title: "Pit Type Induction Furnace",
      images: ["/plant-images/Induction Furnace - 1.jpg", "/plant-images/Induction Furnace - 2.jpg"],
    },
    NitrogenFurnace: {
      title: "Nitrogen Furnace",
      images: ["/plant-images/Nitrogen Furnace - 1.jpg"],
    },
    HighSpeedNailMachine: {
      title: "High Speed Nail Machine",
      images: ["/plant-images/High Speed Nail Machine - 1.jpg"],
    },
    AutomaticChainLinkFencingMachine: {
      title: "Automatic Chain Link Fencing Machine",
      images: ["/plant-images/Automatic Chain Link Fencing Machine - 1.jpg"],
    },
  };

function Home() {
  const featuredProductsRef = useRef(null);
  const heroTextRef = useRef(null);
  const navigate = useNavigate();
  const machines = Object.values(plantImages);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(featuredProductsRef.current) {
        featuredProductsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (heroTextRef.current) {
      gsap.fromTo(heroTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }
  }, []);

  const handleTitleClick = () => {
    navigate('/about#key-machines');
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <IconButton onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: 'calc(50% - 15px)', left: 15, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <ArrowBackIos />
      </IconButton>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <IconButton onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: 'calc(50% - 15px)', right: 15, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
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
          centerMode={true}
          centerSlidePercentage={33.33}
          stopOnHover={true}
          transitionTime={1000}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
        >
          {featuredProducts.map((product) => (
            <Box key={product.name} sx={{ p: 2 }}>
              <Link to={`/product/${encodeURIComponent(product.name)}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ height: 300, display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
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
                  <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
                    <Typography variant="h6" component="h2" textAlign="center" color="text.primary">
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          ))}
        </Carousel>
      </Container>
      
      {/* Key Machines Section */}
      <Container sx={{ py: 8, position: 'relative' }} maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 6, cursor: 'pointer', color: '#005a9e' }}
          onClick={handleTitleClick}
        >
          Key Machines in Our Production Process
        </Typography>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          centerMode={true}
          centerSlidePercentage={33.33}
          stopOnHover={true}
          transitionTime={1000}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
        >
          {machines.map((machine) => (
            <Box key={machine.title} sx={{ p: 2 }}>
              <Card
                sx={{ height: 300, display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, cursor: 'pointer' }}
                onClick={handleTitleClick}
              >
                <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={4000}
                    showIndicators={false}
                    stopOnHover={true}
                    transitionTime={500}
                >
                    {machine.images.map((image, imgIndex) => (
                        <CardMedia
                            key={imgIndex}
                            component="img"
                            sx={{
                                height: 250,
                                objectFit: 'cover',
                            }}
                            image={image}
                            alt={`${machine.title} ${imgIndex + 1}`}
                            loading="lazy"
                        />
                    ))}
                </Carousel>
                <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
                  <Typography gutterBottom variant="h6" component="h2" textAlign="center">
                    {machine.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}

export default Home;

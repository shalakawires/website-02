import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { products } from '../data/products';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Products() {
  useTitle('Our Premium Product Range | Shalaka Wires', 'From construction to fencing, find the perfect wire solution. Explore our extensive product line, featuring high-quality MS wire, galvanized wire, nails, and more.');
  const navigate = useNavigate();

  const handleRequestQuote = () => {
    navigate('/contact', {
      state: {
        enquiryType: 'Request a Quote',
      },
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Box sx={{ my: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center" color="primary">
          Our Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                border: '1px solid transparent',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 24px rgba(65, 64, 66, 0.2)',
                  borderColor: 'var(--secondary-grey)',
                },
              }}>
                <Link to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 250,
                      objectFit: 'contain',
                      width: '100%',
                      borderTopLeftRadius: '16px',
                      borderTopRightRadius: '16px',
                    }}
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2" textAlign="center">
                      {product.name}
                    </Typography>
                  </CardContent>
                </Link>
                <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2, mt: 'auto' }}>
                  <Button
                    onClick={handleRequestQuote}
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
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Products;

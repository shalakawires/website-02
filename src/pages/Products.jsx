import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
  { name: 'MS Wire', images: ['/product-images/binding wire-2.png']  },
  { name: 'Shalaka Binding Wire', images: ['/product-images/binding-wire.png'] },
  { name: 'MS Wire Nails', images: ['/product-images/ms-nails.png'] },
  { name: 'Galvanized Wire', images: ['/product-images/GI-wire.png'] },
  { name: 'Chain Link Fence', images: ['/product-images/chain link.png'] },
  { name: 'Barbed Wire', images: ['/product-images/barbed-wire.png'] },
  { name: 'MS Weld Mesh', images: ['/product-images/MS-weld-mesh.jpg'] },
  { name: 'Fine Galvanized Wire', images: ['/product-images/fine-GI-wire.jpg'] },
  { name: 'HB Wire', images: ['/product-images/HB-wire.jpg'] },
];

function Products() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center" color="primary">
          Our Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={`/product/${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card sx={{ height: 300, width: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 250,
                      objectFit: 'contain',
                      width: '100%'
                    }}
                    image={product.images[0]}
                    alt={product.name}
                  />
                  <CardContent sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                  }}>
                    <Typography variant="h5" component="h2" textAlign="center">
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Products;

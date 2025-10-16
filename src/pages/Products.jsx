import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const products = [
  { 
    name: 'Binding Wire', 
    images: ['/product-images/binding-wire.png'] 
  },
  { name: 'MS Wire Nails', images: ['/product-images/ms-nails.png'] },
  { name: 'GI Wire', images: ['/product-images/GI-wire.png'] },
  { name: 'Chain Link Fence', images: ['/product-images/chain link.png'] },
  { name: 'Barbed Wire', images: ['/product-images/barbed-wire.png'] },
  { name: 'MS Weld Mesh', images: ['/product-images/MS-weld-mesh.jpg'] },
];

function Products() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          Our Products
        </Typography>
        <Grid container spacing={4}> 
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}> 
              <Card sx={{ height: 300, width: '100%', display: 'flex', flexDirection: 'column' }}> 
                {product.images.length > 1 ? (
                  <Carousel 
                    showArrows={true} 
                    infiniteLoop={true} 
                    showThumbs={false} 
                    showStatus={false} 
                    autoPlay={true} 
                    interval={3000}
                    stopOnHover={true}
                    renderIndicator={(onClickHandler, isSelected, index, label) => (
                      <li
                        style={{ ...indicatorStyles, background: isSelected ? '#000' : '#ccc' }}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                      />
                    )}
                  >
                    {product.images.map((image, idx) => (
                      <CardMedia
                        key={idx}
                        component="img"
                        sx={{
                          height: 250, 
                          objectFit: 'contain', 
                          width: '100%'
                        }}
                        image={image}
                        alt={product.name}
                      />
                    ))}
                  </Carousel>
                ) : (
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
                )}
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

const indicatorStyles = {
  background: '#fff',
  width: 8,
  height: 8,
  borderRadius: '50%',
  display: 'inline-block',
  margin: '0 8px',
  cursor: 'pointer',
};

export default Products;

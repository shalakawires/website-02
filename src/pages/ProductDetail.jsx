import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Button } from '@mui/material';
import useTitle from '../hooks/useTitle';
import { products } from '../data/products';

function ProductDetail() {
  const { productName } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === productName);

  useTitle(product ? `High-Quality ${product.name} | Shalaka Wires` : 'Product Not Found', product ? `Get the best ${product.name} from Shalaka Wires. Known for its durability and performance, our wire meets the highest standards. Check specifications and get a quote.` : 'The product you are looking for does not exist.');

  if (!product) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" align="center">Product not found</Typography>
      </Container>
    );
  }

  const handleRequestQuote = () => {
    navigate('/contact', {
      state: {
        enquiryType: 'Request a Quote',
        productId: product.id,
      },
    });
  };

  return (
    <Container sx={{ py: 4 }}>
      <Paper sx={{ p: 4, backgroundColor: '#f7f9fc' }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#005a9e' }}>
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            {product.description && (
              <>
                <Typography variant="h5" gutterBottom sx={{ color: '#414042' }}>
                  Description
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
                  {product.description}
                </Typography>
              </>
            )}
            <Button
              onClick={handleRequestQuote}
              variant="contained"
              color="primary"
              sx={{ my: 2, fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,90,158,0.3)', '&:hover': { boxShadow: '0 6px 16px rgba(0,90,158,0.5)', transform: 'translateY(-2px)' } }}
            >
              Request a Quote
            </Button>
            <Typography variant="h5" gutterBottom sx={{ color: '#414042', mt: 2 }}>
              Specifications
            </Typography>
            <TableContainer component={Paper} sx={{ border: '1px solid #e0e0e0', boxShadow: 'none' }}>
              <Table>
                <TableBody>
                  {product.specifications.map((spec, index) => (
                    <TableRow 
                      key={index} 
                      sx={{ 
                        '&:nth-of-type(odd)': { backgroundColor: '#ffffff' },
                        '&:nth-of-type(even)': { backgroundColor: '#f7f9fc' },
                        '&:last-child td, &:last-child th': { border: 0 } 
                      }}
                    >
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', color: '#414042', width: '40%' }}>
                        {spec.spec}
                      </TableCell>
                      <TableCell sx={{ color: '#005a9e' }}>
                        {spec.isLink ? (
                          <Link to={spec.linkTo} style={{ color: '#005a9e', textDecoration: 'underline' }}>{spec.value}</Link>
                        ) : (
                          spec.value
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', color: 'text.secondary' }}>
              All specifications can be made as per customer requirements.
            </Typography>
            {product.endUses && (
              <>
                <Typography variant="h5" gutterBottom sx={{ color: '#414042', mt: 4 }}>
                  End Uses
                </Typography>
                <Box component="ul" sx={{ p: 0, m: 0, listStylePosition: 'inside' }}>
                  {product.endUses.map((use, index) => (
                    <Typography component="li" key={index} sx={{ color: '#005a9e' }}>
                      {use}
                    </Typography>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Paper>
      <Box textAlign="center" sx={{ mt: 4 }}>
        <Button
          component={Link}
          to="/products"
          variant="outlined"
          color="primary"
        >
          View All Products
        </Button>
      </Box>
    </Container>
  );
}

export default ProductDetail;

import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Quality() {
  const theme = useTheme();

  const specifications = [
    { swg: 9, mm: 3.60, tolerance: 0.05 },
    { swg: 10, mm: 3.25, tolerance: 0.05 },
    { swg: 12, mm: 2.64, tolerance: 0.05 },
    { swg: 14, mm: 2.03, tolerance: 0.04 },
    { swg: 16, mm: 1.62, tolerance: 0.04 },
    { swg: 18, mm: 1.21, tolerance: 0.03 },
    { swg: 20, mm: 0.91, tolerance: 0.02 },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'primary.main', textAlign: 'center' }}>
          Our Commitment to Quality
        </Typography>
        <Typography variant="body1" paragraph textAlign="justify">
          At Shalaka Wires LLP, quality is at the forefront of everything we do. We are committed to manufacturing and delivering
          high-quality wires and cables that meet and exceed industry standards, as well as our customers' expectations.
        </Typography>
        <Typography variant="body1" paragraph textAlign="justify">
          Our rigorous quality control processes are integrated throughout every stage of production, from the selection of
          raw materials to the final inspection of finished products. We utilize advanced testing equipment and adhere to
          strict protocols to ensure the reliability, durability, and safety of our products.
        </Typography>
        <Typography variant="body1" paragraph textAlign="justify">
          We continuously invest in research and development to innovate and improve our manufacturing techniques and product
          offerings. Our dedicated team of experts is passionate about maintaining the highest levels of craftsmanship and
          attention to detail, ensuring that every product bearing the Shalaka Wires LLP name is a testament to our
          unwavering commitment to excellence.
        </Typography>

        <Grid container justifyContent="center" sx={{ my: 4 }}>
          <Grid item xs={12} md={8}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="400"
                image="/Qualiity Lab - 1.png"
                alt="Quality Lab"
                sx={{ objectFit: 'cover' }}
              />
            </Card>
            <Typography variant="body2" display="block" align="center" sx={{ mt: 1, color: 'text.secondary', fontSize: '1.1rem' }}>
            Advanced Universal Testing Machine, ensuring quality and durability
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, color: 'primary.main', textAlign: 'center', fontWeight: 'bold' }}>
          MS Wire Sizes Specifications & Tolerance
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TableContainer component={Paper} sx={{ mt: 2, maxWidth: 500, overflowX: 'auto' }}>
            <Table aria-label="MS Wire Specifications Table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} align="center" sx={{ border: '1px solid rgba(224, 224, 224, 1)', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontSize: '1.1rem' }}><b>Size</b></TableCell>
                  <TableCell colSpan={1} align="center" sx={{ border: '1px solid rgba(224, 224, 224, 1)', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontSize: '1.1rem' }}><b>Tolerance (As per IS 280 : 2006)</b></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" sx={{ border: '1px solid rgba(224, 224, 224, 1)', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontSize: '1.1rem' }}>SWG</TableCell>
                  <TableCell align="center" sx={{ border: '1px solid rgba(224, 224, 224, 1)', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontSize: '1.1rem' }}>mm</TableCell>
                  <TableCell align="center" sx={{ border: '1px solid rgba(224, 224, 224, 1)', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontSize: '1.1rem' }}>±mm</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {specifications.map((row, index) => (
                  <TableRow key={row.swg} sx={{ bgcolor: index % 2 === 0 ? 'action.hover' : 'background.paper' }}>
                    <TableCell component="th" scope="row" align="center" sx={{ border: '1px solid rgba(224, 224, 224, 1)', fontSize: '1.0rem' }}>
                      {row.swg}
                    </TableCell>
                    <TableCell align="center" sx={{ border: '1px solid rgba(224, 224, 224, 1)', fontSize: '1.0rem' }}>{row.mm}</TableCell>
                    <TableCell align="center" sx={{ border: '1px solid rgba(224, 224, 224, 1)', fontSize: '1.0rem' }}>{row.tolerance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

      </Box>
    </Container>
  );
}

export default Quality;

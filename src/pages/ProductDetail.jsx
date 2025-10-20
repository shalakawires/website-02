import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Typography, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Button } from '@mui/material';
import useTitle from '../hooks/useTitle';

const productSpecifications = {
  'MS Wire': {
    description: `MS Wire, or mild steel wire, is a versatile and affordable steel wire with low carbon content (0.05% - 0.25%). This composition provides greater strength and toughness compared to iron wire. It is manufactured by drawing mild carbon steel rods and is widely used for general-purpose applications like wire nettings, nails, fencing, and various types of annealed wires.`,
    specifications: [
      { spec: 'Size range', value: '0.7 mm to 8.00 mm' },
      { spec: 'Tolerance in mm', value: 'See Tolerance Chart', isLink: true, linkTo: '/quality#ms-wire-specs' },
      { spec: 'Grades', value: 'SAE/AISI 1006,1008,1010,1012, 1015,1018,1020 etc.' },
      { spec: 'Tensile strength', value: '350 – 1150 MPA' },
      { spec: 'Coil Dimension', value: '330 mm to 600 mm' },
      { spec: 'Condition', value: 'HB, HHB, Annealed, Hard Annealed, Coated with rust preventive oil, Galvanized, Black Annealed, and as per customer requirement' },
      { spec: 'Coil Weight', value: 'As per customer requirement' },
    ],
    image: '/product-images/binding wire-2.png',
  },
  'Shalaka Binding Wire': {
    description: `Shalaka Binding Wire is the ideal choice for securing TMT rebars. Our advanced annealing process creates a wire with the perfect balance of strength and ductility, making it both strong and flexible for easy tying without breakage. The consistent diameter and smooth, carbon-free surface ensure tight, secure knots, saving time and labor. Made from premium steel rods, Shalaka Binding Wire offers unmatched reliability and is uniformly packed for guaranteed weight and quality. Choose Shalaka for a secure and efficient construction solution.`,
    specifications: [
      { spec: 'Size range', value: '0.71 mm to 1.6 mm' },
      { spec: 'Raw Material', value: 'SAE 1006 to 1010' },
      { spec: 'Tolerance in mm', value: 'See Tolerance Chart', isLink: true, linkTo: '/quality#ms-wire-specs' },
      { spec: 'Tensile Strength', value: '350 - 400 MPA' },
      { spec: 'Coil Weight', value: '5 - 25 kg' },
      { spec: 'Heat Treatment', value: 'Annealed' },
      { spec: 'Wrapping Test', value: 'Passed' },
    ],
    image: '/product-images/binding-wire.png',
  },
  'Galvanized Wire': {
    description: 'Galvanized iron wire is made of low carbon mild steel, formed by drawing, pickling and removing rust, high temperature annealing, galvanizing and cooling. Our wire has Uniform Zinc Coating and Bright Finish. The Zinc coated galvanized wires are highly resistant to Moisture and mechanical damage.',
    specifications: [
        { spec: 'Diameter', value: '0.38 mm to 5.5 mm' },
        { spec: 'Standard', value: 'ASMT, SAE & IS' },
        { spec: 'Zinc Coating', value: '15 to 366 gm/sq.mt' },
        { spec: 'Tensile Strength', value: '350 to 1300 MPA' },
        { spec: 'Category', value: 'Soft & Hard Medium/Heavy coated' },
    ],
    endUses: [
        'Flat Stitching Wire',
        'Fencing Purpose',
        'Poultry',
        'Cable Armouring',
        'Electric Fence, ACSR, Spring',
        'Mesh, Scrubber, Filters',
        'Handles',
        'Hangers',
        'Various Wire Baskets',
        'Construction',
        'Security',
        'Agriculture',
    ],
    image: '/product-images/GI-wire.png',
  },
  'MS Wire Nails': {
    description: 'We offer a premium range of MS Wire Nails, manufactured using advanced automatic iron wire nail making machines. Each nail is crafted from high-grade materials to ensure excellent quality, high strength, and long-lasting durability.',
    specifications: [
      { spec: 'Size Range', value: '1 inch to 4 inch' },
      { spec: 'Packing', value: '1kg Packet & 25 kg Bag' },
    ],
    image: '/product-images/ms-nails.png',
  },
  'Chain Link Fence': {
    description: 'Chain link fence is a traditional and versatile form of wire fencing. Shalaka Chain Link is made by weaving galvanized wire forming a diamond shaped mesh. It blends well with its surroundings. Our Chain Link fence is durable and cost efficient making it viable solution. The flexible GI Wire fence makes it easier for installation on ground with uneven terrain or steep slopes.',
    specifications: [
      { spec: 'Wire Diameter', value: '2.50mm / 3.00mm / 4.00mm' },
      { spec: 'Mesh Size', value: '2x2 / 2.5x2.5 / 3x3 / 4x4' },
      { spec: 'Mesh Height', value: '4/5/6 Feet' },
      { spec: 'Bundle Length', value: '50 Feet' },
    ],
    image: '/product-images/chain link.png',
  },
  'Barbed Wire': {
    description: 'Barbed wire is most common and traditional source of wire fencing. Our range of barbed wire is manufactured using galvanized mild steel wire. We are leading and trusted Barbed wire manufacturers. Anti-corrosive in nature, non-abrasive property and resistant to wear and tear are some of the salient features of our Barbed wire Fencing.',
    specifications: [
        { spec: 'Size range', value: '12g x 12g, 12g x 14g, 14g x 14g' },
        { spec: 'Barbed Distance', value: '3cm - 5 cm' },
        { spec: 'Barbed Length', value: '7.5 - 15 cm' },
        { spec: 'Weight', value: '25-30 kg' },
    ],
    image: '/product-images/barbed-wire.png',
  },
  'MS Weld Mesh': {
    description: 'MS Weld Mesh is a versatile and durable material manufactured by welding mild steel wires at their intersections. This process creates a strong, grid-like structure with a uniform mesh size. It is widely used in construction for reinforcement, in fencing for security, and in various industrial applications for screening and partitioning. Its strength, rigidity, and cost-effectiveness make it a popular choice for a wide range of projects.',
    specifications: [
        { spec: 'Size', value: 'As per customer requirement' },
    ],
    image: '/product-images/MS-weld-mesh.jpg',
  },
  'Fine Galvanized Wire': {
    description: 'Fine galvanized iron wire is made of low carbon mild steel, formed by drawing, pickling and removing rust, high temperature annealing, galvanizing and cooling. Our wire has Uniform Zinc Coating and Bright Finish. The Zinc coated galvanized wires are highly resistant to Moisture and mechanical damage.',
    specifications: [
        { spec: 'Size range', value: '0.38 - 0.80 mm' },
        { spec: 'Zinc Coating', value: '20 - 40 gm/sq.mt' },
        { spec: 'Tensile Strength', value: '550 to 1300 MPA' },
        { spec: 'Coil Weight', value: '25 kgs - 800 kgs (Depending upon size)' },
    ],
    image: '/product-images/fine-GI-wire.jpg',
  },
  'HB Wire': {
    description: 'HB (Hard Bright) Wire, is a versatile and affordable steel wire with low carbon content (0.05% - 0.25%). This composition provides greater strength and toughness compared to iron wire. It is manufactured by drawing mild carbon steel rods and is widely used for general-purpose applications like wire nettings, nails, fencing, and various types of annealed wires.',
    specifications: [
      { spec: 'Size range', value: '0.7 mm to 8.00 mm' },
      { spec: 'Tolerance in mm', value: 'See Tolerance Chart', isLink: true, linkTo: '/quality#ms-wire-specs' },
      { spec: 'Grades', value: 'SAE/AISI 1006,1008,1010,1012, 1015,1018,1020 etc.' },
      { spec: 'Tensile strength', value: '350 – 1150 MPA' },
      { spec: 'Coil Dimension', value: '330 mm to 600 mm' },
      { spec: 'Coil Weight', value: 'As per customer requirement' },
    ],
    image: '/product-images/HB-wire.jpg',
  },
};


function ProductDetail() {
  const { productName } = useParams();
  const formattedProductName = productName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const product = productSpecifications[formattedProductName];

  useTitle(product ? `High-Quality ${formattedProductName} | Shalaka Wires` : 'Product Not Found', product ? `Get the best ${formattedProductName} from Shalaka Wires. Known for its durability and performance, our wire meets the highest standards. Check specifications and get a quote.` : 'The product you are looking for does not exist.');

  if (!product) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" align="center">Product not found</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Paper sx={{ p: 4, backgroundColor: '#f7f9fc' }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#005a9e' }}>
          {formattedProductName}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <img src={product.image} alt={formattedProductName} style={{ width: '100%', borderRadius: '8px' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            {product.description && (
              <>
                <Typography variant="h5" gutterBottom sx={{ color: '#414042' }}>
                  Description
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify' }}>
                  {product.description}
                </Typography>
              </>
            )}
            <Typography variant="h5" gutterBottom sx={{ color: '#414042' }}>
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
          variant="contained"
          color="primary"
        >
          View All Products
        </Button>
      </Box>
    </Container>
  );
}

export default ProductDetail;

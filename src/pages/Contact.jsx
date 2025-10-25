import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Grid, Paper, IconButton, Link, Button, TextField, MenuItem, Divider, Checkbox, FormControlLabel } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import useTitle from '../hooks/useTitle';
import emailjs from '@emailjs/browser';
import { products } from '../data/products';

function Contact() {
  useTitle('Contact Us | Shalaka Wires', "Ready to start your project? Contact Shalaka Wires today for a personalized quote or to get answers to your questions. We're here to help!");

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    mobile: '',
    email: '',
    enquiryType: 'General Enquiry',
    message: '',
  });

  const [quotedProducts, setQuotedProducts] = useState({});
  const [errors, setErrors] = useState({});
  const form = useRef();

  useEffect(() => {
    emailjs.init("j7HBhYGct01QVeUFw");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleProductChange = (productId) => {
    setQuotedProducts(prev => {
      const newQuotedProducts = { ...prev };
      if (newQuotedProducts[productId]) {
        delete newQuotedProducts[productId];
      } else {
        newQuotedProducts[productId] = { quantity: 1 };
      }
      return newQuotedProducts;
    });
    if (errors.products && errors.products[productId]) {
        setErrors(prevErrors => {
            const newProductErrors = { ...prevErrors.products };
            delete newProductErrors[productId];
            return { ...prevErrors, products: newProductErrors };
        });
    }
  };

  const handleQuantityChange = (productId, quantity) => {
    setQuotedProducts(prev => ({
      ...prev,
      [productId]: { quantity: quantity }
    }));
     if (errors.products && errors.products[productId]) {
        setErrors(prevErrors => {
            const newProductErrors = { ...prevErrors.products };
            delete newProductErrors[productId];
            return { ...prevErrors, products: newProductErrors };
        });
    }
  };

  const handleSelectAllChange = (event) => {
    if (event.target.checked) {
      const allProducts = products.reduce((acc, product) => {
        acc[product.id] = { quantity: 1 };
        return acc;
      }, {});
      setQuotedProducts(allProducts);
    } else {
      setQuotedProducts({});
    }
    setErrors(prev => ({...prev, productSelection: null}));
  };

  const validate = () => {
    const newErrors = {};

    if (!formState.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
    }
    if (!formState.mobile || !/^[6-9][0-9]{9}$/.test(formState.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }
    if (formState.email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formState.email)) {
        newErrors.email = "Please enter a valid email address.";
    }

    if (formState.enquiryType === 'Request a Quote') {
      if (Object.keys(quotedProducts).length === 0) {
        newErrors.productSelection = "Please select at least one product.";
      }

      const productErrors = {};
      Object.entries(quotedProducts).forEach(([productId, { quantity }]) => {
        if (!quantity || parseFloat(quantity) < 0.1) {
          productErrors[productId] = "Min 0.1 MT";
        }
      });
      if (Object.keys(productErrors).length > 0) {
        newErrors.products = productErrors;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    let emailMessage = formState.message;
    if (formState.enquiryType === 'Request a Quote') {
      const quoteDetails = Object.entries(quotedProducts).map(([productId, { quantity }]) => {
        const product = products.find(p => p.id === parseInt(productId));
        return `${product.name}: ${quantity} MT`;
      }).join('\n');
      emailMessage = `Product Quantities:\n${quoteDetails}\n\nMessage:\n${formState.message}`;
    }

    const templateParams = {
      ...formState,
      message: emailMessage,
    };

    emailjs.send('service_ub7vd1a', 'template_ksb13lm', templateParams)
      .then((result) => {
          console.log(result.text);
          alert('Thank you for your enquiry! We will get back to you soon.');
          setFormState({ firstName: '', lastName: '', companyName: '', mobile: '', email: '', enquiryType: 'General Enquiry', message: '' });
          setQuotedProducts({});
          setErrors({});
      }, (error) => {
          console.log(error.text);
          alert('Failed to send enquiry. Please try again later.');
      });
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    mb: 3,
  };

  const iconStyle = {
    mr: 2,
    color: 'primary.main',
    fontSize: '2rem',
  };

  const socialIconStyle = {
    color: 'primary.main',
    '&:hover': {
        transform: 'scale(1.1)',
        color: '#003d7a'
    }
  }

  const enquiryTypes = [ 'General Enquiry', 'Request a Quote', 'Plant Visit', 'Feedback' ];

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', py: 2 }}>
        <Container maxWidth="lg">
            <Box sx={{ my: 2, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#005a9e', fontWeight: 'bold' }}>
                    Get in Touch
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    For any enquiries, quotes, or business-related matters, please contact us using the information below.
                </Typography>
            </Box>

            <Paper elevation={3} sx={{ p: 4, borderRadius: '16px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 0 }}>

                <Box sx={{ flex: 1, p: 3 }}>
                    <form onSubmit={handleSubmit} noValidate ref={form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="First Name" name="firstName" value={formState.firstName} onChange={handleInputChange} required error={!!errors.firstName} helperText={errors.firstName} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Last Name" name="lastName" value={formState.lastName} onChange={handleInputChange} />
                            </Grid>
                             <Grid item xs={12}>
                                <TextField fullWidth label="Company Name" name="companyName" value={formState.companyName} onChange={handleInputChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Mobile Number" name="mobile" type="tel" value={formState.mobile} onChange={handleInputChange} required error={!!errors.mobile} helperText={errors.mobile} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Email Address" name="email" type="email" value={formState.email} onChange={handleInputChange} error={!!errors.email} helperText={errors.email} />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField select fullWidth label="Type of Enquiry" name="enquiryType" value={formState.enquiryType} onChange={handleInputChange}>
                                    {enquiryTypes.map((option) => (<MenuItem key={option} value={option}>{option}</MenuItem>))}
                                </TextField>
                            </Grid>
                        </Grid>

                        {formState.enquiryType === 'Request a Quote' && (
                            <Box sx={{ mt: 2 }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>Select Products</Typography>
                            {errors.productSelection && <Typography color="error" sx={{ mb: 1.5 }}>{errors.productSelection}</Typography>}
                            <Paper variant="outlined" sx={{ p: 1, mb: 1 }}>
                                <FormControlLabel
                                sx={{ width: '100%', m: 0 }}
                                control={
                                    <Checkbox
                                    checked={products.length > 0 && Object.keys(quotedProducts).length === products.length}
                                    indeterminate={Object.keys(quotedProducts).length > 0 && Object.keys(quotedProducts).length < products.length}
                                    onChange={handleSelectAllChange}
                                    />
                                }
                                label="Select All Products"
                                />
                            </Paper>
                            <Grid container spacing={1}>
                                {products.map(product => (
                                <Grid item xs={12} key={product.id}>
                                    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1 }}>
                                        <FormControlLabel
                                            control={<Checkbox checked={!!quotedProducts[product.id]} onChange={() => handleProductChange(product.id)} />}
                                            label={product.name}
                                            sx={{ flexGrow: 1, m: 0 }}
                                        />
                                        {quotedProducts[product.id] && (
                                            <TextField
                                                type="number"
                                                label="Quantity (MT)"
                                                size="small"
                                                value={quotedProducts[product.id].quantity}
                                                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                                inputProps={{ step: 1 }}
                                                sx={{ width: '130px' }}
                                                error={!!(errors.products && errors.products[product.id])}
                                                helperText={errors.products && errors.products[product.id]}
                                            />
                                        )}
                                    </Paper>
                                </Grid>
                                ))}
                            </Grid>
                            </Box>
                        )}
                        
                        <Box sx={{ mt: 2 }}>
                          <TextField fullWidth multiline rows={8} label="Your Message" name="message" value={formState.message} onChange={handleInputChange} />
                        </Box>

                         <Box sx={{ mt: 3 }}>
                            <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ py: 1.5, fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,90,158,0.3)', '&:hover': { boxShadow: '0 6px 16px rgba(0,90,158,0.5)', transform: 'translateY(-2px)' } }}>
                                Enquire Now
                            </Button>
                        </Box>
                    </form>
                </Box>
                
                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

                <Box sx={{ flex: 1, p: 3 }}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        Contact Information
                    </Typography>
                    <Box sx={contactItemStyle}>
                        <PhoneIcon sx={iconStyle} />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>Phone</Typography>
                            <Link href="tel:+919822767618" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>+91 98227 67618</Link><br/>
                            <Link href="tel:+919158724723" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>+91 91587 24723</Link>
                        </Box>
                    </Box>
                    <Box sx={contactItemStyle}>
                        <EmailIcon sx={iconStyle} />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>Email</Typography>
                            <Link href="mailto:shalakawires@gmail.com" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>shalakawires@gmail.com</Link>
                        </Box>
                    </Box>
                    <Box sx={contactItemStyle}>
                        <LocationOnIcon sx={iconStyle} />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>Address</Typography>
                            <Link href="https://maps.app.goo.gl/E17aAP5yyYJAyyML8" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                Plot No. E-48, Phase II, Add. MIDC Area, Jalna, Maharashtra
                            </Link>
                        </Box>
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mt: 4 }}>
                        Follow Us
                    </Typography>
                    <Box>
                        <IconButton component="a" href="https://www.facebook.com/shalakawires" target="_blank" sx={socialIconStyle}><Facebook /></IconButton>
                        <IconButton component="a" href="https://x.com/shalakawires" target="_blank" sx={socialIconStyle}><XIcon /></IconButton>
                        <IconButton component="a" href="https://instagram.com/shalakawires" target="_blank" sx={socialIconStyle}><Instagram /></IconButton>
                        <IconButton component="a" href="https://www.linkedin.com/company/shalaka-wires-llp" target="_blank" sx={socialIconStyle}><LinkedIn /></IconButton>
                        <IconButton component="a" href="https://wa.me/919822767618?text=Hey%2C%20I%20have%20visited%20your%20website%20shalakawires.com%20and%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" sx={socialIconStyle}><WhatsApp /></IconButton>
                    </Box>
                </Box>
            </Paper>
        </Container>
    </Box>
  );
}

export default Contact;

import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Grid, Paper, IconButton, Link, Button, TextField, MenuItem, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import useTitle from '../hooks/useTitle';
import emailjs from '@emailjs/browser';

function Contact() {
  useTitle('Contact Us | Shalaka Wires', "Ready to start your project? Contact Shalaka Wires today for a personalized quote or to get answers to your questions. We're here to help!");

  const [formState, setFormState] = useState({
    firstName: '',
        lastName: '',
    mobile: '',
    email: '',
    enquiryType: 'General Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const form = useRef();

  useEffect(() => {
    // Initialize EmailJS with your Public Key
    emailjs.init("j7HBhYGct01QVeUFw"); // Replaced with your actual Public Key
  }, []);

  const validate = () => {
    let tempErrors = {};
    if (!formState.firstName.trim()) {
        tempErrors.firstName = "First Name is required.";
    }
    if (!formState.mobile || !/^[6-9]\d{9}$/.test(formState.mobile)) {
        tempErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }
    if (formState.email && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formState.email)) {
        tempErrors.email = "Please enter a valid email address.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) {
        setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs.sendForm('service_ub7vd1a', 'template_ksb13lm', form.current, 'j7HBhYGct01QVeUFw') // Replaced with your actual Service ID, Template ID, and Public Key
        .then((result) => {
            console.log(result.text);
            alert('Thank you for your enquiry! We will get back to you soon.');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send enquiry. Please try again later.');
        });
      setFormState({ firstName: '', lastName: '', mobile: '', email: '', enquiryType: 'General Enquiry', message: '' });
      setErrors({});
    }
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
                    For any inquiries, quotes, or business-related matters, please contact us using the information below.
                </Typography>
            </Box>

            <Paper elevation={3} sx={{ p: 4, borderRadius: '16px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 0 }}>

                <Box sx={{ flex: 1, p: 3 }}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}>
                        Enquiry Form
                    </Typography>
                    <form onSubmit={handleSubmit} noValidate ref={form}> {/* Added ref to the form */}
                        <Grid container spacing={2}>
                            {/* Row 1: Name fields */}
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="First Name" name="firstName" value={formState.firstName} onChange={handleInputChange} required error={!!errors.firstName} helperText={errors.firstName} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Last Name" name="lastName" value={formState.lastName} onChange={handleInputChange} />
                            </Grid>
                            
                            {/* Row 2: Contact fields */}
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Mobile Number" name="mobile" type="tel" value={formState.mobile} onChange={handleInputChange} required error={!!errors.mobile} helperText={errors.mobile} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Email Address" name="email" type="email" value={formState.email} onChange={handleInputChange} error={!!errors.email} helperText={errors.email} />
                            </Grid>
                            
                            {/* Row 3: Enquiry type - full width */}
                            <Grid item xs={12}>
                                <TextField select fullWidth label="Type of Enquiry" name="enquiryType" value={formState.enquiryType} onChange={handleInputChange}>
                                    {enquiryTypes.map((option) => (<MenuItem key={option} value={option}>{option}</MenuItem>))}
                                </TextField>
                            </Grid>
                            
                            {/* Row 4: Message - full width */}
                            <Grid item xs={12}>
                                <TextField fullWidth multiline rows={8} label="Your Message" name="message" value={formState.message} onChange={handleInputChange} required />
                            </Grid>
                            
                            {/* Row 5: Submit button */}
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ py: 1.5, fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,90,158,0.3)', '&:hover': { boxShadow: '0 6px 16px rgba(0,90,158,0.5)', transform: 'translateY(-2px)' } }}>
                                    Submit Enquiry
                                </Button>
                            </Grid>
                        </Grid>
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

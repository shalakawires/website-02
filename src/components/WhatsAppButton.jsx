import React from 'react';
import { Button, Box } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function WhatsAppButton() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 1000,
      }}
    >
      <Button 
        variant="contained"
        component={Link}
        to="/contact"
        sx={{
          backgroundColor: '#005a9e',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '50px',
          padding: '10px 15px',
          '&:hover': {
            backgroundColor: '#004170'
          }
        }}
      >
        Contact Us
      </Button>
      <Button 
        variant="contained" 
        startIcon={<WhatsApp />} 
        href="https://wa.me/919822767618?text=Hey%2C%20I%20have%20visited%20your%20website%20shalakawires.com%20and%20I%20would%20like%20to%20enquire%20about%20your%20products."
        target="_blank"
        sx={{
          backgroundColor: '#25D366',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '50px',
          padding: '6px 12px',
          fontSize: '0.8rem',
          '&:hover': {
            backgroundColor: '#128C7E'
          }
        }}
      >
        WhatsApp Us
      </Button>
    </Box>
  );
}

export default WhatsAppButton;

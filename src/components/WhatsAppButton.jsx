import React from 'react';
import { Button } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

function WhatsAppButton() {
  return (
    <Button 
      variant="contained" 
      startIcon={<WhatsApp />} 
      href="https://wa.me/919822767618?text=Hey%2C%20I%20have%20visited%20your%20website%20shalakawires.com%20and%20I%20would%20like%20to%20enquire%20about%20your%20products."
      target="_blank"
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '50px',
        padding: '10px 20px',
        zIndex: 1000,
        '&:hover': {
          backgroundColor: '#128C7E'
        }
      }}
    >
      Chat with us
    </Button>
  );
}

export default WhatsAppButton;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Quality from './pages/Quality';
import Footer from './components/Footer'; // Import the Footer component
import logo from '/logo.png';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#005a9e', // Primary blue
      light: '#4c82b1', // Lighter shade of primary blue
    },
    secondary: {
      main: '#414042', // Primary grey
      light: '#808285', // Lighter shade of secondary grey
    },
    background: {
      default: '#ffffff', // White background
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#005a9e',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#005a9e',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#414042',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#414042',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1.1rem', // Increased font size
        },
      },
    },
  },
});

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'Products', path: '/products' },
    { text: 'Quality', path: '/quality' },
    { text: 'Contact Us', path: '/contact' },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.text} component={RouterLink} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppBar position="static" sx={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e0e0e0' }}>
            <Toolbar component={Container} maxWidth="lg" sx={{ justifyContent: 'space-between', py: 2 }}>
              <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: theme.palette.primary.main }}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
                    mr: 2,
                  }}
                  alt="Shalaka Wires LLP Logo"
                  src={logo}
                />
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {navItems.map((item) => (
                  <Button key={item.text} sx={{ color: theme.palette.primary.main }} component={RouterLink} to={item.path}>
                    {item.text}
                  </Button>
                ))}
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer(true)}
                sx={{ display: { md: 'none' }, color: theme.palette.primary.main }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawer}
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plantImages = {
    SLM: {
      title: "SLM",
      images: ["/plant-images/SLM-1.jpg", "/plant-images/SLM-2.jpg", "/plant-images/SLM-3.jpg"],
      description: "Our State-of-the-Art SLM (Straight Line Machine) is crucial for precision wire drawing, enabling us to produce wires with exact diameters and superior surface finishes. This machine ensures consistency and high quality for all our fine wire products."
    },
    FineWireDrawingOTO: {
      title: "Fine Wire Drawing OTO",
      images: ["/plant-images/Fine Wire Drawing OTO - 1.jpg", "/plant-images/Fine Wire Drawing OTO - 2.jpg", "/plant-images/Fine Wire Drawing OTO - 3.jpg"],
      description: "The Fine Wire Drawing OTO machine is designed for drawing fine gauge wires with exceptional accuracy and speed. It plays a vital role in manufacturing specialized wires that require meticulous dimensions and strength."
    },
    PitTypeInductionFurnace: {
      title: "Pit Type Induction Furnace",
      images: ["/plant-images/Induction Furnace - 1.jpg", "/plant-images/Induction Furnace - 2.jpg"],
      description: "The Pit Type Induction Furnace is integral to our annealing (heat treatment) process, providing uniform heating for wire coils. This ensures optimal metallurgical properties, enhancing the strength and ductility of our wires."
    },
    NitrogenFurnace: {
      title: "Nitrogen Furnace",
      images: ["/plant-images/Nitrogen Furnace - 1.jpg"],
      description: "Our Nitrogen Furnace is utilized for specialized heat treatments in a controlled inert atmosphere, preventing oxidation and decarburization. This process is crucial for producing wires with a bright finish and enhanced mechanical properties, meeting high-performance requirements."
    },
    HighSpeedNailMachine: {
      title: "High Speed Nail Machine",
      images: ["/plant-images/High Speed Nail Machine - 1.jpg"],
      description: "The High Speed Nail Machine is engineered for rapid and efficient production of various types of MS wire nails. Its advanced capabilities ensure consistent nail geometry, sharpness, and strength, catering to diverse construction and industrial needs."
    },
    AutomaticChainLinkFencingMachine: {
      title: "Automatic Chain Link Fencing Machine",
      images: ["/plant-images/Automatic Chain Link Fencing Machine - 1.jpg"],
      description: "This machine automates the production of chain link fencing, ensuring high output and consistent quality. It is a key part of our capacity to deliver large orders for fencing products."
    },
  };

  const getCardStyle = (machine) => ({
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: hoveredCard === machine ? '0 12px 24px rgba(0, 0, 0, 0.3)' : '0 6px 12px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    transform: hoveredCard === machine ? 'translateY(-5px)' : 'translateY(0)',
  });

  return (
    <div>
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h1>About Us</h1>
        <p>Shalaka Wires LLP is a leading manufacturer of high-quality MS wire products. With years of experience in the industry, we are committed to providing our customers with superior products and excellent service.</p>
        <p>Our mission is to be a reliable partner for our clients, offering a diverse range of wire products that meet stringent quality standards. We believe in innovation, customer satisfaction, and sustainable practices.</p>
        <p>Our product portfolio includes binding wire, MS wire nails, GI wire, chain link, mesh, and various other customized wire solutions.</p>
      </div>

      <div style={{ margin: '3rem 0' }}>
        <h2 style={{ textAlign: 'center' }}>Key Machines in Our Production Process</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1rem' }}>
          {Object.keys(plantImages).map((machine) => (
            <div
              key={machine}
              style={getCardStyle(machine)}
              onMouseEnter={() => setHoveredCard(machine)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false} showIndicators={false}>
                {plantImages[machine].images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`${machine} ${index + 1}`} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
                  </div>
                ))}
              </Carousel>
              <div style={{ padding: '1rem 0' }}>
                <h3 style={{ textAlign: 'center' }}>{plantImages[machine].title}</h3>
                <p style={{ textAlign: 'center' }}>{plantImages[machine].description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

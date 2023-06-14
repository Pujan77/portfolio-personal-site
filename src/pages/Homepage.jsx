import { Box } from '@chakra-ui/react';
import React from 'react';
import { Contributions, Hero } from '../components';

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <Contributions />
    </Box>
  );
};

export default Homepage;

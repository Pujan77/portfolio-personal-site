import { Box } from '@chakra-ui/react';
import React from 'react';
import { Contributions, Hero, Milestones } from '../components';

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <Milestones />
      <Contributions />
    </Box>
  );
};

export default Homepage;

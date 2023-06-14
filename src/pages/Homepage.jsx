import { Box } from '@chakra-ui/react';
import React from 'react';
import { Contributions, Hero, Milestones } from '../components';
import { ScrollToTopButton } from '../ScrollToTopButton';

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <Milestones />
      <Contributions />
      <ScrollToTopButton />
    </Box>
  );
};

export default Homepage;

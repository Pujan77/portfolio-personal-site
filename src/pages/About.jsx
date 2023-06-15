import { Box } from '@chakra-ui/react';
import React from 'react';
import { Banner, SkillsProjects } from '../components';
import { ScrollToTopButton } from '../ScrollToTopButton';

const About = () => {
  return (
    <Box>
      <Banner />
      <SkillsProjects />
      <ScrollToTopButton />
    </Box>
  );
};

export default About;

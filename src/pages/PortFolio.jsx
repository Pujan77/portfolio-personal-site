import { Box, Center, HStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import OfflineData from '../components/Homepage/CardGithub';
import { Contributions } from '../components';
import { ScrollToTopButton } from '../ScrollToTopButton';

const PortFolio = () => {
  return (
    <Box>
      <Contributions />
      <Center>
        <HStack>
          <Heading>
            <Text>Projects in Github</Text>
          </Heading>
        </HStack>
      </Center>
      <OfflineData />
      <ScrollToTopButton />
    </Box>
  );
};

export default PortFolio;

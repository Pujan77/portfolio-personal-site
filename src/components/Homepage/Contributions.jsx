import { Box, Container, Stack } from '@chakra-ui/react';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Contributions = () => {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <GitHubCalendar username="Pujan77" />
      </Container>
    </Box>
  );
};

export default Contributions;

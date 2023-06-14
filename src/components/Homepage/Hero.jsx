import * as React from 'react';
import {
  Container,
  Avatar,
  Heading,
  Text,
  VStack,
  Stack,
  Link,
  IconButton,
  Divider,
  Flex,
  Box,
  Center,
} from '@chakra-ui/react';
import { SocialAccounts } from '../../content/content';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true,
};

const Hero = () => {
  const [color, setColor] = useState('firebrick');
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }} mx="auto">
      <Center>
        <VStack
          spacing={4}
          px={2}
          alignItems={{ base: 'center', sm: 'flex-start' }}
        >
          <Stack justifyContent="center" alignItems="center">
            <Avatar
              boxShadow="xl"
              size="xl"
              src="https://i.imgur.com/qrAlWXX.png"
            />
            <Text fontSize="sm">Pujan Sapkota</Text>
          </Stack>
        </VStack>
      </Center>
      <Center>
        <VStack
          spacing={4}
          px={2}
          alignItems={{ base: 'center', sm: 'flex-start' }}
        >
          <Stack justifyContent="center" alignItems="center">
            <Heading
              textAlign={{ base: 'center', sm: 'left' }}
              margin="0 auto"
              minWidth={{ base: '23rem', sm: 'auto' }}
              fontSize={{ base: '2.5rem', sm: '3rem' }}
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  'Full-Stack Developer based in Australia',
                  1500,
                ]}
                speed={30}
                omitDeletionAnimation={true}
                repeat={Infinity}
              />
            </Heading>
            <Text color={color} textAlign="center">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  'Passionate about tech and brings ideas to life.',
                  1500,
                  () => setColor('darkmagenta'),
                  'Studied Computer Engineering',
                  1500,
                  () => setColor('darksalmon'),
                  'Works as a Software Engineer',
                  1500,
                  () => setColor('darkviolet'),
                ]}
                speed={40}
                color={color}
                omitDeletionAnimation={true}
                repeat={Infinity}
              />
            </Text>
            <Divider />
            <Flex alignItems="center" justify="center" w="100%">
              <Box textAlign="center">
                {SocialAccounts.map((sc, index) => (
                  <IconButton
                    key={index}
                    as={Link}
                    isExternal
                    href={sc.url}
                    aria-label={sc.label}
                    colorScheme={sc.type}
                    rounded="full"
                    icon={sc.icon}
                    {...iconProps}
                  />
                ))}
              </Box>
            </Flex>
          </Stack>
        </VStack>
      </Center>
    </Container>
  );
};

export default Hero;

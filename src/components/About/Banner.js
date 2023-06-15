import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaYoutube,
  FaGlobe,
} from 'react-icons/fa';
import Education from './Education';

export default function Banner() {
  return (
    <Container maxW={'7xl'} alignItems="center" my={5}>
      <Flex
        width={'100%'}
        maxW={['full', 'full', '7xl']}
        justifyContent="center"
        alignItems={'center'}
        flexDir={['column', 'column', 'row', 'row']}
      >
        <Flex
          width={['md', 'md', '2xl']}
          flexDir={'column'}
          justifyContent="space-between"
          bgColor={`${useColorModeValue('#EDF2F7', '#171923')}`}
          color={`${useColorModeValue('#171923', '#EDF2F7')}`}
          maxHeight="2xl"
          minHeight={'4xl'}
          borderRadius="3xl"
          p="10"
          mb={10}
        >
          <Box>
            <Flex alignItems={'center'} justifyContent="center">
              <Image
                borderColor={`${useColorModeValue('#171923', '#EDF2F7')}`}
                borderRadius={'50%'}
                src="https://i.imgur.com/qrAlWXX.png"
                width="32"
              />
            </Flex>

            <Heading textAlign={'center'}>Pujan Sapkota</Heading>

            <Text fontSize={'sm'} textAlign="center">
              I am currently pursuing my Masters in Information Technology
              (Software Development) from the University of Southern Queensland,
              Australia. I am looking for <Tag variant={'solid'}>Part-time</Tag>{' '}
              and/or <br />{' '}
              <Tag mt={1} variant={'solid'}>
                {' '}
                Internship Opportunity.
              </Tag>
              <br /> (Degree Completion in 2023).
            </Text>

            <VStack my={4}>
              <Tag px={5} variant={'subtle'} colorScheme="primary">
                Registered Computer Engineer
              </Tag>
              <Tag px={5} variant={'subtle'} colorScheme="primary">
                Full Stack Software Engineer
              </Tag>
            </VStack>
            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={4}
              height={0.2}
            />
            {/* Icons  */}
            <VStack spacing={6} alignItems="start">
              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={'md'}
                    variant={'ghost'}
                    border="1px solid"
                    borderColor={'gray.300'}
                  >
                    <FaEnvelope
                      color={useColorModeValue('#171923', '#EDF2F7')}
                    />
                  </IconButton>
                </Box>
                <VStack alignItems={'start'} spacing={0.1}>
                  <Text fontSize={'sm'}>Email</Text>
                  <Text fontWeight={'600'}>pujansapkota7@gmail.com</Text>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={'md'}
                    variant={'ghost'}
                    border="1px solid"
                    borderColor={'gray.300'}
                  >
                    <FaPhone color={useColorModeValue('#171923', '#EDF2F7')} />
                  </IconButton>
                </Box>
                <VStack alignItems={'start'} spacing={0.1}>
                  <Text fontSize={'sm'}>Phone</Text>
                  <Text fontWeight={'600'}>+61 410 091 022</Text>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={'md'}
                    variant={'ghost'}
                    border="1px solid"
                    borderColor={'gray.300'}
                  >
                    <FaGithub color={useColorModeValue('#171923', '#EDF2F7')} />
                  </IconButton>
                </Box>
                <VStack alignItems={'start'} spacing={0.1}>
                  <Text fontSize={'sm'}>Github</Text>
                  <Text fontWeight={'600'}>/Pujan77</Text>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={'md'}
                    variant={'ghost'}
                    border="1px solid"
                    borderColor={'gray.300'}
                  >
                    <FaLinkedin
                      color={useColorModeValue('#171923', '#EDF2F7')}
                    />
                  </IconButton>
                </Box>
                <VStack alignItems={'start'} spacing={0.1}>
                  <Text fontSize={'sm'}>Linkedin</Text>
                  <Text fontWeight={'600'}>/pujansapkota7</Text>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={'md'}
                    variant={'ghost'}
                    border="1px solid"
                    borderColor={'gray.300'}
                  >
                    <FaGlobe color={useColorModeValue('#171923', '#EDF2F7')} />
                  </IconButton>
                </Box>
                <VStack alignItems={'start'} spacing={0.1}>
                  <Text fontSize={'sm'}>Website</Text>
                  <Text fontWeight={'600'}>pujansapkota.com</Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>

          <ButtonGroup
            justifyContent={'center'}
            alignItems={'center'}
            variant="ghost"
            spacing={1.9}
          >
            <IconButton
              _hover={{
                color: 'primary.700',
                bgColor: 'primary.50',
                border: '1px solid',
                borderColor: 'primary.700',
              }}
            >
              <FaFacebook size={24} />
            </IconButton>
            <IconButton
              _hover={{
                color: 'primary.700',
                bgColor: 'primary.50',
                border: '1px solid',
                borderColor: 'primary.700',
              }}
            >
              <FaInstagram size={24} />
            </IconButton>
            <IconButton
              _hover={{
                color: 'primary.700',
                bgColor: 'primary.50',
                border: '1px solid',
                borderColor: 'primary.700',
              }}
            >
              <FaYoutube size={24} />
            </IconButton>
          </ButtonGroup>
        </Flex>
        <Box
          ms={['0', '0', '8']}
          flexDir={'column'}
          justifyContent="space-between"
          bgColor={`${useColorModeValue('#EDF2F7', '#171923')}`}
          color={`${useColorModeValue('#171923', '#EDF2F7')}`}
          maxHeight="4xl"
          scrollBehavior={'smooth'}
          minHeight={'4xl'}
          borderRadius="3xl"
          p="10"
          mb={10}
        >
          <Heading>Education</Heading>
          <Education />
        </Box>
      </Flex>
    </Container>
  );
}

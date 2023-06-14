import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Links } from '../content/content';
import { useNavigate } from 'react-router-dom';
import { BuyMeACoffeeButton } from '../components';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <BuyMeACoffeeButton />
        <Stack direction={'row'} spacing={6}>
          {Links.map(link => (
            <Link key={link.name} onClick={() => navigate(link.to)}>
              {link.name}
            </Link>
          ))}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2023 All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Github'} href={'https://github.com/Pujan77'}>
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={'LinkedIn'}
              href={'https://www.linkedin.com/in/pujansapkota7/'}
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label={'YouTube'}
              href={'https://www.youtube.com/@pujansapkota7'}
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={'Instagram'}
              href={'https://www.instagram.com/pujansapkota7/'}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

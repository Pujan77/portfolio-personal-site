import { Fragment, useRef } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Field, Form, Formik } from 'formik';
import emailjs from '@emailjs/browser';
import { useError, useResponse } from '../../ErrorWrapper';
const contactOptions = [
  {
    label: 'Address',
    value: '9/17 Springfield Lakes Bvd, Springfield Lakes, 4300',
    icon: GoLocation,
  },
  {
    label: 'PHONE NUMBER',
    value: '+61 410 091 022',
    icon: BsPhone,
  },
  {
    label: 'EMAIL',
    value: 'pujansapkota7@gmail.com',
    icon: HiOutlineMail,
  },
];

const ContactForm = () => {
  const form = useRef();
  const { showError } = useError();
  const { showSuccess } = useResponse();
  const initialValues = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSubmit = async () => {
    // Handle form submission here
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PROFILE_ID}`
      )
      .then(
        result => {
          showSuccess('Your message has been sent. We will get back to you.');
          form.current.reset();
        },
        error => {
          showError('Some error occured. Try again.');
        }
      );
  };

  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justify="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            Contact Me
          </Heading>
          <Text fontSize="md" textAlign="center">
            If you need any information, feel free to contact me through any
            means below.
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack
                spacing={3}
                direction="column"
                justify="center"
                alignItems="center"
                px={3}
              >
                <Icon as={option.icon} w={10} h={10} color="green.400" />
                <Text fontSize="lg" fontWeight="semibold">
                  {option.label}
                </Text>
                <Text fontSize="md" textAlign="center">
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex d={{ base: 'none', md: 'flex' }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form ref={form}>
            <VStack
              spacing={8}
              w="100%"
              bg={useColorModeValue('white', 'gray.700')}
              rounded="lg"
              boxShadow="lg"
              p={{ base: 5, sm: 10 }}
            >
              <VStack spacing={4} w="100%">
                <Stack
                  w="100%"
                  spacing={3}
                  direction={{ base: 'column', md: 'row' }}
                >
                  <FormControl id="fullName">
                    <FormLabel>Name</FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      rounded="md"
                    />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      placeholder="john_doe@email.com"
                      rounded="md"
                    />
                  </FormControl>
                </Stack>
                <FormControl id="subject">
                  <FormLabel>Subject</FormLabel>
                  <Field
                    as={Input}
                    type="text"
                    name="subject"
                    placeholder="Eg. Freelance availability"
                    rounded="md"
                  />
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Message</FormLabel>
                  <Field
                    as={Textarea}
                    size="lg"
                    name="message"
                    placeholder="Enter your message"
                    rounded="md"
                  />
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Button
                  type="submit"
                  bg="green.300"
                  color="white"
                  _hover={{
                    bg: 'green.500',
                  }}
                  rounded="md"
                  w={{ base: '100%', md: 'max-content' }}
                >
                  Send Message
                </Button>
              </VStack>
            </VStack>
          </Form>
        </Formik>
      </Stack>
    </Container>
  );
};

export default ContactForm;

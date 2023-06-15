import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react';
import Projects from './Projects';
import CustomSkillTag from '../utils/CustomSkillTag';
import FrameworkTag from '../utils/FrameworkTag';
import ToolTag from '../utils/ToolTag';

export default function SkillsProjects() {
  return (
    <Container maxW={'7xl'} alignItems="center" my={5}>
      <Flex
        width={'100%'}
        maxW={['full', 'full', '7xl']}
        justifyContent="center"
        alignItems={'center'}
        flexDir={['column', 'column', 'row', 'row']}
      >
        <Box
          me={['0', '0', '8']}
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
          <Heading>Highlights</Heading>
          <Projects />
        </Box>

        <Flex
          id="skills"
          width={['md', 'md', 'md']}
          flexDir={'column'}
          justifyContent="start"
          bgColor={`${useColorModeValue('#EDF2F7', '#171923')}`}
          color={`${useColorModeValue('#171923', '#EDF2F7')}`}
          maxHeight="2xl"
          minHeight={'4xl'}
          borderRadius="3xl"
          p="10"
          mb={10}
        >
          <Heading textAlign={'start'}>Skills</Heading>

          <Text fontSize={'sm'} textAlign="start">
            My skills, which I constantly keep improving.
          </Text>

          <Box my={5}>
            <Heading textAlign={'start'} as="h4" fontSize={'lg'}>
              {' '}
              Programming Languages
            </Heading>

            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={3}
              height={0.2}
            />
            {/* Icons  */}

            <Wrap>
              <CustomSkillTag skill={'Python'} />
              <CustomSkillTag skill={'Javascript'} />
              <CustomSkillTag skill={'Lua'} />
              <CustomSkillTag skill={'HTML'} />
              <CustomSkillTag skill={'CSS'} />
              <CustomSkillTag skill={'Database'} />
              <CustomSkillTag skill={'Cloud Computing'} />
            </Wrap>
          </Box>
          <Box my={2}>
            <Heading textAlign={'start'} as="h4" fontSize={'lg'}>
              {' '}
              Frameworks
            </Heading>
            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={3}
              height={0.2}
            />
            <Wrap>
              <FrameworkTag skill={'Express JS'} />
              <FrameworkTag skill={'React JS'} />
              <FrameworkTag skill={'Node JS'} />
              <FrameworkTag skill={'Django'} />
              <FrameworkTag skill={'Flask'} />
              <FrameworkTag skill={'MongoDB'} />
              <FrameworkTag skill={'MySQL'} />
              <FrameworkTag skill={'PostGres'} />
              <FrameworkTag skill={'AWS'} />
              <FrameworkTag skill={'GCP'} />
              <FrameworkTag skill={'Azure'} />
            </Wrap>
          </Box>
          <Box my={5}>
            <Heading textAlign={'start'} as="h4" fontSize={'lg'}>
              {' '}
              Other Tools
            </Heading>

            <Box
              orientation="horizontal"
              bgColor="gray.300"
              my={2}
              height={0.2}
            />

            <Wrap>
              <ToolTag skill={'Postman'} />
              <ToolTag skill={'VS Code'} />
              <ToolTag skill={'Git'} />
              <ToolTag skill={'Github'} />
              <ToolTag skill={'Bitbucket'} />
              <ToolTag skill={'Scrum'} />
            </Wrap>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}

import { About, Contact, Homepage } from '../pages';
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter,
} from 'react-icons/fa';
export const routingItems = [
  {
    to: '/',
    title: 'Homepage',
    component: <Homepage />,
    exact: true,
  },
  {
    to: '/about',
    title: 'About',
    component: <About />,
    exact: false,
  },
  {
    to: '/contact',
    title: 'Contact',
    component: <Contact />,
    exact: false,
  },
];

export const Links = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Contact',
    to: '/contact',
  },
];

export const SocialAccounts = [
  {
    url: 'https://github.com/Pujan77',
    label: 'Github Account',
    type: 'gray',
    icon: <FaGithub />,
  },

  // {
  //   url: 'https://dev.to/m_ahmad',
  //   label: 'Dev Account',
  //   type: 'gray',
  //   icon: <FaDev />,
  // },
  {
    url: 'https://linkedin.com/in/pujansapkota7',
    label: 'LinkedIn Account',
    type: 'linkedin',
    icon: <FaLinkedin />,
  },
  // {
  //   url: 'https://www.quora.com/profile/Muhammad-Ahmad-66',
  //   label: 'Quora Account',
  //   type: 'red',
  //   icon: <FaQuora />,
  // },
];

export const milestones = [
  {
    id: 1,
    date: 'July 2023',
    title: 'Joined Masters',
    description: `For the further studies, I got enrolled in Masters in Information Technology (Software Development) in the University of Southern Queensland, Australia.`,
  },
  {
    id: 2,
    date: 'June 2022- May 2023',
    title: 'Outcode Software',
    description: `Joined Outcode Software as a Full Stack Software Engineer (Python and React). Worked in team to build softwares and use AWS services. I learnt full software engineering priciples implementation through works.`,
  },
  {
    id: 3,
    date: '2021-2022',
    title: 'Implementation of GAN for Audio Enhancement',
    description:
      'Major Project during the last year of my engineering. Built the sound noise filtering software using Machine learning. Implemented Generative Adversarial Network to create discriminator and generator for sound enhancement. Defended the project successfully and got graded.',
  },
  {
    id: 4,
    date: '2020-2021',
    title: 'Fund Management System in Blockchain',
    description:
      'Minor Project during the third year of my engineering. Built a Blockchain system. Built a wallet that would allow to transfer points after mining. Used simple techniques to mine a credit and kept record of every transaction in Blockchain.',
  },
  {
    id: 5,
    date: '2019-2022',
    title: 'Freelancing, started working for myself while studying',
    description:
      'I built some projects game scripts for GTAV Roleplay servers. Got to learn Lua and other web scripting fundamentals. I also learn web development using HTML, CSS and JS. This was a point of learning other frameworks like NodeJs, ReactJS and Django which later helped me get a job. I am also preparing for AWS Cloud Practitioner Examination.',
  },
];

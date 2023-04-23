import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import image from '../../../Assets/Logos/mun2023.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box backgroundColor={'black'} maxW="100vw" minH={'40vh'}>
      <Container
        maxW={['90%', '80%']}
        size={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems="center"
      >
        <VStack width={'100%'}>
          <HStack marginTop={'3'}>
            <Image src={image} width="50px" />
            <Heading color={'white'} fontSize="18px">
              JECRC MUN 2023
            </Heading>
          </HStack>
          <HStack
            width={'100%'}
            display="flex"
            justifyContent={'space-between'}
            alignItems="flex-start"
          >
            <VStack
              display={'flex'}
              justifyContent="center"
              alignItems={'center'}
              textAlign={'center'}
            >
              <Heading
                fontWeight={'semibold'}
                color="green.500"
                fontSize={['13px', '20px']}
              >
                Address
              </Heading>
              <Text color={'white'} fontSize={['8px', '15px']}>
                JECRC College, <br /> Shri Ram Ki Nangal, <br /> via Sitapura
                RIICO, Tonk Road, Jaipur
                <br />
                Pincode - 302 022
              </Text>
            </VStack>
            <VStack
              display={'flex'}
              justifyContent="center"
              alignItems={'center'}
              textAlign={'center'}
            >
              <Heading
                fontWeight={'semibold'}
                color="green.500"
                fontSize={['13px', '20px']}
              >
                Email
              </Heading>
              <Text color={'white'} fontSize={['8px', '15px']}>
                <Link href="mailto:mun@jecrc.ac.in">mun@jecrc.ac.in</Link>
              </Text>
            </VStack>
            <VStack
              display={'flex'}
              justifyContent="center"
              alignItems={'center'}
              textAlign={'center'}
            >
              <Heading
                fontWeight={'semibold'}
                color="green.500"
                fontSize={['13px', '20px']}
              >
                Contacts
              </Heading>
              <Text color={'white'} fontSize={['8px', '15px']}>
                Pratham Kabra - 7073616967 <br /> Shyam Garg - 7073168531
              </Text>
            </VStack>
          </HStack>
          <Text textAlign={'center'} width={'100%'} color="green.500">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -{' '}
          </Text>
          <Box
            display={'flex'}
            flexDirection={['column', 'row']}
            justifyContent="center"
            alignItems={'center'}
          >
            <Text color={'white'} fontSize={['13px', '20px']}>
              This site is maintained and developed by{' '}
            </Text>
            <Text color={'green.500'} fontSize={['13px', '18px']}>
              <Link to="/technicalteam"> - JECRC Techincal Team</Link>
            </Text>
          </Box>
          <Wrap marginBottom={'10'}>
            <Link target="_blank" to="https://www.instagram.com/jecrcmun/">
              <Button size={'md'} colorScheme="facebook">
                <FaFacebook />
              </Button>
            </Link>
            <Link target="_blank" to="https://www.facebook.com/jecrcmun/">
              <Button size={'md'} colorScheme="twitter">
                <FaTwitter />
              </Button>
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/company/jecrc-mun/mycompany/"
            >
              <Button size={'md'} colorScheme="pink">
                <FaInstagram />
              </Button>
            </Link>
            <Link target="_blank" to="https://twitter.com/jecrc_mun">
              <Button size={'md'} colorScheme="linkedin">
                <FaLinkedin />
              </Button>
            </Link>
          </Wrap>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;

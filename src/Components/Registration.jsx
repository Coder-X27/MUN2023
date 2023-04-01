import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import AboutBanner from './About/AboutBanner';
import reg1 from '../Assets/images/ambassador.png'
import reg2 from '../Assets/images/delegate.png'
import reg3 from '../Assets/images/EBM.png'
import reg4 from '../Assets/images/IPA.png'
const Registration = () => {
  return (
    <>
      <AboutBanner munheading={'Registration'} />
      <Box minwidth="100%" minHeight={'50vh'} background="green.50"  >
        <Container minWidth={'80%'} minHeight={'8 0vh'}>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            >
              <Card size={'md'} variant="elevated" marginTop={'20'} marginBottom="20">
                <CardHeader>
                  <Heading size="md" textAlign={'center'} fontWeight="semibold"> Campus Ambassador</Heading>
                </CardHeader>
                <CardBody display={'flex'} flexDir="column" justifyContent={'center'} alignItems="center">
                  <Image src={reg1} />
                </CardBody>
                <CardFooter display={'flex'} flexDirection="column"  justifyContent='center'>
                  <Text textAlign={'center'} marginBottom="5">
                    Application Fees 2000/-
                  </Text>
                  <Button colorScheme={'green'} variant="solid">Register Now !</Button>
                </CardFooter>
              </Card>
              <Card size={'md'} variant="elevated" marginTop={'20'} marginBottom="20">
                <CardHeader>
                  <Heading size="md" textAlign={'center'} fontWeight="semibold"> Delegate</Heading>
                </CardHeader>
                <CardBody display={'flex'} flexDir="column" justifyContent={'center'} alignItems="center">
                  <Image src={reg2} />
                </CardBody>
                <CardFooter display={'flex'} flexDirection="column"  justifyContent='center'>
                  <Text textAlign={'center'} marginBottom="5">
                    Application Fees 2000/-
                  </Text>
                  <Button colorScheme={'green'} variant="solid">Register Now !</Button>
                </CardFooter>
              </Card>
              <Card size={'md'} variant="elevated" marginTop={'20'} marginBottom="20">
                <CardHeader>
                  <Heading size="md" textAlign={'center'} fontWeight="semibold"> Executive Board</Heading>
                </CardHeader>
                <CardBody display={'flex'} flexDir="column" justifyContent={'center'} alignItems="center">
                  <Image src={reg3} />
                </CardBody>
                <CardFooter display={'flex'} flexDirection="column"  justifyContent='center'>
                  <Text textAlign={'center'} marginBottom="5">
                    Application Fees 2000/-
                  </Text>
                  <Button colorScheme={'green'} variant="solid">Register Now !</Button>
                </CardFooter>
              </Card>
              <Card size={'md'} variant="elevated" marginTop={'20'} marginBottom="20">
                <CardHeader>
                  <Heading size="md" textAlign={'center'} fontWeight="semibold"> International Press</Heading>
                </CardHeader>
                <CardBody display={'flex'} flexDir="column" justifyContent={'center'} alignItems="center">
                  <Image src={reg4} />
                </CardBody>
                <CardFooter display={'flex'} flexDirection="column"  justifyContent='center'>
                  <Text textAlign={'center'} marginBottom="5">
                    Application Fees 2000/-
                  </Text>
                  <Button colorScheme={'green'} variant="solid">Register Now !</Button>
                </CardFooter>
              </Card>
              
              
              
            </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Registration;

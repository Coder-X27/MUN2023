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

const Registration = () => {
  return (
    <>
      <AboutBanner munheading={'Registration'} />
      <Box minwidth="100%" minHeight={'50vh'} background="green.50">
        <Container minWidth={'80%'} minHeight={'8 0vh'}>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              
            >
              <Card size={'lg'}>
                <CardHeader>
                  <Heading size="md"> Customer dashboard</Heading>
                  <Image src='https://media.istockphoto.com/id/1161352480/vector/sample-sign-sample-square-speech-bubble-sample.jpg?s=612x612&w=0&k=20&c=qZ480B32q1qGLxoTZEaXcxDB4BMCMDGAGnDQ0hEJ_I8='/>
                </CardHeader>
                <CardBody>
                  <Text>
                    Click here to register for ____________
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button>View here</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    View a summary of all your customers over the last month.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button>View here</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    View a summary of all your customers over the last month.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button>View here</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    View a summary of all your customers over the last month.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button>View here</Button>
                </CardFooter>
              </Card>
            </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Registration;

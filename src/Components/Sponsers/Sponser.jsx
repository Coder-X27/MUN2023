import {
  Grid,
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Textarea,
  Card,
} from '@chakra-ui/react';
import AboutBanner from '../About/AboutBanner';
import images from './Sponsers.json';

function Sponsers() {
  return (
    <>
      <AboutBanner munheading={'OUR SPONSERS'} />
      <Box width={'100%'} backgroundColor={'green.50'}>
        <Box ml={['0', '10']} pt={'10'} bg="green.50" pb={'10'}>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            ml={['10%', '12%']}
            mr={['10%', '12%']}
            gap={4}
          >
            {images &&
              images.map(image => {
                const { src, alt } = image;
                return (
                  <Image
                    key={src}
                    src={src}
                    alt={alt}
                    w="100%"
                    h="250px"
                    borderRadius="md"
                    boxShadow="md"
                  />
                );
              })}
          </Grid>
        </Box>

        <Heading as="h1" size="xl" textAlign="center" my={6}>
          Become Our Sponsor
        </Heading>
          <Box maxW={['lg', 'md']} mx="auto" mt={['10', '0']}>
            <Card
              p={6}
              bg="white"
              boxShadow="0px 0px 12px rgba(0, 0, 0, 0.6)"
              borderRadius="md" 
              marginBottom={'20'}
            >
              <FormControl id="nameoforganization" mb={4} isRequired>
                <FormLabel>Name of Organisation</FormLabel>
                <Input type="text" placeholder="Enter your name" />
              </FormControl>
              <FormControl id="name" mb={4} isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Enter your name" />
              </FormControl>

              <FormControl id="email" mb={4} isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>

              <FormControl id="mobile" mb={4} isRequired>
                <FormLabel>Contact No</FormLabel>
                <Input type="tel" placeholder="Enter your mobile number" />
              </FormControl>
              <FormControl id="mobile" mb={4} isRequired>
                <FormLabel>Alternate Contact No</FormLabel>
                <Input type="tel" placeholder="Enter your mobile number" />
              </FormControl>

              <FormControl id="message" mb={6} isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Enter your message" />
              </FormControl>

              <Button
                colorScheme="green"
                size="lg"
                color={'white'}
                _hover={{ bg: 'green.600' }}
                _active={{ border: '2px solid', borderColor: 'green.500' }}
              >
                Send Message
              </Button>
            </Card>
          </Box>
        </Box>
    </>
  );
}

export default Sponsers;

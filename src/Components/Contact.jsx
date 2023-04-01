import { Box, Button, FormControl, FormLabel,SimpleGrid, Input, Textarea,Card,useTheme } from "@chakra-ui/react";
import AboutBanner from "./About/AboutBanner";

function Contact() {
    const theme = useTheme();    
  return (
    <>
    <AboutBanner munheading={"CONTACT US"}/>
    <SimpleGrid minChildWidth='320px' mb={["0","10"]} mt={10} spacing={["40px","0"]}>
    <Box>
      <Box maxW={["lg","md"]} mx="auto" mt={['10','0']}>
        <Card p={6} bg="white" boxShadow="md" borderRadius="md">
    
      <FormControl id="name" mb={4} isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder="Enter your name"  />
      </FormControl>

      <FormControl id="email" mb={4} isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Enter your email"  />
      </FormControl>

      <FormControl id="mobile" mb={4} isRequired>
        <FormLabel>Mobile No</FormLabel>
        <Input type="tel" placeholder="Enter your mobile number"  />
      </FormControl>

      <FormControl id="institution" mb={4} isRequired>
        <FormLabel>Institution</FormLabel>
        <Input type="text" placeholder="Enter your institution name" />
      </FormControl>

      <FormControl id="message" mb={6} isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Enter your message" />
      </FormControl>

      <Button
          colorScheme="green"
          size="lg"
          color={theme.colors.white}
          _hover={{ bg: "green.600" }}
          _active={{ border: "2px solid", borderColor: "green.500" }}
        >Send Message
        </Button>
    
    </Card>
    </Box>    
    </Box>
    <Box
    ml={["5%","0%"]}
    marginTop={["0","20"]}
    height={["400px","80%"]}
    className="map"
    >
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.825855186854!2d75.81833451496024!3d26.7818204831841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc977c6898ab9%3A0x8010b7bf0b1f29c9!2sJECRC%20Foundation!5e0!3m2!1sen!2sin!4v1579948771763!5m2!1sen!2sin'
                allowFullScreen=''
                title='JECRC Foundation'
                className="Map"
                height={["90%","85%"]}
                width={["95%","80%"]}
                
            ></iframe>
    </Box>
    </SimpleGrid>
    </>
  );
}

export default Contact;

import { Box, SimpleGrid,Heading,useTheme } from "@chakra-ui/react"; 
import { FormControl, FormLabel, Input, Button} from "@chakra-ui/react";
import sponsor1 from"../Assets/images/sponsor.png";
import AboutBanner from "./About/AboutBanner";

function SponsorsPage() {
  const sponsors = [
    { id: 1,image: sponsor1 },
    { id: 2,image: sponsor1 },
    { id: 3,image: sponsor1 },
    { id: 4,image: sponsor1 },
    { id: 5,image: sponsor1 },
    { id: 6,image: sponsor1 },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
  const theme = useTheme(); 

  return (
    <>
    <Box bg={"green.50"} pb={"5%"}>
    <AboutBanner munheading={"SPONSOR"}/>
    <Box p={10}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {sponsors.map((sponsor) => (
          <Box key={sponsor.id} borderWidth="4px" borderColor="green.500" borderRadius="md" overflow="hidden">
            <Box h={300} bgImage={`url(${sponsor.image})`} bgSize="cover" bgPosition="center" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
    <Box borderWidth="1px"  borderRadius="md" overflow="hidden" p={4} maxW={["95%","60%"]} mx="auto" boxShadow=" 4px 4px 4px rgba(0, 0, 0, 0.3)" >
        <Heading as="h1" size="xl" textAlign="center" my={6}>Become Our Sponsor</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="OrganisationName" isRequired mb={4}>
          <FormLabel>Name Of Organisation</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="name" isRequired mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="phone" isRequired mb={4}>
          <FormLabel>Contact No.</FormLabel>
          <Input type="tel" />
        </FormControl>
        <FormControl id="AlternatePhone" mb={4}>
          <FormLabel>Alternate Contact No.</FormLabel>
          <Input type="tel" />
        </FormControl>
        <FormControl id="Subject" isRequired mb={4}>
          <FormLabel>Subject</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Message</FormLabel>
          <Input as="textarea" rows={3} />
        </FormControl>
        <Button
          colorScheme="green"
          size="lg"
          color={theme.colors.white}
          _hover={{ bg: "green.600" }}
          _active={{ border: "2px solid", borderColor: "green.500" }}
        >
            Submit
        </Button>
      </form>
    </Box>
    </Box>
    </>
  );
}

export default SponsorsPage;

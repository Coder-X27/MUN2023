import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Card,
  CardBody,
  Link,
  Button,
  useDisclosure,
  Stack
} from '@chakra-ui/react';
import AboutBanner from './AboutBanner';

const MunConference = () => {
  const { onClose } = useDisclosure();
  return (
    <>
      <AboutBanner munheading={'ABOUT US'} />
      <Box>
        <Container background={'green.50'} minWidth="100%">
          <Container
            minWidth={['100%','85%']}
            minHeight="80vh"
            display="flex"
            flexDir={'column'}
            justifyContent="center"
            alignItems={'center'}
          >
            <VStack
              alignItems={['center', 'flex-start']}
              width={['100%', '90%']}
            >
              <Card size={'lg'} marginTop="20" marginBottom={'20'}>
                <CardBody paddingLeft={['5','20']} paddingRight={['5','20']} >
                  <Heading
                    className="about_heading"
                    color={'green.500'}
                    fontSize={['25px', '40px']}
                    marginTop={'10'}
                    marginBottom={'10'}
                    textAlign="center"
                    fontWeight={'semibold'}
                  >
                    MUN CONFERENCE
                  </Heading>
                  <Text
                    className="about_text"
                    letterSpacing={'1px'}
                    fontWeight={['normal','medium']}
                    fontSize={['15px',"17px"]}
                  >
                    Welcome to the 11-year-old legacy of JECRC MUN, established in 2012 by like–minded individuals aiming to create a 
                    society for youth to discuss, debate, and deliberate present-day crises while experiencing themselves standing in the 
                    shoe of various world leaders. JECRC MUN, the foremost host of the Model UN Conference in Jaipur was inaugurated by the
                    eminent educationist Shri Kulbhushan Kothari. 
                  </Text>
                  <Text
                    className="about_text"
                    letterSpacing={'1px'}
                    fontWeight={['normal','medium']}
                    fontSize={['15px',"17px"]}
                    marginTop={'10'}
                  >
                    With together efforts of our enthusiastic and extensive organizing committees over 11 years of conducting Model UN 
                    conferences, we have arisen as one of the best and most promising Model UN societies in India.
                  </Text>
                  <Text
                    className="about_text"
                    letterSpacing={'1px'}
                    fontWeight={['normal','medium']}
                    fontSize={['15px',"17px"]}
                    marginTop={'10'}
                  >
                    Till the 11th edition, we have hosted approximately 2000+ delegates, including international delegates as well.
                    To appreciate the endeavours of the participants and aspire to involve youth in international dialogue, deliberate 
                    upon the dire issues of the world, and shape them into strong individuals who'll become the leaders of tomorrow.
                  </Text>
                  <Text
                    className="about_text"
                    letterSpacing={'1px'}
                    fontWeight={['normal','medium']}
                    fontSize={['15px',"17px"]}
                    marginTop={'10'}
                  >
                    For JECRC Model UN 2018, we were graced by the presence of Shri Manishankar Aiyar, a politician, and diplomat, and 
                    Shri Anand Chulani a world-famous motivational speaker. In the eighth edition of 2019, the green-Hyderabad pioneer, 
                    Ms. Hari Chandna Dasari, IAS ZHMC, and Dr Jawahar Surisetti. For the 10th edition of 2020, Mr. Sanjay Jha, the former 
                    national spokesperson for the Indian National Congress party. He is also the Former President of All India 
                    Professionals Congress, Maharashtra. Following the 11th edition in 2022, Dr Munish Jindal, Founder & CEO of 
                    HoverRobotix and the Founding President of MENTORx Global, he is conferred with the highest civilian honour 
                    “Karmaveer Chakra” by United Nations. He is the Noble Asian of the Year 2018; the man who followed his dreams, 
                    and Mr. Satish C. Mehta, Indian Foreign Servies1983 and retired as Director General, Indian Council for Cultural 
                    Relations in 2015 blessed us with their presence and filled the spirits of delegates with morale and zeal.
                  </Text>
                  <Stack align="center" pt="10">
                <Link onClick={onClose} to="/register">
                <Button 
                variant={'solid'} 
                colorScheme="green" 
                size={['md', 'lg']}
                >
                  Register Now
                </Button>
                </Link>
                </Stack>
                </CardBody>
                
              </Card>
            </VStack>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default MunConference;

import { Box, Heading, Text, VStack,Container,Card,CardBody,CardHeader} from "@chakra-ui/react";
import './MUNConference.css'
import bg from '../../Assets/Logos/bg2.jpg';
function MUNConference() {
  return (
    <>
      <Box
        backgroundAttachment={'fixed'}
        backgroundColor="blackAlpha.600"
        backgroundImage={bg}
        backgroundPosition="center"
        backgroundRepeat={'no-repeat'}
        backgroundSize="cover"
      >
        <Container background={'blackAlpha.800'} minWidth="100%">
          <Container
            minWidth={'85%'}
            minHeight="80vh"
            display="flex"
            flexDir={'column'}
            justifyContent="center"
            alignItems={'center'}
          >
            <Heading
              className="about_heading"
              color={'green.500'}
              fontSize={['25px', '40px']}
              marginTop={'10'}
            >
              ABOUT JECRC MUN
            </Heading>
              <VStack
                alignItems={['center', 'flex-start']}
                width={['100%', '90%']}
              >
              <Card size={'lg'} className="card_main">
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'32px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    JECRC MUN
                  </Heading>
                </CardHeader>
                  <CardBody>
                    <Text
                      className="about_text"
                      letterSpacing={'1px'}
                      fontWeight={'medium'}
                      fontSize="20px"
                    >
                      JECRC MUN is a ten years old legacy established in 2012,
                      making JECRC the first host of a MUN conference in Jaipur.
                      Inaugurated by the eminent educationist Shri Kul Bhushan
                      Kothari, JECRC MUN has spiraled out exponentially to achieve
                      the pinnacle of growth. With the zealous efforts of extensive
                      organizing committees over the 10 years of conducting MUN
                      conferences, we have gained a lot of momentum inviting immense
                      participation from across the country.
                    </Text>
                    <Text
                      className="about_text"
                      letterSpacing={'1px'}
                      fontWeight={'medium'}
                      fontSize="20px"
                    >
                      Till the eighth edition, we have hosted approximately 2000+
                      delegates, including international delegates as well. To
                      appreciate the endeavors of the participants and inspire them
                      to sharpen their skills of diplomacy, we have had some
                      renowned chief guests. For JECRC MUN 2018, we were graced by
                      the presence of Shri Manishankar Aiyar, politician and
                      diplomat and Shri Anand Chulani, a world-famous motivational
                      speaker. In the eighth edition of 2019, the green-Hyderabad
                      pioneer, Ms Hari Chandna Dasari, IAS ZHMC and Dr Jawahar
                      Surisetti blessed us with their presence and filled the
                      spirits of delegates with enthusiasm.
                    </Text>
                    <Text
                      className="about_text"
                      letterSpacing={'1px'}
                      fontWeight={'medium'}
                      fontSize="20px"
                    >
                      Every year our expanse of expertise has grown beyond the
                      previously achieved marks, as we continue to set new
                      benchmarks for our future conferences. The committees we
                      simulate and the agendas we offer, both give mind-bending
                      experiences to the delegates. The prominent committees are
                      General Assembly- Disarmament and International Security
                      (GA-DISEC), United Nations Security Council (UNSC), International Monetary Fund (IMF), Lok Sabha, and
                      International Press. The recent editions have also witnessed a Special Committe.
                    </Text>
                    <Text
                      className="about_text"
                      letterSpacing={'1px'}
                      fontWeight={'medium'}
                      fontSize="20px"
                    >
                      We have created a promising platform for all the young
                      diplomats that seek experience and genuine input about their
                      performances, all credited to the correct MUN environment we
                      offer. Our success as a MUN community is attributed to our
                      delegates, and we wish to improve and attain the pinnacle of
                      perfection for their sake. This year at JECRC MUN 2022, the
                      experience will be a never before one of its kind adventure
                      for the delegates. Like always, only grander!
                    </Text>
                  </CardBody>
              </Card>
              </VStack>
         
        </Container>
        </Container>
      </Box>
    </>
  );
}

export default MUNConference;

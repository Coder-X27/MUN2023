import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../../Assets/Logos/mun2023.png';
import bg from '../../Assets/Logos/bg2.jpg';
import intro from '../../Assets/images/aboutIntro.jpeg';
import unsc from '../../Assets/images/UNSClogo.png';
import './Home.css';
import {
  FaAngellist,
  FaBookReader,
  FaConnectdevelop,
  FaCreativeCommonsBy,
  FaRegCalendarCheck,
  FaRegShareSquare,
} from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
const Home = () => {
  return (
    <>
      {/* HOME PAGE  */}
      <Box className="landingPage">
        <Container
          minWidth={'80%'}
          height="100%"
          display={'flex'}
          flexDirection="column"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image width={['190px', '200px']} alignContent="center" src={logo} />
          <Heading
            color={'white'}
            fontSize={['3xl', '5xl']}
            fontWeight="semibold"
          >
            JECRC MUN
          </Heading>
          <Heading
            color={'white'}
            fontSize={['2xl', '5xl']}
            fontWeight="semibold"
          >
            Presents
          </Heading>
          <Heading color={'green.500'} fontSize={['3xl', '6xl']}>
            Awaken the Leader in you
          </Heading>
          <Button
            variant={'outline'}
            size="lg"
            border="2px solid white"
            fontWeight="medium"
            color="green.300"
            marginTop={'10'}
            p="7"
          >
            <Heading fontSize={['2xl', '3xl']}>Register Now !</Heading>
          </Button>
        </Container>
      </Box>
      {/* ABOUT SECTION  */}
      <Box minHeight={'100vh'} bgColor="green.50">
        <Container
          minWidth={'85%'}
          minHeight="100vh"
          display="flex"
          flexDir={'column'}
          justifyContent="center"
          alignItems={['center', 'flex-start']}
        >
          <Stack
            display={'flex'}
            flexDir={['column', 'row']}
            marginTop={'10'}
            alignItems={['center', 'flex-start']}
          >
            <VStack
              alignItems={['center', 'flex-start']}
              width={['100%', '50%']}
            >
              <Heading
                fontSize={['15px', '25px']}
                fontWeight="semibold"
                color={'blackAlpha.800'}
                fontStyle="italic"
              >
                About Us
              </Heading>
              <Heading
                color={'green.600'}
                fontSize={['25px', '40px']}
                fontStyle="italic"
              >
                Welcome to JECRC MUN
              </Heading>
              {/* <Image width={'30%'} src={line} /> */}
              <Text
                fontSize={['18px', '22px']}
                letterSpacing="1px"
                fontWeight={'medium'}
              >
                JECRC MUN is a ten years old legacy established in 2012, making
                JECRC the first host of a MUN conference in Jaipur. Inaugurated
                by the eminent educationist Shri Kul Bhushan Kothari, JECRC MUN
                has spiraled out exponentially to achieve the pinnacle of
                growth. With the zealous efforts of extensive organizing
                committees over the 10 years of conducting MUN conferences, we
                have gained a lot of momentum inviting immense participation
                from across the country.
              </Text>
              <Button variant={'solid'} colorScheme="green" size={['md', 'lg']}>
                Read More
              </Button>
            </VStack>
            <VStack alignItems={['center', 'flex-end']} width={['100%', '50%']}>
              <Image width={['85%', '60%']} src={intro} />
            </VStack>
          </Stack>
          <Stack width={'100%'} marginTop={['10', '20']} alignItems={'center'}>
            <Box className="aboutBoxes">
              <Box className="aboutBox">
                <Heading
                  className="boxText"
                  fontSize={'18px'}
                  fontWeight="semibold"
                  color={'white'}
                >
                  <span>2000+</span> <br />
                  delegates
                </Heading>
              </Box>
              <Box className="aboutBox">
                <Heading
                  className="boxText"
                  fontSize={'18px'}
                  fontWeight="semibold"
                  color={'white'}
                >
                  <span>100+</span> <br />
                  INTERNATIONAL DELEGATES
                </Heading>
              </Box>
              <Box className="aboutBox">
                <Heading
                  className="boxText"
                  fontSize={'18px'}
                  fontWeight="semibold"
                  color={'white'}
                >
                  <span>700+</span> <br />
                  PARTICIPATION INSTITUTES
                </Heading>
              </Box>
              <Box className="aboutBox">
                <Heading
                  className="boxText"
                  fontSize={'18px'}
                  fontWeight="semibold"
                  color={'white'}
                >
                  <span>14 Lakh+</span> <br />
                  MASSIVE OUTREACH
                </Heading>
              </Box>
            </Box>
          </Stack>
          <Stack
            display={'flex'}
            flexDir={['column', 'row-reverse']}
            marginTop="20"
            alignItems={['center', 'flex-start']}
            marginBottom="20"
          >
            <VStack alignItems={['center', 'flex-end']} width={['100%', '50%']}>
              <Heading
                color={'green.600'}
                fontSize={['25px', '40px']}
                fontStyle="italic"
              >
                ZERO HOUR SUMMIT
              </Heading>
              {/* <Image width={'30%'} src={line} /> */}
              <Text
                fontSize={['18px', '22px']}
                letterSpacing="1px"
                fontWeight={'medium'}
              >
                The Zero Hour Summit aims to center the voices of our college
                youth in the conversation about national and international
                issues and environmental justice. We intend to develop a
                discussion platform for topics of public interest that requires
                urgent attention. Zero Hour Summit is going to be an in-house
                debate competition that is bound to discuss 4 agendas. Agendas
                do not matter to a man without thought but torture the hearts of
                people who actively think about this world we live in. With
                these debates, we aim to move our students towards constant
                growth and development in thinking, research, and speaking
                skills, and the ability to have a sound opinion about matters of
                interest.
              </Text>
              <Button variant={'solid'} colorScheme="green" size={['md', 'lg']}>
                Read More
              </Button>
            </VStack>
            <VStack
              alignItems={['center', 'flex-start']}
              width={['100%', '50%']}
            >
              <Image width={['85%', '60%']} src={unsc} />
            </VStack>
          </Stack>
        </Container>
      </Box>
      {/* JECRC MUN EXCELLENCIES  */}
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
              color={'white'}
              fontSize={['22px', '35px']}
              fontWeight="semibold"
              marginTop={'20'}
            >
              JECRC MUN EXCELLENCIES
            </Heading>
            <SimpleGrid
              marginTop={'20'}
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            >
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaBookReader color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    SKILLS
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    JECRC MUN is an ideal place to hone your public speaking,
                    writing and analytical skills. All writing piece will
                    involve your research and analytical abilities. Public
                    speaking is a fundamental part of the conference and it
                    requires you to adapt to several situations to have a strong
                    and effective debate.
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaConnectdevelop color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    NETWORKING
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    JECRC MUN will provide you with an opportunity to meet many
                    talented people throughout the country, discover new
                    cultures and their different perspective. You can grow your
                    network for the future by making new contacts. You also
                    build precious memories and friendships that will last
                    forever.
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaRegShareSquare color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    LEARN FROM OTHERS
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    Model UN is a great educational tool that provides extremely
                    valuable benefits to students. At JECRC MUN, students learn
                    from each other. MUN conferences are fun and during the
                    conference, you will meet other delegates and senior
                    delegates who can help you in learning new things.
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Container>
        </Container>
      </Box>
      {/* CAMPUS AMBASSADOR  */}
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
              color={'white'}
              fontWeight="semibold"
              fontSize={['22px', '35px']}
              marginTop={'20'}
            >
              Become Campus Ambassador
            </Heading>
            <SimpleGrid
              marginTop={'20'}
              marginBottom={'20'}
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            >
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaRegCalendarCheck color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    Perks and Entitlements
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    Campus Ambassadors of JECRC MUN are entitled to additional
                    benefits in form of concessions and discounts. This is an
                    opportunity to make your conference experience more
                    fulfilling, by paying the fee simply with your networking
                    skills.
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaCreativeCommonsBy color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    Networking Skills
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    As a campus ambassador you get to enhance your network
                    within your campus with the prestigious tag of JECRC MUN.
                    Get an edge at being heard by your peers and connect with
                    them at a greater level, honing your interpersonal skills.
                  </Text>
                </CardBody>
              </Card>
              <Card size={'lg'}>
                <CardHeader
                  display={'flex'}
                  flexDir="column"
                  justifyContent="center"
                  alignItems={'center'}
                >
                  <Heading fontSize={['50px', '100px']}>
                    <FaAngellist color="green" />
                  </Heading>
                  <Heading
                    size="md"
                    textAlign={'center'}
                    fontSize={'25px'}
                    fontWeight="semibold"
                    letterSpacing={'2px'}
                  >
                    {' '}
                    Recognition
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text
                    letterSpacing={'1px'}
                    fontWeight={'medium'}
                    fontSize={['15px', '17px']}
                  >
                    The merits of being a Campus Ambassador don't end with the
                    conference, but stay with you thereafter. A certificate
                    recognizing your milestones will be conferred upon you,
                    investing the repute and excellence of JECRC MUN on you as
                    well.
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Container>
        </Container>
      </Box>
      {/* COMMITIES  */}
      <Box width={'100%'} backgroundColor="red.50" minHeight={'100vh'}>
        <Container
          minWidth={'85%'}
          minHeight="100vh"
          display="flex"
          flexDir={'column'}
          justifyContent="center"
          alignItems={'center'}
        >
          <Heading>Committes</Heading>
          <Heading>To be Announced....</Heading>
        </Container>
      </Box>
      {/* REGISTRATION  */}
      <Box width={'100%'} backgroundColor="green.50" minHeight={'100vh'}>
        
        <Container
          minWidth={'85%'}
          minHeight="100vh"
          display="flex"
          flexDir={'column'}
          justifyContent="center"
          alignItems={'center'}
        >
        <Heading
          textAlign={'center'}
          color="black"
          marginBottom={'50px'}
          letterSpacing="4px"
        >
          TESTIMONIALS
        </Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
          >
            <Card size="sm">
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                      size={'xl'}
                    />
                    <Box>
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text>Creator, Chakra UI</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  With Chakra UI, I wanted to sync the speed of development with
                  the speed of design. I wanted the developer to be just as
                  excited as the designer to create a screen.
                </Text>
              </CardBody>
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />

              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
              >
                <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                  Like
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                  Comment
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                  Share
                </Button>
              </CardFooter>
            </Card>
            <Card size="sm">
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                      size={'xl'}
                    />
                    <Box>
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text>Creator, Chakra UI</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  With Chakra UI, I wanted to sync the speed of development with
                  the speed of design. I wanted the developer to be just as
                  excited as the designer to create a screen.
                </Text>
              </CardBody>
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />

              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
              >
                <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                  Like
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                  Comment
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                  Share
                </Button>
              </CardFooter>
            </Card>
            <Card size="sm">
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                      size={'xl'}
                    />
                    <Box>
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text>Creator, Chakra UI</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  With Chakra UI, I wanted to sync the speed of development with
                  the speed of design. I wanted the developer to be just as
                  excited as the designer to create a screen.
                </Text>
              </CardBody>
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />

              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
              >
                <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                  Like
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                  Comment
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                  Share
                </Button>
              </CardFooter>
            </Card>
            
          </SimpleGrid>
        </Container>
      </Box>
      {/* CHIEF GUESTS  */}
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
            <Heading color={'white'} letterSpacing="2px" marginTop={'20'}>
              {' '}
              CHIEF GUESTS
            </Heading>
            <Card
              width={['100%', '90%']}
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="filled"
              colorScheme={'green'}
              marginTop={'10'}
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '300px' }}
                src="https://www.jecrcmun.in/images/Satish.jpg"
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody p={['15px', '50px']}>
                  <Heading size="lg" fontWeight={'semibold'} fontFamily="body">
                    Satish C. Mehta
                  </Heading>
                  <Text size="md" fontStyle={'italic'}>
                    Former Indian Ambassador to Kuwait
                  </Text>

                  <Text py="2" fontSize={['15px', '18px']}>
                    Ambassador Satish C. Mehta joined the Indian Foreign Service
                    in 1983 and retired as Director General, Indian Council for
                    Cultural Relations (ICCR) in September, 2015. Earlier, after
                    serving in France, Ivory Coast and Italy, he was Political
                    Advisor to UN Head of Mission in Haiti during UN Peace
                    Keeping Operations in 1995-96. He served as Director in the
                    Indian Prime Minister's Office from 1997 to 1999 dealing
                    with the strategic sector- External Affairs, Defence, Atomic
                    Energy, Space and S&T. During July 1999 to July 2002 he was
                    Political Counsellor in the Indian Mission to the United
                    Nations in New York, from where he went as Deputy Chief of
                    Mission in Tel Aviv from 2002-2005. He served as India's
                    Consul General in Toronto from 2005-2008 and as Joint
                    Secretary of Nepal and Bhutan Division in the Ministry of
                    External Affairs from October 2008 until July, 2011. He was
                    Indian Ambassador in Kuwait from July 2011 until November,
                    2013.
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            <Card
              width={['100%', '90%']}
              direction={{ base: 'column', sm: 'row-reverse' }}
              overflow="hidden"
              variant="filled"
              marginTop={'10'}
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '300px' }}
                src="https://www.jecrcmun.in/images/Munshi.jpeg"
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody p={['15px', '50px']}>
                  <Heading size="lg" fontWeight={'semibold'} fontFamily="body">
                    Dr. Munish Jindal
                  </Heading>
                  <Text size="md" fontStyle={'italic'}>
                    Founder & CEO HoverRobotixe
                  </Text>

                  <Text py="2" fontSize={['15px', '18px']}>
                    Dr. Munish Jindal is the Founder & CEO of HoverRobotix and
                    the Founding President of MENTORx Global. He is awarded and
                    honored with highest civilian honor “Karmaveer Chakra” by
                    United Nations. He is the Noble Asian of the Year 2018 as
                    well as the TEDx Speaker. He is the man who followed his
                    dreams. He is MBA, CPA from Australia. He holds Ph.D in
                    Robotics & Artificial Intelligence from USA. He came back to
                    India making it big for himself and his fellow citizen. He
                    is into suitcase living, keep on traveling all the time and
                    living with the philosophy of making others rise. Dr. Jindal
                    has penned down 12 books, has 6 patents in his name in
                    India, Australia and Germany. He is the one who launched the
                    concept of Hoverboards, autobots & Mobility Robots in India.
                    He initiated the ideas of “Education, Empower, Elevate” in
                    India with MENTORx. He is the one who believes in making
                    others rise.
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            <Button
              variant={'solid'}
              colorScheme="green"
              size={'lg'}
              color="white"
              marginTop={'20'}
              marginBottom={'20'}
            >
              View More
            </Button>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default Home;

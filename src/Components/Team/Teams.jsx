import {
  Card,
  CardBody,
  Stack,
  Text,
  Image,
  Grid,
  GridItem,
  Link,
  Box,
  CardFooter,
  Button,
  Container,
} from '@chakra-ui/react';
import AboutBanner from '../About/AboutBanner';
import { FaLinkedin } from 'react-icons/fa';
import members from './Team.json';
function Team() {
  return (
    <>
      <Box bg={'green.50'} minWidth={'100%'}>
        <AboutBanner munheading={'OUR TEAM'} />
        <Container minWidth={'80%'}>
          <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} gap={6} marginTop={'20'} paddingBottom={'20'}>
            {members &&
              members.map(member => {
                const { name, designation, image,linkedin } = member;
                return (
                  <GridItem key={image}>
                    <Card  size={['sm',"lg"]} boxShadow={'xl'}>
                      <CardBody>
                        <Image
                          src={image}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          width={'100%'}
                          objectFit={'contain'}
                          height={'300px'}
                        />
                        <Stack mt="6" spacing="3">
                          <Text textAlign={'center'} size="md" fontSize={'24px'} fontWeight={'semibold'} textTransform={'uppercase'}>{name}</Text>
                          <Text textAlign={'center'} fontStyle={'italic'} >{designation}</Text>
                        </Stack>
                      </CardBody>
                      <CardFooter
                        justify="space-evenly"
                        flexWrap="wrap"
                        sx={{
                          '& > button': {
                            minW: '136px',
                          },
                        }}
                      >
                        <Link
                          href={linkedin}
                          target="_blank"
                        >
                          <Button
                            size={'md'}
                            colorScheme="linkedin"
                            leftIcon={<FaLinkedin fontSize={'29'} />}
                          >
                            Follow on Linkedin
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </GridItem>
                );
              })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Team;

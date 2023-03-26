import { Button, Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../Assets/Logos/munLogo.png'
import './Home.css'
const Home = () => {
  return (
    <div className='landingPage'>
    <Container minWidth={"80%"}  height="100%" display={'flex'} flexDirection='column' justifyContent={'center'} alignItems={['center','flex-start']} >
        <Image width={["150px",'200px']} alignContent='center' src={logo}/>
        <Heading color={'white'} fontSize={['2xl','5xl']} fontWeight='semibold' >JECRC MUN</Heading>
        <Heading color={'white'} fontSize={['2xl','5xl']} fontWeight='semibold' >Presents</Heading>
        <Heading color={'red.500'}  fontSize={['2xl','6xl']}>Awaken the Leader in you</Heading>
        <Button variant={'outline'} border="2px solid white" fontWeight="medium"   color="red.500" marginTop={'10'} p='7' ><Heading fontSize={['1xl','3xl']}>Register Now !</Heading></Button>
    </Container>
    </div>
  )
}

export default Home

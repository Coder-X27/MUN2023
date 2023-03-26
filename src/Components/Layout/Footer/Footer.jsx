import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box backgroundColor={'crimson'} width="100%" height={'40vh'}>
        <Container display={'flex'} justifyContent={"center"} alignItems="center">
            <Heading>Jecrc Mun</Heading>
        </Container>
    </Box>
  )
}

export default Footer

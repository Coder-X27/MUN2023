import { Box,Container,Heading } from "@chakra-ui/react";
import { Flex,Image } from "@chakra-ui/react";
import React from 'react';
import { motion } from "framer-motion";
import bg from '../../Assets/Logos/bg2.jpg';

function Gallery(){
    let images = [
        { id: 1, src: "https://picsum.photos/300", alt: "Image 1" },
        { id: 3, src: "https://picsum.photos/300", alt: "Image 3" },
        { id: 2, src: "https://picsum.photos/300", alt: "Image 2" },
        { id: 4, src: "https://picsum.photos/300", alt: "Image 4" },
        { id: 5, src: "https://picsum.photos/300", alt: "Image 5" },
        { id: 6, src: "https://picsum.photos/300", alt: "Image 6" },
        { id: 7, src: "https://picsum.photos/300", alt: "Image 6" },
        { id: 8, src: "https://picsum.photos/300", alt: "Image 6" },
        { id: 9, src: "https://picsum.photos/300", alt: "Image 6" }
      ];
      
    
      return (
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
                minHeight="40vh"
                display="flex"
                flexDir={'column'}
                justifyContent="center"
                alignItems={'center'}
                >
                    <Heading
                    color={'green.500'}
                    fontSize={['42px', '80px']}
                    >
                    GALLERY
                    </Heading>
                    <Heading
                    color={'white'}
                    fontSize={['20px', '35px']}
                    >
                    JECRC MUN 2023
                    </Heading>
                </Container>
            </Container>
            <Box bg="white">
                <Flex justifyContent="center">
                <Box maxW={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}>
                    <Flex flexWrap="wrap" justifyContent={["center","space-between"]}>
                    {images.map((image) => (
                        <motion.div
                        key={image.id}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        >
                        <Box w={{ base: "100%", sm: "100%", md: "100%" }} mb={{ base: 4, md: 6 }}>
                            <Image src={image.src} alt={image.alt} borderRadius="lg" />
                        </Box>
                        </motion.div>
                    ))}
                    </Flex>
                </Box>
                </Flex>
                </Box> 
    
                
        </Box>
      );
        
}
export default Gallery;
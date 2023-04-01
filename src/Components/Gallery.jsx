import { Grid, Image, Box } from "@chakra-ui/react";
import AboutBanner from "./About/AboutBanner";

function Gallery() {
  const images = [
    { src: "https://picsum.photos/300/200", alt: "Image 1" },
    { src: "https://picsum.photos/300/200", alt: "Image 2" },
    { src: "https://picsum.photos/300/200", alt: "Image 3" },
    { src: "https://picsum.photos/300/200", alt: "Image 4" },
    { src: "https://picsum.photos/300/200", alt: "Image 5" },
    { src: "https://picsum.photos/300/200", alt: "Image 6" },
    { src: "https://picsum.photos/300/200", alt: "Image 7" },
    { src: "https://picsum.photos/300/200", alt: "Image 8" },
    { src: "https://picsum.photos/300/200", alt: "Image 9" },
  ];

  return (
    <>
    <AboutBanner munheading={"GALLERY"}/>
    <Box ml={['0','10']} pt={'10'} bg='green.50' pb={'10'}>
    <Grid templateColumns={["repeat(1, 1fr)","repeat(4, 1fr)"]} ml={["10%","12%"]} mr={["10%","12%"]} gap={4} >
      {images.map((image) => (
        <Image key={image.src} src={image.src} alt={image.alt} objectFit="cover" w="100%" h="100%" borderRadius="md" boxShadow="md" />
      ))}
    </Grid>
    </Box>
    </>
  );
}

export default Gallery;

import React from "react";
import { 
  Box, 
  VStack, 
  Text, 
  Flex, 
  ChakraProvider, 
  extendTheme,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const theme = extendTheme({
  colors: {
    primary: {
      light: "#0648A4",
      mid: "#61C7D9", 
      dark: "#031D40"
    },
    secondary: {
      cyan: "#7DEFF1"
    }
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif"
  }
});

const MotionBox = motion(Box);

const About = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box 
        bg="primary.dark" 
        color="white" 
        py={16} 
        px={8}
      >
        <VStack spacing={8} maxW="container.xl" mx="auto">
          <Heading 
            color="primary.mid" 
            size="2xl" 
            textAlign="center"
            mb={8}
          >
            Silicon University Invites You
          </Heading>

          <Text 
            textAlign="center" 
            color="secondary.cyan" 
            fontSize="xl" 
            maxW="800px" 
            mx="auto"
          >
            Experience the perfect blend of creativity and diplomacy at our grand celebration 
            of intellect and expression. This year, under the magical theme of snow, 
            we present extraordinary events designed to inspire and engage.
          </Text>

          <SimpleGrid columns={[1, null, 2]} spacing={8} width="full">
            <MotionBox
              bg="primary.light"
              p={6}
              borderRadius="xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Heading 
                color="secondary.cyan" 
                size="lg" 
                mb={4}
              >
                Sabda Tattva
              </Heading>
              <Text color="white">
                Immerse yourself in the beauty of words carved like snowflakes, 
                unique and timeless. Sabda Tattva, our literary fest, embraces 
                the theme of winter as a metaphor for reflection, storytelling, 
                and introspection. Let the chill of the season ignite your creativity 
                as we celebrate the art of writing, reading, and expression.
              </Text>
            </MotionBox>

            <MotionBox
              bg="primary.light"
              p={6}
              borderRadius="xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Heading 
                color="secondary.cyan" 
                size="lg" 
                mb={4}
              >
                SUMUN Society
              </Heading>
              <Text color="white">
                Amidst the icy backdrop of this season, diplomacy burns bright. 
                SUMUN brings together thinkers, leaders, and diplomats to tackle 
                pressing global issues. Through enriching workshops and engaging 
                simulations, participants will step into the shoes of diplomats 
                and shape the future.
              </Text>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default About;
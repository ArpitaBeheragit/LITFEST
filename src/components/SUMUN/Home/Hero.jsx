import React from "react";
import { 
  Box, 
  VStack, 
  Text, 
  Button, 
  ChakraProvider, 
  extendTheme 
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const theme = extendTheme({
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    primary: {
      light: "#0648A4",
      mid: "#61C7D9", 
      dark: "#031D40"
    },
    secondary: {
      cyan: "#7DEFF1",
      pink: "#E991CB"
    }
  }
});

const MotionText = motion(Text);

const Hero = ({ onScrollToNext }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const scrollToNextSection = () => {
    if (typeof onScrollToNext === 'function') {
      onScrollToNext();
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box 
        height="100vh" 
        width="100%" 
        bg="primary.dark" 
        color="white" 
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background={`
            linear-gradient(
              135deg, 
              rgba(6, 72, 164, 0.8), 
              rgba(97, 199, 217, 0.6)
            )
          `}
        />

        <VStack 
          spacing={8} 
          height="full" 
          justifyContent="center" 
          textAlign="center" 
          position="relative"
          zIndex={10}
        >
          <VStack spacing={4}>
            <MotionText
              fontSize={["4xl", "6xl"]} 
              fontWeight="bold" 
              color="secondary.cyan"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onClick={() => handleNavigation("../../pages/LITFEST/Home.jsx")}
              cursor="pointer"
            >
              SUMUN 2025
            </MotionText>

            <Text 
              fontSize={["4xl", "6xl"]} 
              fontWeight="bold" 
              color="secondary.cyan"
            >
              X
            </Text>

            <MotionText 
              fontSize={["4xl", "6xl"]} 
              fontWeight="bold" 
              color="secondary.cyan"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onClick={() => handleNavigation("../../pages/SABDATATVA/Home.jsx")}
              cursor="pointer"
            >
              SABDATATVA
            </MotionText>
          </VStack>

        </VStack>

        <Box 
          position="absolute" 
          left="0" 
          top="0" 
          bottom="0" 
          width="4rem" 
          bg="primary.light"
          display={["none", "block"]}
          overflow="hidden"
        >
          <Text
            transform="rotate(-90deg) translateX(-50%)"
            transformOrigin="left center"
            whiteSpace="nowrap"
            fontSize="2xl"
            fontWeight="bold"
            color="secondary.cyan"
            position="absolute"
            left="50%"
            top="50%"
          >
            LITFEST - THE LITERARY CARNIVAL
          </Text>
        </Box>

        <Box
          position="absolute"
          bottom="8"
          left="50%"
          transform="translateX(-50%)"
          cursor="pointer"
          onClick={scrollToNextSection}
          fontSize="2xl"
          color="secondary.cyan"
        >
          ↓
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Hero;
import React, { useState } from 'react';
import { 
  Box, 
  VStack, 
  Text, 
  Flex, 
  ChakraProvider, 
  extendTheme,
  Heading,
  IconButton,
  Slide
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

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

const teamMembers = [
  {
    name: "Aditya Sharma",
    role: "Festival Director",
    image: "/path/to/aditya.jpg",
    description: "A visionary leader passionate about literature and storytelling, Aditya brings creativity and strategic thinking to LITFEST 25."
  },
  {
    name: "Priya Nair",
    role: "Artistic Curator",
    image: "/path/to/priya.jpg",
    description: "With her keen eye for literary aesthetics, Priya crafts immersive experiences that breathe life into words and imagination."
  },
  {
    name: "Rohan Mishra",
    role: "Event Coordinator",
    image: "/path/to/rohan.jpg",
    description: "A master of logistics and coordination, Rohan ensures every event at LITFEST 25 runs smoothly and seamlessly."
  }
];

const TeamCarousel = () => {
  const [currentMember, setCurrentMember] = useState(0);

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box 
        bg="primary.dark" 
        color="white" 
        py={16} 
        px={8}
        position="relative"
        overflow="hidden"
      >
        <VStack spacing={8} maxW="container.xl" mx="auto" position="relative">
          <Heading 
            color="primary.mid" 
            size="2xl" 
            textAlign="center"
            mb={8}
          >
            Meet Our Team
          </Heading>

          <Flex 
            width="full" 
            alignItems="center" 
            justifyContent="center"
            position="relative"
          >
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={prevMember}
              position="absolute"
              left="0"
              variant="outline"
              color="secondary.cyan"
              borderColor="secondary.cyan"
            />

            <motion.div
              key={currentMember}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <VStack 
                bg="primary.light" 
                p={8} 
                borderRadius="xl" 
                maxW="600px" 
                spacing={6}
                textAlign="center"
              >
                <Box 
                  width="200px" 
                  height="200px" 
                  borderRadius="full" 
                  overflow="hidden"
                  border="4px solid"
                  borderColor="secondary.cyan"
                >
                  <img 
                    src={teamMembers[currentMember].image} 
                    alt={teamMembers[currentMember].name}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                </Box>

                <VStack spacing={2}>
                  <Heading 
                    color="secondary.cyan" 
                    size="lg"
                  >
                    {teamMembers[currentMember].name}
                  </Heading>
                  <Text 
                    color="primary.mid" 
                    fontWeight="bold"
                  >
                    {teamMembers[currentMember].role}
                  </Text>
                </VStack>

                <Text 
                  color="white" 
                  textAlign="center"
                >
                  {teamMembers[currentMember].description}
                </Text>
              </VStack>
            </motion.div>

            <IconButton
              icon={<ChevronRightIcon />}
              onClick={nextMember}
              position="absolute"
              right="0"
              variant="outline"
              color="secondary.cyan"
              borderColor="secondary.cyan"
            />
          </Flex>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default TeamCarousel;
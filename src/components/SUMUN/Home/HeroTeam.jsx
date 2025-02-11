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
  FormControl,
  Select
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const theme = extendTheme({
  colors: {
    primary: {
      light: "#0648A4",
      mid: "#61C7D9", 
      dark: "#000000"
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

const departments = [
  "Core Secretariat",
  "Delegate Affairs",
  "Public Relations",
  "Web Development",
  "Hospitality",
  "Finance",
  "Sponsorship",
  "Video Editing",
  "Creativity & Designing",
  "Logistics",
  "EB Affairs"
];

const teamMembers = [
  {
    name: "Aditya Sharma",
    role: "Festival Director",
    department: "Core Secretariat",
    image: "/path/to/aditya.jpg",
    description: "A visionary leader passionate about literature and storytelling, Aditya brings creativity and strategic thinking to LITFEST 25."
  },
  {
    name: "Aditya Sharma",
    role: "Festival Director",
    department: "Core Secretariat",
    image: "/path/to/aditya.jpg",
    description: "A visionary leader passionate about literature and storytelling, Aditya brings creativity and strategic thinking to LITFEST 25."
  },
  {
    name: "Priya Nair",
    role: "Artistic Curator",
    department: "Delegate Affairs",
    image: "/path/to/priya.jpg",
    description: "With her keen eye for literary aesthetics, Priya crafts immersive experiences that breathe life into words and imagination."
  },
  {
    name: "Rohan Mishra",
    role: "Event Coordinator",
    department: "Public Relations",
    image: "/path/to/rohan.jpg",
    description: "A master of logistics and coordination, Rohan ensures every event at LITFEST 25 runs smoothly and seamlessly."
  }
];

const TeamCarousel = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState("Core Secretariat");

  const filteredMembers = teamMembers.filter(
    member => member.department === selectedDepartment
  );

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % filteredMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + filteredMembers.length) % filteredMembers.length);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setCurrentMember(0);
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
          <Box width="full" position="relative">
            <Heading 
              color="primary.mid" 
              size="2xl"
              textAlign="center"
              mb={4}
            >
              Meet Our Team
            </Heading>
            
            <FormControl 
              maxW="150px" 
              position="absolute" 
              right="0" 
              top="50%" 
              transform="translateY(-50%)"
            >
              <Select
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                bg="blackAlpha.500"
                borderColor="secondary.cyan"
                color="white"
                size="sm"
                _hover={{ borderColor: "primary.mid" }}
                sx={{
                  fontFamily: "comfortaa,cursive",
                  fontSize: "sm",
                  "& option": {
                    background: "black",
                    color: "white"
                  }
                }}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>

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
              isDisabled={filteredMembers.length <= 1}
            />

            {filteredMembers.length > 0 ? (
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
                      src={filteredMembers[currentMember].image} 
                      alt={filteredMembers[currentMember].name}
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
                      {filteredMembers[currentMember].name}
                    </Heading>
                    <Text 
                      color="primary.mid" 
                      fontWeight="bold"
                    >
                      {filteredMembers[currentMember].role}
                    </Text>
                  </VStack>

                  <Text 
                    color="white" 
                    textAlign="center"
                  >
                    {filteredMembers[currentMember].description}
                  </Text>
                </VStack>
              </motion.div>
            ) : (
              <Text color="white">No team members found in this department.</Text>
            )}

            <IconButton
              icon={<ChevronRightIcon />}
              onClick={nextMember}
              position="absolute"
              right="0"
              variant="outline"
              color="secondary.cyan"
              borderColor="secondary.cyan"
              isDisabled={filteredMembers.length <= 1}
            />
          </Flex>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default TeamCarousel;
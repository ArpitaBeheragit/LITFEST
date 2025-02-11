import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Flex, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "../../../styles/SUMUN/Countdown.module.css";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white"
      }
    }
  }
});

const MotionBox = motion(Box);

const CountdownTimer = () => {
  const targetDate = "2025-03-27T11:59:59";
  
  const calculateTimeDelta = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    let delta = target - now;
    if (delta < 0) delta = 0;
    
    return {
      days: Math.floor(delta / (1000 * 60 * 60 * 24)),
      hours: Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((delta % (1000 * 60)) / 1000)
    };
  };

  const [time, setTime] = useState(calculateTimeDelta());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeDelta());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <MotionBox
      color="whiteAlpha.900"
      textAlign="center"
      whileHover={{ scale: 1.05 }}
    >
      <Text 
        fontSize={["5xl", "7xl", "8xl"]}
        fontFamily="Tilt Prism"
        fontWeight="normal"
      >
        {value.toString().padStart(2, '0')}
      </Text>
      <Text 
        fontSize={["md", "lg", "xl"]} 
        opacity={0.8}
      >
        {label}
      </Text>
    </MotionBox>
  );

  const Separator = () => (
    <Text 
      fontSize={["5xl", "7xl", "8xl"]} 
      color="whiteAlpha.900" 
      fontWeight="bold"
    >
      :
    </Text>
  );

  return (
    <ChakraProvider theme={theme}>
      <Box 
        minH="100vh" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        bg="black"
      >
        <VStack spacing={4}>
          <Text
            fontSize="6xl"
            letterSpacing="wider"
            fontFamily="Tilt Prism"
            color="whiteAlpha.900"
          >
            META
          </Text>
          
          <Text
            fontSize="xl"
            color="whiteAlpha.900"
          >
            Presents
          </Text>
          
          <Text
            fontSize="7xl"
            letterSpacing="1rem"
            fontWeight="normal"
            fontFamily="Tilt Prism"
            color="whiteAlpha.900"
          >
            LITFEST
          </Text>
          
          <Text
            fontSize="xl"
            mb={8}
            color="whiteAlpha.900"
          >
            Premiers in
          </Text>
          
          <MotionBox
            border="1px"
            borderColor="whiteAlpha.200"
            bg="blackAlpha.500"
            px={8}
            py={4}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Flex 
              alignItems="center"
              gap={[2, 4, 6]}
            >
              <TimeUnit value={time.days} label="Days" />
              <Separator />
              <TimeUnit value={time.hours} label="Hours" />
              <Separator />
              <TimeUnit value={time.minutes} label="Minutes" />
              <Separator />
              <TimeUnit value={time.seconds} label="Seconds" />
            </Flex>
          </MotionBox>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default CountdownTimer;
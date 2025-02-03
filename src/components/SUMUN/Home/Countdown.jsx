import React, { useState, useEffect } from "react";
import { 
  Box, 
  VStack, 
  Text, 
  Flex, 
  ChakraProvider, 
  extendTheme 
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const theme = extendTheme({
  colors: {
    primary: {
      light: "#0648A4",
      mid: "#61C7D9", 
      dark: "#031D40"
    }
  }
});

const MotionBox = motion(Box);

const CalcTimeDelta = () => {
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

  const [timeDelta, setTimeDelta] = useState(calculateTimeDelta());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDelta(calculateTimeDelta());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <MotionBox
      bg="primary.light"
      color="white"
      p={4}
      borderRadius="xl"
      textAlign="center"
      width="100px"
      whileHover={{ scale: 1.05 }}
    >
      <Text fontSize="3xl" fontWeight="bold">
        {value.toString().padStart(2, '0')}
      </Text>
      <Text fontSize="sm">{label}</Text>
    </MotionBox>
  );

  return (
    <ChakraProvider theme={theme}>
      <Box 
        bg="primary.dark" 
        color="white" 
        py={16} 
        textAlign="center"
      >
        <Text 
          fontSize="4xl" 
          mb={8} 
          fontWeight="bold" 
          color="primary.mid"
        >
          Event Countdown
        </Text>
        <Flex 
          justifyContent="center" 
          alignItems="center" 
          gap={4}
        >
          <TimeUnit value={timeDelta.days} label="Days" />
          <TimeUnit value={timeDelta.hours} label="Hours" />
          <TimeUnit value={timeDelta.minutes} label="Minutes" />
          <TimeUnit value={timeDelta.seconds} label="Seconds" />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default CalcTimeDelta;
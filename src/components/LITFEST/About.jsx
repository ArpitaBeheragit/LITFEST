import React from "react";
import { 
  Box, 
  VStack, 
  Text, 
  Flex, 
  ChakraProvider, 
  extendTheme,
  SimpleGrid
} from "@chakra-ui/react";
import { Typography} from "@mui/material";
import { motion } from "framer-motion";
import Heading from "../shared/Heading";
import styles from "../../styles/SABDATATTVA/sideBar.module.css";
import styles1 from "../../styles/LITFEST/about.module.css"
import { useNavigate } from "react-router-dom";


const MotionBox = motion(Box);

const About = () => {
    const navigate = useNavigate();
  return (
    <ChakraProvider >
      <Box 
        bg={"black"}
        py={16} 
        px={8}
      >
        <VStack spacing={8} maxW="container.xl" mx="auto">
        <Text 
            textAlign="center" 
            color="rgb(65 161 166)" 
            style={{fontSize:"75px"}} 
            mx="auto"
            className={styles.sit}
          >
              Silicon University Invites You
            </Text>

          <Text 
            textAlign="center" 
            color="white" 
            fontSize="xl" 
            maxW="800px" 
            mx="auto"
            style={{fontFamily:"comfortaa,cursive",textAlign:"justify"}}
            
          >
            Experience the perfect blend of creativity and diplomacy at our grand celebration 
            of intellect and expression. This year, under the magical theme of snow, 
            we present extraordinary events designed to inspire and engage.
          </Text>

          <SimpleGrid columns={[1, null, 2]} spacing={8} width="full" py={16} pt={10}>
            <MotionBox
              className={styles1.content}
              p={6}
              borderRadius="xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={()=>navigate("/sabdatattva")}
              cursor={"pointer"}
            >
              <Heading heading={"Sabdatattva"} />
              <Text color="white" fontFamily="comfortaa,cursive" textAlign={"justify"}>
                Immerse yourself in the beauty of words carved like snowflakes, 
                unique and timeless. Sabda Tattva, our literary fest, embraces 
                the theme of winter as a metaphor for reflection, storytelling, 
                and introspection. Let the chill of the season ignite your creativity 
                as we celebrate the art of writing, reading, and expression.
              </Text>
            </MotionBox>

            <MotionBox
            className={styles1.content}
              p={6}
              borderRadius="xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={()=>navigate("/sumun")}
              cursor={"pointer"}
            >
              <Heading heading={"SUMUN"} />
              <Text color="white" fontFamily="comfortaa,cursive" textAlign={"justify"}>
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
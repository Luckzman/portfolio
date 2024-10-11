import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Lucky Omokarho Oniovosa!";
const bio1 = "A senior frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
      <VStack>
        <Avatar
          size='2xl'
          name='Avatar'
          src={require('../images/portfolio-profile-img.png')}
        />
        <Text>{greeting}</Text>
      </VStack>
      <Heading align='center'>{bio1}<br />{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

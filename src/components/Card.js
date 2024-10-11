import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
    <VStack borderRadius="10px" background="white" overflow="hidden">
      <Image src={imageSrc} borderRadius="10px" padding='10px' objectFit={"contain"} maxHeight={'350px'} />
      <VStack align="flex-start" color="black" paddingX="20px" paddingY="10px">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack><Text fontWeight="bold" fontSize="0.9em">See more</Text><FontAwesomeIcon icon={faArrowRight} size="1x" /></HStack>
      </VStack>
    </VStack>
  );
};

export default Card;

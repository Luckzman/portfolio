import { Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc, githubUrl, demoLink }) => {
  
  return (
    <VStack borderRadius="10px" background="white" overflow="hidden">
      <Image src={imageSrc} borderRadius="10px" padding='10px' objectFit={"contain"} maxHeight={'350px'} />
      <VStack align="flex-start" color="black" paddingX="20px" paddingY="10px">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack justifyContent="space-between" width='100%'>
          <HStack><Link fontWeight="bold" fontSize="0.9em" textDecoration="underline pink" _hover={{ color: 'pink'}}  href={githubUrl} target="_blank">Github</Link></HStack>
          <HStack><Link fontWeight="bold" fontSize="0.9em" href={demoLink} textDecoration="underline pink" _hover={{ color: 'pink'}} target="_blank">Demo</Link></HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;

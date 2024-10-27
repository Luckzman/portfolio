import { Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc, githubUrl, demoLink, liveLink, stack }) => {
  
  return (
    <VStack borderRadius="10px" background="white" overflow="hidden" display='flex' flexDirection='column'>
      <Image src={imageSrc} borderRadius="10px" padding='10px' width='100%' flex={1} objectFit="cover" maxHeight='350px' />
      <VStack align="flex-start" color="black" width='100%' paddingX="20px" paddingY="10px">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        {/* <HStack>
          <Heading size='sm'>Tech stack: </Heading><Text>{stack}</Text>
        </HStack> */}
        <HStack justifyContent="space-between" width='100%' paddingTop={3}>
          <HStack><Link fontWeight="bold" fontSize="0.9em" textDecoration="underline pink" _hover={{ color: 'pink'}}  href={githubUrl} target="_blank">Github</Link></HStack>
          {demoLink && <HStack><Link fontWeight="bold" fontSize="0.9em" href={demoLink} textDecoration="underline pink" _hover={{ color: 'pink'}} target="_blank">Video Demo</Link></HStack>}
          <HStack><Link fontWeight="bold" fontSize="0.9em" href={liveLink} textDecoration="underline pink" _hover={{ color: 'pink'}} target="_blank">Live Site</Link></HStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;

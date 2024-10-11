import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Reserve a table Feature",
    description:
      "Table reservation feature of Little Lemon that allows customer to reserve a table at a resturant,",
    getImageSrc: () => require('../images/reserve-screenshot.png'),
  },
  {
    title: "DiaCare HeathCare Admin Dashboard",
    description:
      "DiaCare HeathCare Provider Admin Dashboard, helps manage transaction, customer database of healthcare providers",
    getImageSrc: () => require('../images/diacare-screenshot.png'),
  },
  {
    title: "FoodTrove Ecommerce App",
    description:
      "A One-stop shop for food lovers to order for their favourite meals",
    getImageSrc: () => require('../images/FoodTrove E-commerce .png'),
  },
  {
    title: "JobFinder Mobile App",
    description:
      "A mobile application that help job seeker to look for jobs",
    getImageSrc: () => require('../images/job-finder-mobile-app.jpeg'),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{md: "repeat(2,minmax(0,1fr))"}}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

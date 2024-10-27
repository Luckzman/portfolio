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
    githubLink: 'https://github.com/Luckzman/reserve-it',
    liveLink: 'https://little-lemon-reserve-it.netlify.app/',
    demoLink: 'https://youtu.be/ZMJXbxpHHvg',
    stack: ''
  },
  {
    title: "DiaCare HeathCare Admin Dashboard",
    description:
      "DiaCare HeathCare Provider Admin Dashboard, helps manage transaction, customer database of healthcare providers",
    getImageSrc: () => require('../images/diacare-screenshot.png'),
    githubLink: 'https://github.com/Luckzman/diacare-demo',
    liveLink: 'https://roaring-frangollo-765abc.netlify.app/',
    demoLink: 'https://youtu.be/b-6Z53NaXCw',
    stack: ''
  },
  {
    title: "FoodTrove Ecommerce App (In-Progress)",
    description:
      "A One-stop shop for food lovers to order for their favourite meals",
    getImageSrc: () => require('../images/FoodTrove E-commerce .png'),
    githubLink: 'https://github.com/Luckzman/FoodTrove',
    liveLink: 'https://foodtrove.netlify.app/',
    stack: ''
  },
  {
    title: "JobFinder Mobile App",
    description:
      "A mobile application that help job seeker to look for jobs",
    getImageSrc: () => require('../images/job-finder-app.png'),
    githubLink: 'https://github.com/Luckzman/Job-Finder',
    liveLink: 'https://expo.dev/preview/update?message=implement%20share%20job%20feature&updateRuntimeVersion=1.0.0&createdAt=2024-07-13T16%3A30%3A38.055Z&slug=exp&projectId=ce32632e-402a-4e26-8037-1d599201cf66&group=c10328b6-eb83-441a-b55a-96ac13c27381',
    demoLink: 'https://youtube.com/shorts/RxVsVBHkpxw',
    stack: ''
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
            githubUrl={project.githubLink}
            liveLink={project.liveLink}
            demoLink={project.demoLink}
            stack={project.stack}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

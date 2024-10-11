import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faDev,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: luckyomokarho@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Luckzman",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/lucky-oniovosa-1809b544/",
  },
  {
    icon: faDev,
    url: "https://dev.to/lucky_oniovosa",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com/@luckyomokarho",
  },
];

const Header = () => {

  const ref = useRef()
  const prevScrollY = useRef(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if(currentScrollY > prevScrollY.current) {
      ref.current.style.transform = 'translateY(-200px)';
      ref.current.style.transitionDuration = '1.5s'
    } else {
      ref.current.style.transform = 'translateY(0)';
      ref.current.style.transitionDuration = '1.5s'
    }
    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={3}
      ref={ref}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map(item => <a key={item.url} href={item.url} target="_blank"><FontAwesomeIcon icon={item.icon} size="2x" /></a> )}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#contact-me" onClick={() => handleClick('contactme')()}>Contact Me</a>
              <a href="#projects" onClick={() => handleClick('projects')()}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

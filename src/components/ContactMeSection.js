import React, {useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const [loading, setLoading] = useState(false);
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      enquiryType: 'Freelance' | 'Open Source' | 'Job Opportunity' | 'Others',
      message: ''
    },
    onSubmit: (values) => {
      setLoading(true)
      var data = new FormData()
      data.set('fullName', values.fullName)
      data.set('email', values.email)
      data.set('enquiryType', values.enquiryType)
      data.set('message', values.message)
      fetch('https://formspree.io/f/mnnqareb', {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          setLoading(false)
          onOpen('success', 'Thank you for contacting us, we\'ll get back to you')
          formik.resetForm()
        } 
      }).catch(error => console.log(error, 'error'))
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().required('Required').email("Invalid email address"),
      type: Yup.string().optional(),
      message: Yup.string().required('Required').min(25, "Must be at least 25 characters")
    }),
  });


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w={{lg: "1024px"}} p={{base:10, md:20, lg: 32}} alignItems="flex-start">
        <Heading as="h1" p={6} id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(e) => {e.preventDefault(); formik.handleSubmit()}}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.fullName && formik.errors.fullName}>
                <FormLabel htmlFor="fullName">Full Name</FormLabel>
                <Input
                  id="fullName"
                  name="fullName"
                  {...formik.getFieldProps('fullName')}
                />
                {formik.touched.fullName  && formik.errors.fullName && <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>}
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && <FormErrorMessage>{formik.errors.email}</FormErrorMessage>}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="enquiryType">Type of enquiry</FormLabel>
                <Select id="type" name="enquiryType" {...formik.getFieldProps('enquiryType')}>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="FreeLance Project">Freelance project proposal</option>
                  <option value="Open Source">
                    Open source consultancy session
                  </option>
                  <option value="Others">
                    Others
                  </option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.message && formik.errors.message}>
                <FormLabel htmlFor="message">Your message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  height={250}
                  {...formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message && <FormErrorMessage>{formik.errors.message}</FormErrorMessage>}

              </FormControl>
              <Button isLoading={loading} disabled={loading} color="white" type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

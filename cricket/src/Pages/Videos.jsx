import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import VideoCard from "../Video/VideoCard";

const Videos = () => {
  return (
    <>
      <Box width={"70%"} m="auto" mt={10} textAlign="center">
        <VideoCard />
      </Box>
      <Footer />
    </>
  );
};

export default Videos;

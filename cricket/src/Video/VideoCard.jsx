import { AspectRatio, Box, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const VideoCard = () => {
  const [video, setVideo] = useState([]);
  const [singleVideo, setSingleVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=cricket&key=${process.env.REACT_APP_YOUTUBE_KEY}`
      )
      .then((res) => {
        setVideo(res.data.items);
        setSingleVideo(res.data.items[0]);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);
  console.log(singleVideo);

  return (
    <div>
      <Box boxShadow="sm" p="6" rounded="md" bg="white">
        <AspectRatio h="300px" ratio={4 / 3} opacity="0.8">
          <iframe
            title="naruto"
            src={`https://www.youtube.com/embed/${singleVideo?.id?.videoId}`}
            allowFullScreen
          />
        </AspectRatio>
        <Box textAlign={"left"}>
          <Text fontWeight={"500"} fontSize="18px">
            {singleVideo?.snippet?.title}
          </Text>
          <Text fontWeight={"500"} fontSize="14px">
            {new Date(singleVideo?.snippet?.publishTime).toDateString()}
          </Text>
        </Box>
      </Box>
      {video?.map((el, i) => {
        return (
          <SimpleGrid
            columns={2}
            key={el.id + i}
            my={3}
            boxShadow="sm"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box width="50%">
              <AspectRatio maxW="200px" h="150px" ratio={4 / 3} opacity="0.8">
                <iframe
                  title="naruto"
                  src={`https://www.youtube.com/embed/${el.id.videoId}`}
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
            <Box ml={"-45%"} textAlign="left">
              <Text fontWeight={"bold"} fontSize="20px">
                {el.snippet.channelTitle}
              </Text>
              <Text fontWeight={"500"} fontSize="14px">
                {new Date(el.snippet.publishTime).toDateString()}
              </Text>
              <Text fontSize="sm">{el.snippet.title}</Text>
            </Box>
          </SimpleGrid>
        );
      })}
    </div>
  );
};

export default VideoCard;

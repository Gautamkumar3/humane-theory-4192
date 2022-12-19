import {
  Box,
  Button,
  CircularProgress,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ScheduleCard from "../ScheduleComponent/ScheduleCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../Components/Footer";

const getData = (filter) => {
  return axios.get(
    `https://cricket-api-production.up.railway.app/data?q=${filter}`
  );
};

const Schedule = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("Match not started");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(filter).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [filter]);

  return (
    <>
      <Box w="70%" m="auto" p={5} bg="white">
        <Text fontWeight="bold" fontSize="lg" letterSpacing={1}>
          Schedule
        </Text>
        <Stack direction="row" spacing={4} align="center" my={5}>
          <Button
            onClick={() => setFilter("Match not started")}
            bg="#9b000d"
            variant="solid"
            color="white"
            w="20%"
          >
            UPCOMING
          </Button>
          <Button
            onClick={() => setFilter("won")}
            colorScheme="teal"
            variant="outline"
            w="20%"
          >
            RESULTS
          </Button>
          <Button
            onClick={() => setFilter("")}
            colorScheme="teal"
            variant="outline"
            w="20%"
          >
            ALL
          </Button>
        </Stack>
        {loading ? (
          <Box w="10%" m="auto">
            <CircularProgress
              isIndeterminate
              size="200px"
              m="auto"
              color="green.300"
            />{" "}
          </Box>
        ) : (
          <SimpleGrid columns={[2, 3]} spacing={3}>
            {data?.map((el) => (
              <ScheduleCard
                key={el.id}
                type={el.matchType}
                namea={el.namea}
                imga={el.imga}
                nameb={el.nameb}
                imgb={el.imgb}
                status={el.status}
                date={el.date}
                name={el.name}
                venue={el.venue}
              />
            ))}
          </SimpleGrid>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Schedule;

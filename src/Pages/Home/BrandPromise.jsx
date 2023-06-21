import React from "react";
import { Box, Grid, Flex, Text, Image, Center } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';

const BrandPromise = ({ type, heading }) => {
  return (
    <Box mb="2" cursor="pointer">
      <Center>
        <Text fontSize="xl" color="green" fontWeight="700" p="4">
          {heading}
        </Text>
      </Center>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        gap={6}
        w="98%"
        m="auto"
      >
        {type.map((i) => (
          <Flex
            key={uuidv4()}
            border="1px"
            borderColor="gray.200"
            flexDirection="column"
            backgroundColor="wheat"
            borderRadius="md"
            p="1"
          >
            <Center>
              <Image boxSize="40px" src={`${i.img}`} alt={i.name} />
            </Center>
            <Center>
              <Text color="rgb(36, 19, 79)" fontSize="sm" fontWeight="700">
                {i.title}
              </Text>
            </Center>
            <Center>
              <Text fontSize="10px" color="gray.600">
                {i.desc}
              </Text>
            </Center>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandPromise;
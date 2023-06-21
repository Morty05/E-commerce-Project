import React from "react";
import { Box, Flex, Text, Image, Square } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const SliderFormat = ({ type }) => {
  return (
    <Box justifyContent="left" w="100%" m="auto" mt="6" cursor="pointer">
      <Box mt="1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {type.map((i) => (
            <Box key={uuidv4()}>
              <SwiperSlide p={10}>
                <Link to={i.linked}>
                  <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                    <Image src={`${i.img}`} alt={i.name} boxSize="160px" />
                  </Square>
                  <Box p="2" mt="4">
                    <Text
                      color="#275293"
                      noOfLines={2}
                      textAlign="left"
                      fontSize="15px"
                      _hover={{ color: "red" }}
                    >
                      {i.name}
                    </Text>
                    <Box mt="2.5">
                      <Flex>
                        <Square>
                          <Text color="gray.600" fontSize="14px">
                            Deal Price:{" "}
                          </Text>
                        </Square>
                        <Square>
                          <Text fontWeight="600" fontSize="18px" ml="1">
                            ₹{i.price}
                          </Text>
                        </Square>
                      </Flex>
                      <Flex>
                        <Text color="gray.600" fontSize="14px">
                          MRP:{" "}
                        </Text>
                        {"  "}
                        <Text as="s" color="gray.600" fontSize="14px" ml="1">
                          ₹{i.mrp}
                        </Text>
                      </Flex>
                      <Flex>
                        <Text color="gray.600" fontSize="14px">
                          You Save:{" "}
                        </Text>
                        {"  "}                        
                        <Text color="gray.600" fontSize="14px" ml="1">
                          {i.discount}
                        </Text>
                      </Flex>
                      <Text fontSize={12} color="#003380" fontWeight={"bold"}>{i.Rating}</Text>
                      <Box
                        borderRadius="xl"
                        border="1px"
                        borderColor="green.900"
                        w="40%"
                        color="green.500"
                        bg="green.50"
                        mt="2"
                        textAlign="center"
                      >
                        <Text fontSize="9px" fontWeight="500">
                          OFFERS AVAILABLE
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </SwiperSlide>
            </Box>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default SliderFormat;
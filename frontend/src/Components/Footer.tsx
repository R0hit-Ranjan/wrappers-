import React from 'react'
import { extendTheme } from '@chakra-ui/react'
import {
    Box,
    SimpleGrid,
    Image,
    UnorderedList,
    ListItem,
  } from "@chakra-ui/react";
const Footer = () => {
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
  const theme = extendTheme({ breakpoints })
  

    return (
        <div style={{ background: "#181818", }}  >
          <Box
          //  w="1140px"
          w="63%"
            m="auto" p="5"  >
            
            <SimpleGrid
           
              columns={{xl:4, lg:4, md:2, sm:2, base:1}}
              row={{xl:0, lg:2, md:2, sm:2, base:4}}
              // w="1140px"

              m="auto"
              fontSize="12px"
              color="#FFFFFFE6"

            >
              <Box fontSize="12px" color="#FFFFFFE6"
              // w="285px" 
              mb="20px"
              height="128px">
                <UnorderedList
                  textAlign="left"
                  listStyleType="none"
                  fontWeight="medium"
                >
                  <Box
                    color="#FDD835"
                    letterSpacing="1px"
                    m="0 0 20px 0"
                    fontWeight="medium"
                  >
                    CUSTOMER SERVICE
                  </Box>
                  <ListItem>Contact Us</ListItem>
                  <ListItem>Track Order</ListItem>
                  <ListItem>Retrun Order</ListItem>
                  <ListItem>Cancel Order</ListItem>
                </UnorderedList>
              </Box>
              <Box 
              // w="285px" 
              mb="20px"
              height="128px">
                <UnorderedList
                  textAlign="left"
                  listStyleType="none"
                  fontWeight="medium"
                >
                  <Box
                    color="#FDD835"
                    letterSpacing="1px"
                    m="0 0 20px 0"
                    fontWeight="medium"
                  >
                    COMPANY
                  </Box>
                  <ListItem>About Us</ListItem>
                  <ListItem>We're Hiring</ListItem>
                  <ListItem>Terms & Conditions</ListItem>
                  <ListItem>Privacy Policy</ListItem>
                  <ListItem>Blog</ListItem>
                </UnorderedList>
              </Box>
              <Box 
              // w="285px"
              p="0 10px"
               height="128px" textAlign="left">
                <Box
                  color="#FDD835"
                  letterSpacing="1px"
                  // p="0 10px"
                  m="0 0 20px 0"
                  fontWeight="medium"
                >
                  CONTACT WITH US
                </Box>
                <Box
                //  w="165px"
                  h="60px" >
                  <Box><Box as="span">4.7M People Like this</Box></Box>
                  <Box><Box as="span">1M Followers</Box></Box>
                </Box>
              </Box>
              <Box
              //  w="285px"
                height="128px">
                <UnorderedList
                  textAlign="left"
                  listStyleType="none"
                  fontWeight="medium"
                >
                  <Box
                    color="#FDD835"
                    letterSpacing="1px"
                    m="0 0 20px 0"
                    fontWeight="medium"
                  >
                    KEEP UP TO DATE
                  </Box>
                  <form >
                    <input style={{outline: "none",
                      background:" transparent",
                      border:" none",
                      borderBottom: "1.4px solid #fdd835",
                      width: "55%",
                      height: "34px",fontSize:"14px"}}  placeholder="Enter Email Id"  type="email" name="email" id="email" />
                    <input style={{   
                       width: "45%",
                      background: "#fdd835",
                      border: "1px solid #fdd835",
                      height: "34px",
                      color: "#000",
                      padding: "0"}} type="submit" value="SUBSCRIBE" />
                  </form>
                </UnorderedList>
              </Box>
            </SimpleGrid>
            <br />
            <br />
            <SimpleGrid columns={{xl:4, lg:4, md:2, sm:2,base:1}}
              row={{xl:0, lg:2, md:2, sm:2, base:3}}
              // w="1140px"
              m="auto"
              textAlign={"center"}
              fontSize="12px"
              color="#FFFFFFE6" >
              
            <Box fontSize="12px" color="#FFFFFFE6" 
            // w="285px"
             height="128px">
                <UnorderedList
                  textAlign="left"
                  listStyleType="none"
                  fontWeight="medium"
                  // w="285px" 
                  h="60px"
                >
                  
                  <ListItem p="6px 0" >    15 Days return policy*</ListItem>
                  <ListItem p="6px 0" >    Cash on delivery*</ListItem>
                  
                </UnorderedList>
              </Box>
              <Box
              //  w="285px" 
               height="128px">
                <UnorderedList
                  textAlign="left"
                  listStyleType="none"
                  fontWeight="medium"
                  display="flex"
                  flexDirection="column"
                >
                  <Box
                    color="#FDD835"
                    letterSpacing="1px"
                    m="0 0 20px 0"
                    fontWeight="medium"
                  >
                    DOWNLOAD THE APP
                  </Box>
                  <Box display="flex" >
    
                  <ListItem><Image w="100px" mr="5px" src="https://images.bewakoof.com/web/app_android_v1.png" /></ListItem>
                  <ListItem><Image w="100px" mr="5px" src="https://images.bewakoof.com/web/app_ios_v1.png" /></ListItem>
                  </Box>
                  
                </UnorderedList>
              </Box>
              <Box
              //  w="285px"
                height="128px">
                <UnorderedList
                  textAlign="left"
                  listStyleType="none"
                  fontWeight="medium"
                >
                  <Box
                    color="#FDD835"
                    letterSpacing="1px"
                    m="0 0 20px 0"
                    fontWeight="medium"
                  >
                    100% SECURE PAYMENT
                  </Box>
                  <Image src="https://images.bewakoof.com/web/secure-payments-image.png" />
                </UnorderedList>
              </Box>
            </SimpleGrid>
          </Box>
        </div>
      );
}

export default Footer
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '../components/layout'

import {
  Box,
  Link,
  Image,
  Heading,
  Divider,
  Grid,
  Button
} from '@chakra-ui/core'

const About = () => {
  // const router = useRouter()
  // router.query
  return (
    <Layout>
      <Head>
        <title>About</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Box
        as='main'
        mx='180px'
        mt='2px'
        bg='white'
        minH='100vh'

        boxShadow='0 -1px 10px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #f3ece8'
        borderRadius='4px 4px 0 0'
      >
        <Box p='40px'>
          <Box as='header' textAlign='center'>
            <Heading as='h1' size='xl'>
              In love with React & Next
            </Heading>
            <Heading as='h4' size='md' color='#283c46' fontWeight='normal' mb='20px'>
              In love with React & Next
            </Heading>

            <Box as='section' maxW='94%' d='inline-block'>
              <Box as='div' float="right">
                <Box as='a' 
                    border="1px solid" 
                    p='7px 20px'
                    borderRadius="30px"
                    fontSize="13px">
                  <span>add/remove</span>
                </Box>
              </Box>
              <Box as='div' overflow="hidden">
                <Box as='div' overflow="hidden" whiteSpace="nowrap" mr='10px'>
                    <Box as='span' w='30px' h='30px' d='inline-block' background='red' borderRadius='50%'></Box>
                </Box>
              </Box>
            </Box>
          </Box>


          {/* card 事列 */}
          <Box as='section'>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
              <Box w='100%' h='250px' p='18px 24px' borderRadius='6px' boxShadow='0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1)' bg='#fff'>
                <Box as='header'>
                  <Box as='h1' 
                  textAlign="center"
                  fontWeight="bold"
                  p="14px 10px"
                  borderBottom="1px solid #d9d9d9">
                    Message Board
                  </Box>
                </Box>
              </Box>
              <Box w='100%' h='250px' p='18px 24px' borderRadius='6px' boxShadow='0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1)' bg='#fff'>

              </Box>
              <Box w='100%' h='250px' p='18px 24px' borderRadius='6px' boxShadow='0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1)' bg='#fff'>

              </Box>
              <Box w='100%' h='250px' p='18px 24px' borderRadius='6px' boxShadow='0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1)' bg='#fff'>

              </Box>
              <Box w='100%' h='250px' p='18px 24px' borderRadius='6px' boxShadow='0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1)' bg='#fff'>

              </Box>
              <Box w='100%' h='250px' p='18px 24px' borderRadius='6px' boxShadow='0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1)' bg='#fff'>

              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default About

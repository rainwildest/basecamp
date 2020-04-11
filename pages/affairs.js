import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import LinkNext from 'next/link'

import {
  Box,
  Link,
  Image,
  Heading,
  Divider,
  Grid
} from '@chakra-ui/core'

import ListCard from '../components/list-card'
import BgLayout from '../components/bg-layout'
import HomeFieldset from '../components/home-fieldset'

const About = () => {
  // const router = useRouter()
  // router.query
  return (
    <BgLayout>
      <Box as='header' textAlign='center'>
        <Heading as='h1' size='xl'>
              In love with React & Next
        </Heading>
        <Heading as='h4' size='md' color='#283c46' fontWeight='normal'>
              In love with React & Next
        </Heading>

        <Box as='section' maxW='94%' mt='20px' mb='20px' d='inline-block'>
          <Box as='div' float='right'>
            <Box
              as='a'
              border='1px solid'
              p='7px 20px'
              borderRadius='30px'
              fontSize='13px' d='block'
            >
              <span>add/remove</span>
            </Box>
          </Box>
          <Box as='div' overflow='hidden'>
            <Box as='div' overflow='hidden' whiteSpace='nowrap' mr='10px'>
              <Box as='span' w='35px' h='35px' d='inline-block' background='red' borderRadius='50%' />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* card 事列 */}
      <Box as='section'>
        <Grid
          justifyItems='center'
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={2}
        >
          <ListCard title='Message Board' href='/affairsdetails?multipage=true' />
          <ListCard title='To-dos' href='/' />
          <ListCard title='Message Board' href='/' />
          <ListCard title='Campfire' href='/' />
        </Grid>
      </Box>

      <Box as='section'>
        <LinkNext href='/'>
          <Box textAlign='center' my='40px'>
            <Link>Change tools</Link>
          </Box>
        </LinkNext>

        {/* <HomeFieldset title='地域電腦有限公司' /> */}
        <Divider />
      </Box>
      <Box as='footer' mt='15px'>
        <Box as='div' textAlign='center'>
          <Image
            w='50px'
            h='50px'
            d='inline-block'
            src='/images/logo.png'
          />
        </Box>
        <Box>
          <Heading
            as='h4'
            size='md'
            textAlign='center'
          >
                Welcome to
          </Heading>
        </Box>
      </Box>

    </BgLayout>
  )
}

export default About

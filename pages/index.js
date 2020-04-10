import React from 'react'
import Head from 'next/head'
import LinkNext from 'next/link'
import { withTheme } from 'emotion-theming'

import {
  Box,
  Link,
  Image,
  Heading,
  Divider
} from '@chakra-ui/core'

import Layout from '../components/layout'

const Home = () => (
  <Layout className='container'>
    <Head>
      <title>Create Next App</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>

    <Box as='main' pt='5px'>
      <Box mx='180px'>
        <Box as='section'>
          <Box
            as='header'
            mb='15px'
            position='relative'
            textAlign='center'
          >
            <Box as='span' fontSize='20px'>
            地域電腦有限公司
            </Box>
          </Box>
          
          <Box as='div' d='flex' justifyContent='center' alignItems='center'>
            {/* <Box as='article' border='2px dashed rgba(0,0,0,0.15)'>
              kjk
            </Box> */}
            <Box
              as='article'
              w='250px'
              h='130px'
              bg='white'
              borderRadius='10px'
              shadow='0px 0px 6px 0px #b9b9b9'
            >
              <LinkNext
                href='/about'
              >
                <Box
                  as='a' href='#'
                  d='inline-block'
                  w='100%'
                  h='100%'
                >
                  <Box as='div' p='10px'>
                    <Box
                      as='h2'
                      fontSize='15px'
                      fontWeight='bold'
                    >
                    地域電腦有限公司
                    </Box>
                    <Box
                      as='p'
                      wordBreak='break-all'
                      fontSize='13px'
                    >
                      jljlkjkljljjljljlkjljlkjjlkjljlj
                      ljljf;sldjflasjflasjdflkasjdfasjd
                    </Box>
                  </Box>

                </Box>
              </LinkNext>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Layout>
)

export default withTheme(Home)

import React from 'react'
import Head from 'next/head'
import LinkNext from 'next/link'
import { withTheme } from 'emotion-theming'

import {
  Box
} from '@chakra-ui/core'

import Layout from '../components/layout'
import HomeFieldset from '../components/home-fieldset'
import HomeCard from '../components/home-card'

const Home = () => {
  return (
    <Layout className='container'>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Box as='main' pt='5px'>
        <Box maxW='60%' mx='auto'>
          <Box as='section'>

            <HomeFieldset title='地域電腦有限公司' />
            <Box as='div' textAlign='center'>
              {/* <Box as='article' border='2px dashed rgba(0,0,0,0.15)'>
              kjk
              </Box> */}
              <HomeCard
                href='/affairs'
                title='地域電腦有限公司'
                content='jljlkjkljljjljljlkjljlkjjlkjljlj
                      ljljf;sldjflasjflasjdflkasjdfasjd'
              />

              <HomeCard
                href='/affairs'
                title='地域電腦有限公司'
                content='jljlkjkljljjljljlkjljlkjjlkjljlj
                      ljljf;sldjflasjflasjdflkasjdfasjd'
              />
            </Box>

            <HomeFieldset title='地域電腦有限公司' tool='true' />

          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default withTheme(Home)

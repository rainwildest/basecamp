import React from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Alert,
  AlertDescription,
  Heading
} from '@chakra-ui/core'

import Layout from './layout'

const bgLayout = (props) => {
  const router = useRouter()
  return (
    <Layout>
      <Box as='main'>
        <Alert
          status='warning'
          maxW='55%'
          mx='auto'
          rounded='7px'
          my='10px'
          d={(props.alert ? 'block' : 'none')}
        >
          {/* <AlertTitle mr={2}>Your browser is outdated!</AlertTitle> */}
          <AlertDescription>
            {props.alert}
          </AlertDescription>
        </Alert>

        <Box
          onClick={() => (router.back())}
          mx='auto'
          h='50px'
          d={props.multipage ? 'flex' : 'none'}
          bg='#fff'
          maxW='65%'
          cursor='pointer'
          alignItems='center'
          justifyContent='center'
          roundedTopLeft='4px'
          roundedTopRight='4px'
          boxShadow='0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #f3ece8'
          className={(props.multipage ? 'nav-prev' : '')}
        >
          <Heading as='h4' size='md'>test</Heading>
        </Box>

        <Box
          as='div'
          maxW='75%'
          mt='2px'
          mx='auto'
          bg='white'
          minH='100vh'
          boxShadow='0 -1px 10px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #f3ece8'
          borderRadius='4px 4px 0 0'
          className='nav-page'
        >
          <Box p='60px'>
            {props.children}
          </Box>
        </Box>
      </Box>

      <style jsx global>
        {`
          .nav-prev ~ .nav-page{
            margin-top:0 !important;
          }
        `}
      </style>
    </Layout>
  )
}

export default bgLayout

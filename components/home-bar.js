import React from 'react'
import LinkNext from 'next/link'
import {
  Box,
  Image,
  List,
  ListItem
} from '@chakra-ui/core'

const HomeBar = () => {
  return (
    <Box h='40px'>
      <Box
        as='nav'
        h='40px'
        lineHeight='40px'
        px='10px'
        position='fixed'
        width='100%'
        top='0'
        letf='0'
        textAlign='center'
        background='rgba(246, 242, 239, 0.9)'
        zIndex='100'
      >

        <List
          as='ul'
          d='flex'
          alignItems='center'
          justifyContent='center'
          position='absolute'
          top='0px'
          left='0px'
        >
          <ListItem h='35px' w='35px' mr='5px'>
            <Image src='/images/logo.png' />
          </ListItem>
          <ListItem fontWeight='bold' fontSize='14px'>
            地域電腦有限公司
          </ListItem>
        </List>

        <List as='ul' d='inline-block' width='92%'>
          <ListItem fontWeight='bold' d='inline-block' p='0px 28px'>

            <LinkNext
              href='/'
            >
              <Box as='a' href='#'>
              Home
              </Box>
            </LinkNext>
          </ListItem>
          <ListItem fontWeight='bold' d='inline-block' p='0px 28px'>Pings</ListItem>
          <ListItem fontWeight='bold' d='inline-block' p='0px 28px'>Hey!</ListItem>
          <ListItem fontWeight='bold' d='inline-block' p='0px 28px'>Activity</ListItem>
          <ListItem fontWeight='bold' d='inline-block' p='0px 28px'>Me</ListItem>
          <ListItem fontWeight='bold' d='inline-block' p='0px 28px'>Find</ListItem>
        </List>

        <Box
          as='div'
          w='30px'
          h='30px'
          mt='5px'
          mr='10px'
          background='red'
          borderRadius='50%'
          position='absolute'
          top='0px'
          right='0px'
        />
      </Box>
    </Box>
  )
}

export default HomeBar

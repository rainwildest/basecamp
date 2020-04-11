import React from 'react'
import LinkNext from 'next/link'

import {
  Box
} from '@chakra-ui/core'

// 事项卡片
const listCard = (props) => {
  const fontSize = 16
  return (
    <>
      <LinkNext href={props.href}>
        <Box
          as='div'
          className='list-card'
          d='block'
          href='#'
          w={(250 / fontSize) + 'rem'}
          borderRadius='6px'
          boxShadow='0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1)'
          bg='#fff'
          cursor='pointer'
          position='relative'
        >
          <Box
            as='a'
            position='absolute'
            top='0px'
            bottom='0px'
            left='0px'
            right='0px'
          >
            <Box
              as='div'
              my='14px'
              mx='28px'
              position='absolute'
              top='0px'
              left='0px'
              bottom='0'
              right='0px'
              overflow='hidden'
            >
              <Box as='header'>
                <Box
                  as='h1'
                  textAlign='center'
                  fontWeight='bold'
                  py={(14 / fontSize) + 'rem'}
                  px={(10 / fontSize) + 'rem'}
                  borderBottom='1px solid #d9d9d9'
                >
                  {props.title}
                </Box>
              </Box>
              <Box mt='12px' as='section' />
            </Box>
          </Box>
        </Box>
      </LinkNext>

      <style jsx global>
        {
          `.list-card:before{
            content: '';
            display: block;
            padding-top: 100%;
          }`
        }
      </style>
    </>
  )
}

export default listCard

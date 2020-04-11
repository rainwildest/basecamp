import React from 'react'
import LinkNext from 'next/link'

import {
  Box
} from '@chakra-ui/core'

const homeCard = (props) => {
  return (
    <>
      <LinkNext
        href={props.href}
      >
        <Box
          as='article'
          w='250px'
          bg='white'
          d='inline-block'
          borderRadius='10px'
          position='relative'
          mr='15px'
          shadow='0px 0px 6px 0px #b9b9b9'
          className='home-card-item'
        >
          <Box
            as='a'
            href='#'
            className='card-link'
          >
            <Box
              as='div'
              p='15px'
              className='card-content'
            >
              <Box as='div'>
                <Box
                  as='h2'
                  fontSize='15px'
                  fontWeight='bold'
                >
                  {props.title}
                </Box>
                <Box
                  as='p'
                  wordBreak='break-all'
                  fontSize='13px'
                >
                  {props.content ? props.content : ''}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box as='div' position='absolute' top='0px' />

        </Box>
      </LinkNext>
      <style jsx global>
        {`
        .home-card-item:before{
          content: '';
          display: block;
          padding-top: 55%;
        }
        .card-link,
        .card-content{
          position:absolute;
          top:0px;
          left:0px;
          right:0px;
          bottom:0px;
          text-align: left;
        }
        `}
      </style>
    </>
  )
}

export default homeCard

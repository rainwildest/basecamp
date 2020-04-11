import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const fieldset = (props) => {
  return (
    <>
      <Box
        as='header'
        my='20px'
        position='relative'
        textAlign='center'
        className='header-line'
      >
        <Box
          as='div'
          left='0px'
          h='40px'
          d={(props.tool ? 'block' : 'none')}
          className='tool-btn'
        >
          new
        </Box>
        <Box
          as='span'
          px='10px'
          fontSize='20px'
          background='#f6f2ef'
          position='relative'
          zIndex='10'
        >
          {props.title}
        </Box>
        <Box
          as='div'
          h='40px'
          w='40px'
          right='0px'
          d={(props.tool ? 'block' : 'none')}
          rounded='50%'
          className='tool-btn'
        >
          ...
        </Box>
      </Box>
      <style jsx global>
        {`
          .header-line:before{
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            border-bottom: 1px solid gray;
            transform: translate(-50%,-50%);
            z-index: 0;
          }

          .tool-btn{
            position: absolute;
            background-color: #fff;
            bottom: 0;
            margin: auto;
            top: 0;
          }
        `}
      </style>
    </>
  )
}

export default fieldset

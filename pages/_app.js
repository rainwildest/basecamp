import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

class App extends NextApp {
  render () {
    const { Component } = this.props
    return (
      <ThemeProvider>
        <CSSReset /><CSSReset />
        <ColorModeProvider>

          <Component />

          <style jsx global>
            {`
            body{
              background:#f6f2ef;
            }
            html{
              font-size: 16px;
            }
            `}
          </style>
        </ColorModeProvider>
      </ThemeProvider>
    )
  }
}

export default App

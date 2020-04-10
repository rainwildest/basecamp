import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

class App extends NextApp {
  render () {
    const { Component } = this.props
    return (
      <ThemeProvider>
        <ColorModeProvider>
          <CSSReset />
          <Component />

          <style jsx global>
            {`body{
              background:#f6f2ef
            }`}
          </style>
        </ColorModeProvider>
      </ThemeProvider>
    )
  }
}

export default App

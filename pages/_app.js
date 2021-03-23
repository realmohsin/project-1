// import '../styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import { globalStyles } from '../styles/global-styles'
import theme from '../styles/theme'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

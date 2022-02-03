// pages/_app.js
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        
        <meta name="theme-color" content="#fa4a0c" />
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
              
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
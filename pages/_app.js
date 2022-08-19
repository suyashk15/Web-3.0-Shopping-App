import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { AmazonProvider } from '../context/AmazonContext'
import { ModalProvider } from 'react-simple-hook-modal'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={"https://uydq4bud6qmy.usemoralis.com:2053/server"}
      appId={"CBKmvwF2FNGOyIJ57PhymrGK5WcOydebbfiDFKaM"}
    >
      <AmazonProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </AmazonProvider>
    </MoralisProvider>
  )
}

export default MyApp

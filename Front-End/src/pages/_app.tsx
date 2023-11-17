
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Headercomponent from '../components/Header'
import  '../styles/style.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <Component {...pageProps} />
    </>)
}

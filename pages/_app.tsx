import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp

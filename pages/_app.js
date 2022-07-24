import '../styles/variables.css'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const ga_url = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`

  return (
    <>
      <Script 
        strategy="lazyOnload" 
        src={ga_url} />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

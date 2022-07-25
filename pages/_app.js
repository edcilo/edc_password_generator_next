import '../styles/variables.css'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const ad_client = process.env.NEXT_PUBLIC_AD_CLIENT
  const ga_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  const ga_url = `https://www.googletagmanager.com/gtag/js?id=${ga_id}`

  return (
    <>
      <Script 
        data-ad-client={ad_client} 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />

      <Script 
        strategy="lazyOnload" 
        src={ga_url} />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga_id}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

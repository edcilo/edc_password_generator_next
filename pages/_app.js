import "../styles/variables.css"
import "../styles/globals.css"
import "antd/dist/antd.css"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  const adClient = process.env.NEXT_PUBLIC_AD_CLIENT
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  const gaUrl = `https://www.googletagmanager.com/gtag/js?id=${gaId}`

  return (
    <>
      {/* <Script
        data-ad-client={adClient}
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      /> */}

      <Script strategy="lazyOnload" src={gaUrl} />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

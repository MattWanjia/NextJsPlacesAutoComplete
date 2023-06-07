import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          async='false'
          id="googlemaps"
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://maps.googleapis.com/maps/api/js?key={YOUR_API_KEY}&libraries=places&callback=initMap"
        />
      </body>
    </Html>
  )
}

import '@/styles/globals.css'
import Layout from 'components/layout'
import { Montserrat } from '@next/font/google'
import { ConfigProvider } from 'antd'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#f2dade',
          
        },
      }}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LL3D33GT8C"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments)}
         gtag('js', new Date());
         gtag('config', 'G-LL3D33GT8C');
        `}
      </Script>
      <Layout>
        <div className={montserrat.className}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </ConfigProvider>

  )
}

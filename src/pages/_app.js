import '@/styles/globals.css'
import Layout from 'components/layout'
import { Montserrat } from '@next/font/google'
import { ConfigProvider } from 'antd'

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
      <Layout>
        <div className={montserrat.className}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </ConfigProvider>

  )
}

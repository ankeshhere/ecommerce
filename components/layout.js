import { FloatButton } from "antd";
import Footer from "./footer";
import Navbar from "./Navbar";
import { WhatsAppOutlined } from '@ant-design/icons'
import Promo from "./Promo";
export default function Layout({ children }) {
    return (
      <>
        <Promo />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatButton type="primary" onClick={() => console.log('click')} icon={<WhatsAppOutlined style={{color:"#000"}} size={22}/>}/>
      </>
    )
  }
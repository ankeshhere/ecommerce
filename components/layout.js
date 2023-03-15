import { FloatButton } from "antd";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { WhatsAppOutlined } from '@ant-design/icons'
import Promo from "./Promo";
import { useRouter } from "next/router";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Layout({ children }) {
    const router = useRouter()
    return (
      <>
        
        <Navbar />
        <Promo />
        <main>{children}</main>
        <Footer />
        <FloatButton type="primary" onClick={() => router.push('https://wa.me/+919667656804')} icon={<WhatsAppOutlined style={{color:"#000"}} size={22}/>}/>
      </>
    )
  }
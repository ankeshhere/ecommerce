import { FloatButton } from "antd";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { WhatsAppOutlined } from '@ant-design/icons'
import Promo from "./Promo";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Layout({ children }) {
    
    return (
      <>
        
        <Navbar />
        <Promo />
        <main>{children}</main>
        <Footer />
        <FloatButton type="primary" onClick={() => console.log('click')} icon={<WhatsAppOutlined style={{color:"#000"}} size={22}/>}/>
      </>
    )
  }
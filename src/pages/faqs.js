import { Collapse } from 'antd';
import Link from 'next/link';
const { Panel } = Collapse;
export default function Faqs() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className='container bcrumb d-flex flex-column align-items-center justify-content-center mt-3'>
        <Link href='/' style={{ fontSize: 13 }}>Home /</Link>
        <Link
          href=''
          style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}
        >
          FAQS
        </Link>
      </div>
      <div className='container mt-3'>
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
          <Panel header="How can I order?" key="1">
            <p>You can order your product through <Link href={'https://www.instagram.com/shubhvastram.official/'}>Instagram</Link> , <Link href={'https://www.facebook.com/shubhvastram.official'}>Facebook</Link>, or by clicking enquire on <Link href={'https://wa.me/message/C76U3FOR24MJK1'}>WhatsApp</Link>. As the collections are mainly made to order, or limited by stock it tends to get out of stock faster.</p>
          </Panel>
          <Panel header="Can I customize my order?" key="2">
            <p>Yes, you can customize your order according to your sizes. Customized orders may take 4-5 days to get dispatched once ready, due to the need for specific measurements.</p>
          </Panel>
          <Panel header="How do I know my size?" key="3">
            <p>Our sizes are standard and have been taken into consideration during our design process. We do recommend that you take measurements of your body - especially if you'd like to get a custom piece made. You can reach us on WhatsApp if you have any issues.</p>
          </Panel>
          <Panel header="How do I pay for my order?" key="4">
            <p>We accept all types of online transactions. You can use Gpay or Paytm, or any other bank transaction to ensure a seamless experience.</p>
          </Panel>
          <Panel header="How long will it take to get my order?" key="5">
            <p>Once an order is made, you can expect to receive it within 7 days of placing the order. The delivery time depends on the product ordered and, for international orders, the location of delivery.</p>
          </Panel>
        </Collapse>
      </div>

    </>

  );
};
import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "Shubhvastram.com - Find your next trendy ethnic wears ",
  description: "Shubhvastram is an Indian clothing brand with offices in Jamshedpur and Chakradharpur, Jharkhand, INDIA. We create ethnic and comfortable clothes with a pinch of traditional touch. We are a clothing label that specializes in Ethnic and customizable wear.",
};

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <body
        className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"
      >
         <NextTopLoader color="#000"/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    
  );
}

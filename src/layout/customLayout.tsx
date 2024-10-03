
import Footer from '@/components/common/footer';
import Navbar from '@/components/common/Navbar';
import ClientProvider from '@/Redux/ClientProvider';
import React from 'react';
import AnimatedCursor from "react-animated-cursor"
type SimpleLayoutProps = {
  children: React.ReactNode;
};

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children }) => {
  return (
    <>
      <ClientProvider>
      <div className='md:block hidden'>
        <AnimatedCursor
       innerSize={8}
       outerSize={8}
       color='193, 11, 111'
       outerAlpha={0.2}
       innerScale={0.7}
       outerScale={5}
       clickables={[
         'a',
         'input[type="text"]',
         'input[type="email"]',
         'input[type="number"]',
         'input[type="submit"]',
         'input[type="image"]',
         'label[for]',
         'select',
         'textarea',
         'button',
         '.link'
       ]}
        /> 
      </div>
       
        <Navbar />
        {children}
        <Footer />
      </ClientProvider>
    </>
  );
};

export default SimpleLayout;

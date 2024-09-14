
import Footer from '@/components/common/footer';
import Navbar from '@/components/common/Navbar';
import ClientProvider from '@/Redux/ClientProvider';
import React from 'react';

type SimpleLayoutProps = {
  children: React.ReactNode;
};

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children }) => {
  return <>
  <ClientProvider>
 <Navbar/> 
  {children}
 <Footer/>    
  </ClientProvider>
 
  </>;
};

export default SimpleLayout;

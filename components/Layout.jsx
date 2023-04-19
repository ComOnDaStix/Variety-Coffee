import Footer from "./Footer";
import Navbar from "./Navbar";

import UpperNavBar from "./UpperNavBar";


const Layout = ({ children }) => {
  return (
    <div>
      <UpperNavBar />
      <Navbar />
      
      <main>{children}</main>
    
      <Footer />
    </div>
  );
};

export default Layout;

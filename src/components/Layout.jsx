// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./layout/Footer"; // <-- Import the new Footer

const Layout = () => {
  return (
    <>
      <Navbar />
      <main> {/* You can remove the pt-16 if your Navbar is not fixed or handled differently */}
        <Outlet />
      </main>
      <Footer /> {/* <-- Add the Footer here */}
    </>
  );
};

export default Layout;
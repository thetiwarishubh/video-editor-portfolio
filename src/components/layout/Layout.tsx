import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

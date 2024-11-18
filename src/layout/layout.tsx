import Footer from "./footer";
import Navbar from "./navbar";

export default function LayoutComponent({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

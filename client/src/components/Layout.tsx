import { ReactNode } from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Announcement />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MarqueeBar } from "./MarqueeBar";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <MarqueeBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

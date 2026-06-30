import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
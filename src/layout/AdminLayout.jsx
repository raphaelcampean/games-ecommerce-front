import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AdminLayout() {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home.jsx";
import Registration from "./pages/users/registrations/Registration.jsx";
import Login from "./pages/users/login/Login.js";
import ProductDetails from "./pages/products/ProductDetails.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";

import AdminLayout from "./layout/AdminLayout";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard.jsx";
import Index from "./pages/admin/products/Index.jsx";
import Show from "./pages/admin/products/Show.jsx";
import Edit from "./pages/admin/products/Edit.jsx";
import New from "./pages/admin/products/New.jsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="produtos/:slug" element={<ProductDetails />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />

        <Route path="produtos">
          <Route index element={<Index />} />
          <Route path="novo" element={<New />} />
          <Route path=":id" element={<Show />} />
          <Route path=":id/editar" element={<Edit />} />
        </Route>

      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
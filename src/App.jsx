import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home.jsx";
import Registration from "./pages/users/registrations/Registration.jsx";
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
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cadastro" element={<Registration />} />
        <Route path="produtos/:slug" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="produtos">
          <Route index element={<Index />} />
          <Route path=":slug" element={<Show />} />
          <Route path=":slug/editar" element={<Edit />} />
          <Route path="novo" element={<New />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
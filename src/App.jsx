import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home.jsx";
import Registration from "./pages/users/registrations/Registration.jsx";
import ProductDetails from "./pages/products/ProductDetails.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/produtos/:slug" element={<ProductDetails />} />
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
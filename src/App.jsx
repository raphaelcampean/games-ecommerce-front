import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/home";
import Registration from "./pages/users/registrations/Registration.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/cadastro" element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default App;
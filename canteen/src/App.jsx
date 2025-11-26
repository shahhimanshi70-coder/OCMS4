import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Layouts/Navbar";

// Pages
import Home from "./Components/Layouts/Homepage";
import MenuPage from "./Components/Layouts/MenuPage";
import OrderPage from "./Components/Layouts/OrderPage";
import BillingPage from "./Components/Layouts/BillingPage";
import Login from "./Components/Layouts/Login";
import Register from "./Components/Layouts/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DEFAULT FALLBACK */}
        <Route path="*" element={<h1 style={{ padding: 30 }}>404 Page Not Found</h1>} /> 
      </Routes>
    </Router>
  );
}

export default App;

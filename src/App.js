import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import NotFound from "./component/NotFound";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import ProdectList from "./component/ProdectList";
import ControlPanel from "./component/ControlPanel";
import Register from "./component/Register";
import AddNew from "./AddNew";
import ProductDetails from "./component/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/prodect" element={<ProdectList />} />
        <Route path="/controlpanel" element={<ControlPanel />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/productdetails/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

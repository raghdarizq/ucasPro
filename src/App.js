import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import NotFound from "./component/NotFound";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import ProdectList from "./component/ProdectList";
import ControlPanel from "./component/ControlPanel";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/prodect" element={<ProdectList />} />
        <Route path="/controlpanel" element={<ControlPanel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

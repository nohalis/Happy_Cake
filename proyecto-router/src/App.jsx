import Navigate from "./components/Navigate";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ContactoPage from "./views/ContactoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Navigate />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contacto" element={<ContactoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;

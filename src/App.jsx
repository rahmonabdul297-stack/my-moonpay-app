import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../public/styles/global.css";
import { ToastContainer } from "react-toastify";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./pages/home";
import BusinessPage from "./pages/business";
import BusinessLayout from "./layouts/businessLayout";
import BuycryptoPage from "./pages/buycrypto";
import SwapcryptoPage from "./pages/swap";
import PolicyPage from "./pages/policies";
import CookiePage from "./pages/cookie";
import LicensesPage from "./pages/licenses";
import SignUpPage from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route element={<GeneralLayout />}>
           <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
          <Route path="/buycrypto" element={<BuycryptoPage />}/>
          <Route path="/swap" element={<SwapcryptoPage />}/>
          <Route path="/policies" element={<PolicyPage />}/>
          <Route path="/cookie" element={<CookiePage />}/>
            <Route path="/licenses" element={<LicensesPage />}/>
          </Route>
         <Route element={<BusinessLayout />}>
            <Route path="/business" element={<BusinessPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

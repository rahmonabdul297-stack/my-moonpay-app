import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../public/styles/global.css";
import { ToastContainer } from "react-toastify";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./pages/home";
import BusinessPage from "./pages/business";
import BusinessLayout from "./layouts/businessLayout";

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
          <Route element={<GeneralLayout />}>
            <Route path="/home" element={<HomePage />} />
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

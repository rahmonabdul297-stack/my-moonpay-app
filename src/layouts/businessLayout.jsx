import { Outlet } from "react-router-dom";
import BusinessHeader from "../components/businessHeader";
import GeneralFooter from "../components/GeneralFooter";

const BusinessLayout = () => {
  return (
    <div>
      <BusinessHeader />
      <Outlet />
      <GeneralFooter />
    </div>
  );
};
export default BusinessLayout;

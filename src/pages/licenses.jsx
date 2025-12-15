import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const LicensesPage = () => {
  return (
    <div className="box py-20">
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-2 mt-10">
          <FaAngleLeft />
          <Link to="/policies">Back to legal</Link>
        </div>
        <h4 className="border-b py-12 text-2xl lg:text-4xl capitalize">
          Licenses and Registrations
        </h4>
      </section>

      <section className="flex flex-col lg:grid grid-cols-3 gap-4">
        <div className="text-[#afa7a3] font-bold p-4 col-span-1 flex flex-col ">
          {" "}
          <HashLink smooth to="" className="hover:text-black">
            1. MoonPay is registered in the following jurisdictions
          </HashLink>
          <HashLink
            smooth
            to=""
            className="hover:text-black"
          >
            2. MoonPay USA LLC is licensed in the following US jurisdictions
          </HashLink>
        </div>

        <div className="col-span-2 flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-3">
            <h5>MoonPay is registered in the following jurisdictions</h5>
            <div>
              1. MoonPay Entity: MoonPay (UK) Limited Jurisdiction: UK
              Regulator: Financial Conduct Authority Registration Number:{" "}
              <div className="text-[#3b82f6] inline">FRN 944746</div>
            </div>
            <div>
              2. MoonPay Entity: MoonPay Technology Services Limited
              Jurisdiction: Ireland Regulator: Central Bank of Ireland
              Registration Number:{" "}
              <div className="text-[#3b82f6] inline">C460974</div>
            </div>
            <div>
              3. MoonPay Entity: MoonPay Italy s.r.l. Jurisdiction: Italy
              Regulator: Organismo Agenti e Mediatori Registration Number:{" "}
              <div className="text-[#3b82f6] inline">PSV18</div>
            </div>
            <div>
              4. MoonPay Entity: MoonPay USA LLC: US Regulator: Financial Crimes
              Enforcement Network Registration Number: 31000301673327 MoonPay
              Entity: MoonPay USA LLC: US Regulator: Financial Transactions and
              Reports Analysis Centre of Canada Registration Number:{" "}
              <div className="text-[#3b82f6] inline">M24701825</div>
            </div>
            <div>
              5. MoonPay Entity: MoonPay AUS Pty Ltd: Australia Regulator:
              Australian Transaction Reports and Analysis Centre Registration
              Number:{" "}
              <div className="text-[#3b82f6] inline">DCE100858195-001</div>
            </div>
            <div>
              6. MoonPay Entity: MoonPay Europe B.V. Jurisdiction: EEA
              Regulator: Dutch Authority for the Financial Markets Registration
              Number: <div className="text-[#3b82f6] inline">41000002</div>
            </div>
            <div>
              7. MoonPay Entity: MoonPay Jersey Ltd.: Jersey Regulator: Jersey
              Financial Services Commission Registration Number:{" "}
              <div className="text-[#3b82f6] inline">SCH - 14176</div>
            </div>
          </div>

          <div>
            <h5>
              MoonPay USA LLC is licensed in the following US jurisdictions
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LicensesPage;

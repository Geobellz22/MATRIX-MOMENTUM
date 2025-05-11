import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <section className="md:w-9/12 mx-auto grid md:grid-cols-3 gap-x-10 mt-20">
        <Sidebar />
        <section className="md:col-span-2 bg-[#1B2D29] p-2 py-8 md:p-10 mt-10 md:mt-0">
          <Outlet />
        </section>
      </section>
    </>
  );
}

export default Dashboard;

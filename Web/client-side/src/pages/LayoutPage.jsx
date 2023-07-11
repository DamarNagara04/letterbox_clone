import { Outlet } from "react-router-dom";
// import AppNavbar from "../components/NavbarComponent";
import "../App.css";

export default function Layout() {
  return (
    <>
      {/* <AppNavbar /> */}
      <Outlet />
    </>
  );
}

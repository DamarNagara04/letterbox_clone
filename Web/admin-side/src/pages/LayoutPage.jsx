import { Outlet } from "react-router-dom";
import AppNavbar from "../components/NavbarComponent";

export default function Layout() {
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  );
}

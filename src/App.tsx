import { Outlet } from "react-router";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import "./css/Reset.css";
import "./css/Variables.css";
import "./css/Typography.css";
import "./css/App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

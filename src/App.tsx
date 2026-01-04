import { Outlet } from "react-router";
import "./css/Reset.css";
import "./css/Variables.css";
import "./css/Typography.css";
import "./css/Global.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

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

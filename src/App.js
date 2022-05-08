import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
export default App;

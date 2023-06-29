import { Route, Routes } from "react-router-dom";
import Team from "./pages/Team";
import Membership from "./pages/Membership";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
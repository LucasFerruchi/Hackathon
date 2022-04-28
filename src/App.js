import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PublicRoute from "./routes/PublicRoute";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ContactMain from "./components/ContactMain/ContactMain";
import AppCovalent from "./pages/AppCovalent";
import CovalentTable from "./components/CovalentTable/CovalentTable"
//import Header from "./components/Header/Header";



function App() {
  return (
    <>
      <Router>
        <Layout>
            <Routes>
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/homePage" element={<PublicRoute><HomePage/></PublicRoute>} />
              <Route path="/contactPage" element={<PublicRoute><ContactPage/></PublicRoute>} />
              <Route path="/contactMain" element={<ContactMain/>} />
              <Route path="/appCovalent" element={<PublicRoute><AppCovalent/></PublicRoute>} />
              <Route path="/covalenTable" element={<CovalentTable/>} />
            </Routes>
            </Layout>
      </Router>
    </>
  );
}

export default App;

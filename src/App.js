import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PublicRoute from "./routes/PublicRoute";
import AppCovalent from "./pages/AppCovalent";
import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import CovalentTable from "./components/CovalentTable/CovalentTable"



function App() {
  return (
    <>
      <Router>
        <Layout>
            <Routes>
              <Route path="/appCovalent" element={<PublicRoute><AppCovalent/></PublicRoute>} />
              <Route path="/formPage" element={<PublicRoute><FormPage/></PublicRoute>} />
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/homePage" element={<PublicRoute><HomePage/></PublicRoute>} />
          
              <Route path="/covalenTable" element={<CovalentTable/>} />
            </Routes>
            </Layout>
      </Router>
    </>
  );
}

export default App;

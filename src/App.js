import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PublicRoute from "./routes/PublicRoute";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import AppCovalent from "./pages/AppCovalent";
import Header from "./components/Header/Header";



function App() {
  return (
    <>
      <Router>
        <Layout>
            <Routes>
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/homePage" element={<PublicRoute><HomePage/></PublicRoute>} />
              <Route path="/registerPage" element={<PublicRoute><RegisterPage/></PublicRoute>} />
              <Route path="/registerform" element={<RegisterForm/>} />
              <Route path="/appCovalent" element={<PublicRoute><AppCovalent/></PublicRoute>} />
            </Routes>
            </Layout>
      </Router>
    </>
  );
}

export default App;

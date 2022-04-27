import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PublicRoute from "./routes/PublicRoute";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ContactForm from "./components/ContactForm/ContactForm";
import Header from "./components/Header/Header";



function App() {
  return (
    <>
      <Router>
        <Layout>
            <Routes>
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/homePage" element={<PublicRoute><HomePage/></PublicRoute>} />
              <Route path="/contactPage" element={<PublicRoute><ContactPage/></PublicRoute>} />
              <Route path="/contactform" element={<ContactForm/>} />
            </Routes>
            </Layout>
      </Router>
    </>
  );
}

export default App;

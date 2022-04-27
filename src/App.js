import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PublicRoute from "./routes/PublicRoute";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ContactForm from "./components/ContactForm/ContactForm";
import Header from "./components/Header/Header";



function App() {
  return (
    <>
      <Router>
        <Header/>
            <Routes>
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/homepage" element={<PublicRoute><HomePage/></PublicRoute>} />
              <Route path="/contact" element={<ContactForm/>} />
            </Routes>
        
      </Router>
    </>
  );
}

export default App;

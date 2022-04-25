import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PublicRoute from "./routes/PublicRoute";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        
            <Routes>
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
            </Routes>
          
      </Router>
    </>
  );
}

export default App;

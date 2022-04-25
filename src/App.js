
//import Results from "./components/Results/Results";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PublicRoute from "./routes/PublicRoute";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    /*<Container>
      <Results/>
    </Container>*/
    <> 
    <Router>
      <Layout>
      <Routes>
      <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
      </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;

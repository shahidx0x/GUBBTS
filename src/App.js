import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider";
import { Dashbord } from "./pages/Dashbord/Dashbord";
import PrivateOutlet from "./routers/PrivateRoute";
import { Footer } from "./Shared/Footer/Footer";
import { Navbar } from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="dashbord" element={<Dashbord />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

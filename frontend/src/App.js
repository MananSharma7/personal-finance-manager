import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Items/Header";
import Footer from "./components/Items/Footer";
import Home from "./components/pages/Home";
import Income from "./components/pages/Income";
import Expenses from "./components/pages/Expenses";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import About from "./components/pages/About";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./components/hooks/useAuth";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </Router>
  )
};

export default App;
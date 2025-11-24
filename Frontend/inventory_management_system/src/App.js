import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct';
import UpdateProduct from './components/UpdateProduct';
import About from './components/About';
import Login from "./components/Login";
import Register from "./components/Register";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const isLoggedIn = () => !!localStorage.getItem("token");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Navbar title="IMS" onSearch={handleSearch} />
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={isLoggedIn() ? <Products /> : <Login />} />
        <Route path="/register" element={isLoggedIn() ? <Products /> : <Register />} />

        {/* Protected Routes */}
        <Route path="/products" element={isLoggedIn() ? <Products searchQuery={searchQuery} /> : <Login />} />
        <Route path="/insertproduct" element={isLoggedIn() ? <InsertProduct /> : <Login />} />
        <Route path="/updateproduct/:id" element={isLoggedIn() ? <UpdateProduct /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;

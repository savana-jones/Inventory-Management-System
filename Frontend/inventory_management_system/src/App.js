import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct';
import UpdateProduct from './components/UpdateProduct';
import About from './components/About';

import { isLoggedIn } from "./utils/auth";
import Login from "./components/Login";
import Register from "./components/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar title="IMS" about="About" />

      <Router>
        <Routes>

          {/* Public Routes */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/products"
            element={isLoggedIn() ? <Products /> : <Login />}
          />
          <Route
            path="/insertproduct"
            element={isLoggedIn() ? <InsertProduct /> : <Login />}
          />
          <Route
            path="/updateproduct/:id"
            element={isLoggedIn() ? <UpdateProduct /> : <Login />}
          />

        </Routes>
      </Router>

    </div>
  );
}

export default App;

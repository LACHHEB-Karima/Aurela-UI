import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Perfumes from './pages/Perfumes';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Order from './pages/Order';
import MyOrders from './pages/MyOrders';

const PlaceholderPage = ({ title }) => (
  <div className="py-16 text-center">
    <h1 className="text-3xl font-bold text-gray-900">{title} Page</h1>
    <p className="mt-4 text-gray-600">This page is under construction.</p>
  </div>
);

function AppContent() {
  const location = useLocation();
  const hideNavOnRoutes = ['/login', '/signup'];

  const shouldHideNav = hideNavOnRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      {!shouldHideNav && <NavBar />}
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/perfumes" element={<Perfumes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/perfume" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="*" element={<PlaceholderPage title="404 - Not Found" />} />
          </Routes>
        {!shouldHideNav && <Footer />}
      </main>
    </div>
  );
}

function App() {

  return (
    <Router> 
      <AppContent />
    </Router>
  );
}

export default App;

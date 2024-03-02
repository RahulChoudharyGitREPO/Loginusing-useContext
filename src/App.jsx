import { Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home';
import Product from './Product';
import { useContext } from 'react';
import { AuthContext } from './AuthContextProvider';

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/product'>Product</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={isLoggedIn ? <Navigate to='/Product' /> : <Login />}
        />
        <Route
          path='/product'
          element={<Product />}
        />
      </Routes>
    </>
  );
}

export default App;

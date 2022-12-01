import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login/Login';
import Customers from './components/customers/Customers';
import { CustomerDetail } from './components/customerDetail/CustomerDetail';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route index path='/customers' element={<Customers />} />
          <Route path='/customerDetail/:id' element={<CustomerDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

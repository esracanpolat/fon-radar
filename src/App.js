import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login/Login';
import Customers from './components/customers/Customers';
import { CustomerDetail } from './components/customerDetail/CustomerDetail';
import { CustomersUpdate } from './redux/actions/customers/customersActions';
import { IntlProvider } from 'react-intl';
import English from "./components/utils/lang/en.json";
import Turkish from "./components/utils/lang/tr.json";
import French from "./components/utils/lang/fr.json";
import { Header } from './components/layouts/Header';
import { useState } from 'react';

function App() {
  const [locale, setLocale] = useState(navigator.language);

  let lang
  if (locale === "en") {
    lang = English;
  } else {
    if (locale === "tr") {
      lang = Turkish;
    } else {
      lang = French;
    }
  }
  return (
    <>
      <Router>
        <IntlProvider locale={locale} messages={lang}>
          <Header setLocale={setLocale} />
          <Routes>
            <Route index path='/' element={<Login />} />
            <Route index path='/customers' element={<Customers />} />
            <Route path='/customerDetail/:id' element={<CustomerDetail />} />
          </Routes>
        </IntlProvider>
      </Router>
    </>
  );
}

export default App;

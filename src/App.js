import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout';

import 'assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/properties/:id"
          component={DetailsPage}
        />
        <Route path="/checkout" component={Checkout} />
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

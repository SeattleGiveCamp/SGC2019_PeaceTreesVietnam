import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import MapPage from './MapPage/MapPage';
import Login from './Login/Login';
import Form from './Form/Form';
import ErrorPage from './ErrorPage/ErrorPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TablePage from './TablePage/TablePage';
import AdminPage from './AdminPage/AdminPage';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/map' component={MapPage}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/form' component={Form}></Route>
          <Route exact path='/error' component={ErrorPage}></Route>
          <Route exact path='/table' component={TablePage}></Route>
          <Route exact path='/admin' component={AdminPage}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

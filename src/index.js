import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './views/Home';
import {About} from './views/About';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header />
  <Routes>
      <Route path={'/'} element={<Home />}/>
      <Route path={'/about'} element={<About />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
  /*<BrowserRouter>
  <Routes>
  <Route path={'/simple'}>
  <Header />
  <Routes>
    <Route path='home' element={<App />} />
    <Route path='login' element={<App />} />
    <Route path='abc' element={<App />} />
    </Routes >
    <Footer />
    </Route>

    <Route path={'/admin '}>
      <Routes>
        <Route path='manage' element={<App />} />
        <Route path='register' element={<App />} />
        <Route path='dashboard' element={<App />} />
      </Routes>
    </Route>
    </Routes>
    </BrowserRouter>*/



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

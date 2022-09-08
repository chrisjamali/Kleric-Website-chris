import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Routing from './Routing.jsx';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routing />
    </div>
  );
};

export default App;

// render(  <BrowserRouter> <App /> </BrowserRouter>, document.querySelector('#root'));

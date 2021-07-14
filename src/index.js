import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';


ReactDOM.render(
  <React.StrictMode>
    <App2 title="Titulo">
      Conteúdo
    </App2>
    <App2 title="Titulo2">
      Conteúdo2
    </App2>
  </React.StrictMode>,
  document.getElementById('root')

);


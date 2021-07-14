import React from 'react';
import ReactDOM from 'react-dom';
import {Lista, Item} from './components/Lista';


ReactDOM.render(
  <React.StrictMode>
		<Lista>
      <Item key={999} id={999} completo={false}>
        Teste1
      </Item>
      <Item key={998} id={998} completo={true}>
        Teste2
      </Item>
    </Lista>
	
  </React.StrictMode>,
  document.getElementById('root')
  
);
  
  
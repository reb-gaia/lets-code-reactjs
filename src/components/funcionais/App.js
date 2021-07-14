import React, {useState} from 'react';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <>
      Nome: <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
      <br />
      Olá {nome}
    </>
  );
}
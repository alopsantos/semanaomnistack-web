import React from 'react';
import Routes from './routes';

import './pages/App.css';
import './pages/global.css';
import './pages/Sidebar.css';
import './pages/Main.css';
// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao.
// Propriedade: Informações que um componente PAI passa para o componente FILHO.
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade).

function App() {
   
  return (
    <div id="app">
      <Routes />
    </div>
  );
}

export default App;

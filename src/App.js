import React, { useState, useEffect } from 'react';
import api from './services/api';
import FarmaciaForm from './components/FarmaciaForm';
import FarmaciaItem from './components/FarmaciaItem';

import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao.
// Propriedade: Informações que um componente PAI passa para o componente FILHO.
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade).

function App() {
  const [farmacias, setFarmacias] = useState([]);

  

  useEffect(() => {
    async function loadFarmacias() {
      const response = await api.get('/farmacias');

      setFarmacias(response.data);

    }
    loadFarmacias();
  }, []);

  async function handleAddDev(data) {
    //event.preventDefault();

    const response = await api.post('/farmacias', data);
    
    setFarmacias([...farmacias, response.data]);
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <FarmaciaForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {farmacias.map(farmacia => (
            <FarmaciaItem key={farmacia._id} farmacia={farmacia} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

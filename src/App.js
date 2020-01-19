import React, { useState, useEffect } from 'react';
import api from './services/api';
import FarmaciaForm from './components/FarmaciaForm';
import FarmaciaItem from './components/FarmaciaItem';
import FarmaciaUpdateForm from './components/FarmaciaUpdateForm';

import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao.
// Propriedade: Informações que um componente PAI passa para o componente FILHO.
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade).

function App() {
  const [farmacias, setFarmacias] = useState([]);
  const [atualFarmacia, setAtualFarmacia] = useState('')
  const [editMode, setEditMode] = useState(false)

  async function loadFarmacias() {
    const response = await api.get('/farmacias');
    setFarmacias(response.data);
  }

  useEffect(() => {
    loadFarmacias()
  }, []);

  async function handleAddFamacia(data) {
    const response = await api.post('/farmacias', data);

    setFarmacias([response.data,...farmacias]);
  }

  async function handleDelete(data) {
    await api.delete(`/farmacia/${data._id}`);

    const filterFarmacias = farmacias.filter(farmacia => farmacia._id !== data._id);
  
    setFarmacias(filterFarmacias);
  }
  async function handleUpdate(data){
    await api.put(`/farmacia/${atualFarmacia._id}`, data);

    loadFarmacias();
    setMode();
  }
  
  function loadMode() {
    if (editMode) {
      return (
        <aside>
          <strong>Editar</strong>
          
          <FarmaciaUpdateForm onUpdataForm={handleUpdate} onCancela={setMode} farmacia={atualFarmacia} />
        </aside>
      )
    } else {
      return (
        <aside>
          <strong>Cadastrar</strong>
          <FarmaciaForm onSubmit={handleAddFamacia} />
        </aside>
      )
    }
  }

  function setMode(data) {
    if (!editMode) {
      setEditMode(true);
      setAtualFarmacia(data);
    } else {
      setEditMode(false)
    }
  }
  return (
    <div id="app">
      {loadMode()}
      <main>
        <ul>
          {farmacias.map(farmacia => (
            <FarmaciaItem key={farmacia._id} farmacia={farmacia} onDeleteForm={handleDelete} onUpdateClick={setMode} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

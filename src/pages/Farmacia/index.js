import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import FarmaciaForm from '../../components/FarmaciaForm';
import FarmaciaItem from '../../components/FarmaciaItem';
import FarmaciaUpdateForm from '../../components/FarmaciaUpdateForm';

function Dashboard() {
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
        <aside className="farmacia-form">
          <strong>Editar Farmacia</strong>
          
          <FarmaciaUpdateForm onUpdataForm={handleUpdate} onCancela={setMode} farmacia={atualFarmacia} />
        </aside>
      )
    } else {
      return (
        <aside className="farmacia-form">
          <strong>Cadastrar Farmacia</strong>
          
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
    <>
      {loadMode()}
      <main>
        <ul>
          {farmacias.map(farmacia => (
            <FarmaciaItem key={farmacia._id} farmacia={farmacia} onDeleteForm={handleDelete} onUpdateClick={setMode} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default Dashboard;

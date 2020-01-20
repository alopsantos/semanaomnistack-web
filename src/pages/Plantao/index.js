import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import PlantaoItem from '../../components/PlantaoItem';
import PlantaoForm from '../../components/PlantaoForm';
import PlantaoUpdateForm from '../../components/PlantaoUpdateForm';
import './styles.css';

// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao.
// Propriedade: Informações que um componente PAI passa para o componente FILHO.
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade).

function Plantao() {
  const [plantoes, setPlantoes] = useState([]);
  const [atualPlantao, setAtualPlantao] = useState('');
  const [editMode, setEditMode] = useState(false);

  async function loadPlantoes() {
    const response = await api.get('/plantoes');
    setPlantoes(response.data);
  }
  useEffect(() => {
    loadPlantoes();
  }, []);

  async function handleAddPlantao(data) {
    const response = await api.post('/plantoes', data);
    setPlantoes([response.data, ...plantoes]);
  }

  async function handleDelete(data) {
    await api.delete(`/plantao/${data._id}`);
    const filterPlantoes = plantoes.filter(plantao => plantao._id !== data._id);
    setPlantoes(filterPlantoes);
  }

  async function handleUpdate(data) {
    await api.put(`/farmacia/${atualPlantao._id}`, data);
    loadPlantoes();
    setMode();
  }

  function loadMode() {
    if (editMode) {
      return (
        <aside className="plantao-form">
          <strong>Editar Plantão</strong>

          <PlantaoUpdateForm onUpdataForm={handleUpdate} onCancela={setMode} plantao={atualPlantao} />
        </aside>
      )
    } else {
      return (
        <aside className="plantao-form">
          <strong>Cadastrar Plantão</strong>

          <PlantaoForm onSubmit={handleAddPlantao} />
        </aside>
      )
    }
  }

  function setMode(data) {
    if(!editMode){
      setEditMode(true);
      setAtualPlantao(data);
    }else{
      setEditMode(false)
    }
  }

  return (
    <>
    {loadMode()}
    <main>
      <ul>
        {plantoes.map(plantao => (
          <PlantaoItem key={plantao._id} plantao={plantao} onDeleteForm={handleDelete} onUpdateClick={setMode} />
        ))}
      </ul>
    </main>
    </>
  );
}

export default Plantao;

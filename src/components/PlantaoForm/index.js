import React, { useState } from 'react';

function PlantaoForm({ onSubmit }) {
  const [farmaciaId, setFarmaciaId] = useState('');
  const [datainicio, setDatainicio] = useState('');
  const [datafim, setDatafim] = useState('');

  async function handleAddPlantao(event){
    event.preventDefault();
    await onSubmit({
      farmaciaId,
      datainicio,
      datafim
    });
    setDatainicio('');
    setDatafim('');
  }
  return(
    <>
      <form onSubmit={handleAddPlantao}>
        <div className="input-block">
          <label htmlFor="">Farmacia</label>
          <input type="text" 
            name="farmaciaid"
            id="farmaciaid"
            required
            value={farmaciaId}
            onChange={event => setFarmaciaId(event.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="">Inicio</label>
            <input 
              type="date" 
              name="datainicio"
              id="datainicio"
              required
              value={datainicio}
              onChange={event => setDatainicio(event.target.value)} />
          </div>
          <div className="input-block">
            <label htmlFor="">Fim</label>
            <input 
              type="date" 
              name="datafim"
              id="datafim"
              required
              value={datafim}
              onChange={event => setDatafim(event.target.value)} />
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </>
  )
}

export default PlantaoForm;
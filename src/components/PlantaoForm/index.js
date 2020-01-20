import React, { useState, useEffect } from 'react';

function PlantaoForm({ onSubmit }) {
  const [farmaciaId, setFarmaciaid] = useState('');
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
          <select id="farmacia" >
            <option value="1">Farmautil</option>
            <option value="2">Biofarma</option>
            <option value="3">Clarifarma</option>
          </select>
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
  )}
export default PlantaoForm();
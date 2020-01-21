import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@material-ui/core'

function PlantaoUpdateForm({ onUpdataForm, onCancela, plantao }) {
  const [atualPlantao, setAtualPlantao] = useState('');
  const [farmaciaId, setFarmaciaid] = useState('');
  const [datainicio, setDatainicio] = useState('');
  const [datafim, setDatafim] = useState('');

  useEffect(() => {
    setAtualPlantao(plantao);
  }, [plantao]);
  async function handleUpPlantao(event) {
    event.preventDefault();
    await onUpdataForm({
      farmaciaId,
      datainicio,
      datafim
    });
  }
  function handleExit(event) {
    event.preventDefault();
    onCancela();
  }
  return (
    <>
      <form onSubmit={handleUpPlantao}>
        <div className="input-block">
  <label htmlFor="">Farmacia: {atualPlantao}</label>
          <input type="text"
            name="farmaciaid"
            id="farmaciaid"
            required
            value={farmaciaId}
            onChange={event => setFarmaciaid(event.target.value)}
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
      </form>
      <div className="btn-container edit">
        <ButtonGroup className="btn-group" variant="contained" aria-label="contained primary button group">
          <Button className="Button" form="edit-form" type="submit">Atualizar</Button>
          <Button className="Button" onClick={handleExit}>Cancelar</Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default PlantaoUpdateForm;
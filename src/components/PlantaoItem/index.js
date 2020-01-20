import React from 'react';
import { Edit, Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core';

//import './styles.css';
function PlantaoItem({ farmacia, plantao, onDeleteForm, onUpdateClick }) {
  const {  urllogo, name, phone, address} = farmacia;
  const { _id, farmaciaid, datainicio, datafim } = plantao;

  async function handleDelete(){
    await onDeleteForm({ _id })
  }

  async function handleUpdateState(){
    await onUpdateClick({ _id });
  }

  return (
    <>
      <li className="plantao-item">
            <div className="conteudo">
              <header>
                <img src={urllogo} alt="" />
                <div className="plantao-info">
                  <strong>{name}</strong>
                  <strong>Inicio: {datainicio}</strong>
                  <strong>Fim: {datafim}</strong>
                </div>
              </header>
              <p>Fone: {phone}</p>
            </div>
            <div className="btn-container plantao-edit">
              <Button size="small" color="secondary" onClick={handleDelete}  ><Delete fontSize="default" /></Button>
              <Button size="small" color="primary" onClick={handleUpdateState} ><Edit fontSize="default" /></Button>
            </div>
          </li>
    </>
  );
}

export default PlantaoItem;

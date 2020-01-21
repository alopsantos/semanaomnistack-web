import React from 'react';
import { Edit, Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core';

import './styles.css';

function FarmaciaItem({ farmacia, onDeleteForm, onUpdateClick }) {
    const { _id, urllogo, name, phone, address } = farmacia;
    
    async function handleDelete(){
        await onDeleteForm({ _id })
    }
    async function handleUpdateState(){
        await onUpdateClick({ _id, name })
    }

    return (
        <li className="farmacia-item">
            <div className="conteudo">
                <header>
                    <img src={urllogo} alt="" />
                    <div className="farmacia-info">
                        <strong>{name}</strong>
                        <span>{phone}</span>
                    </div>
                </header>
                <p>{address.join(', ')}</p>
                <a href="https://wwww.estacaodamodastore.com.br">Acessar site</a>
            </div>
            <div className="btn-container edit">
                <Button size="small" color="secondary" onClick={handleDelete} ><Delete fontSize="default" /></Button>
                <Button size="small" color="primary" onClick={handleUpdateState} ><Edit fontSize="default" /></Button>
            </div>
        </li>
    );
}

export default FarmaciaItem;
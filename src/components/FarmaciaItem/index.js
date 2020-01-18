import React, { useState } from 'react';
import FarmaciaFormDelete from '../FarmaciaFormDelete';

import './styles.css';
function FarmaciaItem({ farmacia }) {
    const [ farmaciaId, setFarmaciaId] = useState('');
    function handleDelete(event){
        event.preventDefault();
        //const response = await api.delete('/farmacia', farmaciaId);
        console.log(farmaciaId);
    }
    return (
        <li className="farmacia-item">
            <div className="conteudo">
                <header>
                    <img src={farmacia.urllogo} alt="" />
                    <div className="user-info">
                        <strong>{farmacia.name}</strong>
                        <span>{farmacia.phone}</span>
                    </div>
                </header>
                <p>{farmacia.address.join(', ')}</p>
                <a href="https://wwww.estacaodamodastore.com.br">Acessar site</a>
            </div>
            <FarmaciaFormDelete />
        </li>
    );
}

export default FarmaciaItem;
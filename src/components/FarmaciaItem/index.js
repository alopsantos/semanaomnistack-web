import React from 'react';
import './styles.css';
function FarmaciaItem({farmacia}) {
    return (
        <li className="dev-item">
            <header>
                <img src={farmacia.urllogo} alt="" />
                <div className="user-info">
                    <strong>{farmacia.name}</strong>
                    <span>{farmacia.phone}</span>
                </div>
            </header>
            <p>{farmacia.address.join(', ')}</p>
            <a href="https://wwww.estacaodamodastore.com.br">Acessar site</a>
        </li>
    );
}

export default FarmaciaItem;
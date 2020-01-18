import React from 'react';
import './style.css';

function FarmaciaFormDelete({onSubmit}){

    return(
        <div className="edit">
                <form onSubmit={handleDelete}>
                    <input 
                        type="hidden"
                        id="farmacaiId"
                        value={farmacia._id} 
                        onChange={event => setFarmaciaId(event.target.value)}
                    />
                    <button type="submit">Excluir</button>
                </form>
            </div>
    );
}

export default FarmaciaFormDelete;
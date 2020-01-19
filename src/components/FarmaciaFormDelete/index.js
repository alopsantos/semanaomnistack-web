import React from 'react';
import './styles.css';

function FarmaciaFormDelete(){
    
    return(
        <div className="edit">
                <form>
                    <input 
                        type="hidden"
                        id="farmacaiId"
                        //value={farmacia._id} 
                        //onChange={event => setFarmaciaId(event.target.value)}
                    />
                    <button type="submit">Excluir</button>
                </form>
            </div>
    );
}

export default FarmaciaFormDelete;
import React, { useEffect } from 'react';
import addEventos from './eventos';

function Botones() {
    useEffect(() => {
        addEventos()
    })

    return (
        <div>
            <div>
                <button id="aumentar" className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400">Aumentar</button>
                <button id="restaurar" className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400">Restaurar</button>
            </div>
        </div>
    );
}

export default Botones
import React, { useState } from 'react';

export const Paginacion = ({ pagina, setPagina, maximo }) => {
    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setPagina(parseInt(pagina) + 1);
    };

    const previousPage = () => {
        setInput(parseInt(input) - 1);
        setPagina(parseInt(pagina) - 1);
    };

    const onKeyDown = e => {
        if (e.keyCode == 13) { // 13 = (Enter)
            setPagina(parseInt(e.target.value));
            if (
                parseInt(e.target.value < 1) ||
                parseInt(e.target.value) > Math.ceil(maximo) ||
                isNaN(parseInt(e.target.value))
            ) {
                setPagina(1);
                setInput(1);
            } else {
                setPagina(parseInt(e.target.value));
            }
        }
    };

    const onChange = e => {
        setInput(e.target.value);
    };

    return (
        <div className="container">
            <button disabled={pagina === 1 || pagina < 1} onClick={previousPage}>
                <svg viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                </svg>
            </button>
            <input
                onChange={e => onChange(e)}
                onKeyDown={e => onKeyDown(e)}
                name="page"
                autoComplete="off"
                value={input}
            />
            <p> de: {maximo} </p>
            <button
                disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
                onClick={nextPage}
            >
                <svg
                    width="20"
                    height="27"
                    viewBox="0 0 20 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                </svg>
            </button>
        </div>
    );
};
export default Paginacion
import React from "react";

function InputPesquisa(props){

    return (
        <input-pesquisa>
            <input className="form-control" name={props.name} type={props.type} placeholder={props.placeholder}/>
        </input-pesquisa>
    )
}

export default InputPesquisa

// <input className="form-control" type="search" name="searchPacient" placeholder="Encontrar paciente"
// autocomplete="off">
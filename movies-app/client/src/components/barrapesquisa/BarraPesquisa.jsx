import React from "react";

// Bootstrap
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";


function BarraPesquisa(props){

    return(
        <barra-pesquisa>
            <form className="row g-3">
                <div className="col-auto search-field">
                    <div className="input-group col-md-4">
                    <Form.Control className="form-control" name={props.name} type={props.type} placeholder={props.placeholder}/>
                        <Button variant="light" type="submit" value="Procurar">Procurar</Button>
                    </div>
                </div>
            </form>
        </barra-pesquisa>
    )
}

export default BarraPesquisa

//<div class="input-group col-md-4">
//  <input class="form-control" type="search" name="searchPacient" placeholder="Encontrar paciente"
//      autocomplete="off">
//  <button class="btn btn-light" type="submit">Procurar</button>
//</div>
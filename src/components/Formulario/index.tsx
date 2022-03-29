import React from "react";
import Botao from "../Botao";
import style from './formulario.module.scss'

class Formulario extends React.Component{
    render(){
        return(
            <form action="" className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Tarefa:
                    </label>
                    <input 
                    type="text"
                    name = "tarefa"
                    id = "tarefa"
                    placeholder = "Digite a tarefa"
                    required 
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo:
                    </label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="23:59:59"
                    required
                    />
                </div>
                <Botao />
            </form>
        )
    }
    }


    export default Formulario;
import React from "react";
import style from './lista.module.scss';

function Lista(){
    const tarefas = [{
        tarefa: "Fazer café",
        tempo: "00:05:00",
    },{
        tarefa: "Estudar React",
        tempo: "02:10:00",
    }]

    return(
        <aside className={style.listaTarefas}>
            <h2>
                Tarefas do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li>
                        <h3 className="item">
                            {item.tarefa}
                        </h3>
                        <span>
                            {item.tempo}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )

}

export default Lista;
import React from 'react'
import './styles.scss'
import { AiFillCloseCircle } from "react-icons/ai";
const EventCreate = ({ state, setState }) => {
    return (
        <section className={`${state !== true ? 'hidden' : 'modal'}`}>
            <div className='ModalContent'>
                <AiFillCloseCircle onClick={()=> setState(false)} className='icon'/>
                <h1>Publica tu evento con nosotros</h1>
                <form action="">
                    <div className='inputForm'>
                        <label htmlFor="">Nombre del evento</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Descripción</label>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div>
                        <label htmlFor="">Lugar</label>
                        <button>Elegir un lugar</button>
                    </div>
                    <div>
                        <label htmlFor="">Carta de presentación</label>
                        <input type="file" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EventCreate
import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-elOBRIByHYXplRJae3IVpX2ZtX_5XPXrBOlq_=s83-c-mo" alt="Dev"/>
                <div>
                    <strong>Leonardo Uemura</strong>
                    <span>Arte do migue</span>
                </div>
            </header>

            <p>
                Especialista formado na UNESP.
                <br/><br/>
                Universidade Estadual do Migue...
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 55,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem
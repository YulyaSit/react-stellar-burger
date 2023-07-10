import ModalOverlay from "../ModalOverlay/ModalOverlay";
import stylesModal from './Modal.module.css'
import ReactDOM  from "react-dom";
import React from 'react'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
const root = document.getElementById('modal')


function Modal({ title, children}) {
    return ReactDOM.createPortal(
        <>
        <div className={stylesModal.modal}>
            <div className={stylesModal.container}>
                {title && <h2 className={`${stylesModal.title} text text_type_main-large`}>{title}</h2>}
                <div className={stylesModal.icon}><CloseIcon /></div>
            </div>
            {children}
        </div>
        <ModalOverlay />
        </>,
        root
    )
}

export default Modal
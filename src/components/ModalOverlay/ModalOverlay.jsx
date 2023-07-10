import React from 'react'
import overlayStyles from './ModalOverlay.module.css'
import ReactDOM from 'react-dom'

function ModalOverlay({onClose}) {
    return(
        <div className={overlayStyles.overlay} onClick={onClose}></div>
    )
}

export default ModalOverlay
import React from 'react'
import overlayStyles from './ModalOverlay.module.css'
import ReactDOM from 'react-dom'

function ModalOverlay() {
    return(
        <div className={overlayStyles.overlay}></div>
    )
}

export default ModalOverlay
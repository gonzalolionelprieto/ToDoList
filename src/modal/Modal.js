import React from 'react';
import ReactDOM from 'react-dom';
import '../components/styles/ModalBackground.css'

function Modal({ children }) {
    // ReactDom tiene este método para crear portales
    return ReactDOM.createPortal(
      <div className="ModalBackground text-slate-900">
        {children}
      </div>,
      document.getElementById('modal')
    );
  }
  
  export { Modal };
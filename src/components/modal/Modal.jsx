import React from 'react'

const Modal = ({children, setState}) => {
  return (
    <div className='modal'>
      <div className='modal-overlay' onClick={() => (setState ? setState(false) : () => {})}/>
      {children}
    </div>
  )
}

export default Modal
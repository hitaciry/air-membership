import { Button, Dialog } from '@material-ui/core';
import React from 'react';

const OpenModalButton= ({onOpen,isOpen, onClose,children,buttonLabel}) => {
  return (
    <div style={{alignItems:"right"}}>
      <Button variant="outlined" color="primary" onClick={onOpen}>
        {buttonLabel}
      </Button>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="draggable-dialog-title"
        
      >{children}
      </Dialog>
    </div>
  )
}

export default OpenModalButton
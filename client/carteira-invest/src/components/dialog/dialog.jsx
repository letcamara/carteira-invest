import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from "axios"

export default function FormDialog(props) {

  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category
  });

  const handleEditActive = () => {
    Axios.put("http://localhost:5174/editCard", {
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost,
      category: editValues.category
    })
    handleClose()
  }

  const handleDelete = () => {
    Axios.delete(`http://localhost:5174/delete/${editValues.id}`)
    handleClose()
  }

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleChangeValues = (value) => {
    setEditValues(prevValues => ({
      ...prevValues,
      [value.target.id]: value.target.value
    }))
  }

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do Ativo"
            defaultValue={props.name}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="Preço"
            defaultValue={props.cost}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria"
            defaultValue={props.category}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Excluir</Button>
          <Button onClick={handleEditActive}>Salvar</Button>
        </DialogActions>
      </Dialog>
  );
}
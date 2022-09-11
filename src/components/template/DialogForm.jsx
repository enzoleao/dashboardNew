import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react"
import Axios from "axios"
import {sendIcon, deleteIcon, xIcon} from "../icons"
export default function FormDialog(props) {

    const [editValues, setEditValues] = useState({
      id: props.id,
      name:props.name,
      valor:props.valor,
      codigo:props.codigo
    });

    const handleEditItem=()=>{
        Axios.put("http://localhost:4001/edit", {
          id: editValues.id,
          nome:editValues.name,
          valor:editValues.valor,
          codigo:editValues.codigo
        });
        handleClose();
    }
    const handleDeleteItem=()=>{
      Axios.delete(`http://localhost:4001/delete/${props.id}`);
      handleClose();
    }
    const handleClickOpen = () => {
    props.setOpen(true);
    };
  
    const handleClose = () => {
    props.setOpen(false);
    };

    const handleChangeValues = value =>{
      setEditValues(prevValues=>({
        ...prevValues,
        [value.target.id]: value.target.value
      }))
    }
  return (
    <>
      
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
        
          <TextField
            autoFocus
            margin="dense"
            label="Nome do Produto"
            defaultValue={props.name}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="valor"
            label="Valor do Produto"
            defaultValue={props.valor}
            onChange={handleChangeValues}
            type="tel"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="codigo"
            label="Codigo do Produto"
            defaultValue={props.codigo}
            onChange={handleChangeValues}
            type="tel"
            fullWidth
            variant="standard"
          />
          
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" startIcon={xIcon}onClick={handleClose}>Cancel</Button>
          <Button color="error" variant="outlined" startIcon={deleteIcon}onClick={()=>handleDeleteItem()}>Excluir</Button>
          <Button color="success" variant="outlined" endIcon={sendIcon}onClick={()=>handleEditItem()}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
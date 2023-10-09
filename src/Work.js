import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { useContext } from 'react';
// import  {TodoContext}  from './Contexts/FirstContext'; 
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import { TextField } from '@mui/material';
// import Button from '@mui/material/Button';
import './App.css';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 600,
//     height:200,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

export default function Work({todo , openModal , updateModal , onChange}) {
    

    // let [todos,setTodos] = useContext(TodoContext)
    
    // to change isCompleted to true to change color line under 
    function changeTask(){
        onChange(todo)
    }
    function handleOpen(){
    openModal(todo)
    }
    function handleUOpen(){
        updateModal(todo);
    } 
    return (
        <Card sx={{ minWidth: 275 ,marginTop: 2 }} className='card'>
        <Grid container spacing={2}>
        <Grid xs={4} style={{display:"flex",justifyContent:"space-around", 
        alignItems:"center"}}>
            {/* <Stack direction="row" spacing={1} style={{ }}> */}
                
                <IconButton aria-label="delete" className='icon' onClick={handleOpen}>
                    <DeleteForeverIcon 
                    style={{
                        fontSize:"30px" ,
                        color:"#ab003c" ,
                        }}
                    />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm" 
                className='icon' onClick={handleUOpen} >
                    <AlarmIcon style={{
                        fontSize:"30px" ,
                        color:"#ffc107",
                        }}  />
                </IconButton>

                <IconButton color="primary" aria-label="add to shopping cart" className='icon'
                style={{
                    fontSize:"30px" ,
                    color:"#357a38",
                    background : todo.isCompleted ?"white" :"green"}}
                onClick={changeTask}> 
                    <FileDownloadDoneIcon   />
                </IconButton>
            {/* </Stack> */}
        </Grid>
        <Grid xs={8} style={{ textAlign:"right"}} > 
            <CardContent  >
                <Typography variant='h2' sx={{ fontSize: 24 ,textAlign:"right" ,margin: "5px 0 0 0" 
                ,  textDecoration: todo.isCompleted? "line-through":"none" }}
                    color="text.secondary" gutterBottom>
                    {todo.title}
                </Typography>
                <Typography variant='h6' sx={{textAlign:"right",
                margin:"5px 0 0 0",textDecoration: todo.isCompleted? "line-through":"none"}} 
                color="text.secondary" gutterBottom>
                    {todo.details}
                </Typography>
            </CardContent>

        {/* MITS MODAL FOR POP UP  to delete  */}
            {/* <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}>

                <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h1">
                    ARE YOU SURE THAT WANT U TO DELETE IT ?
                    </Typography>
                    <Typography id="transition-modal-title" variant="h6" component="h6">
                    --YOU WILL CANT BRING-- 
                    </Typography> 
                    <div style={{ marginTop:"20px",display:"flex",justifyContent:"left" }}>
                        <Button variant="text" onClick={handleDclicked} 
                        style={{fontSize:"24px",width:"100px",height:"50px",color:"red"}}>delete</Button>
                        <Button variant="text" onClick={handleClose}
                        style={{fontSize:"24px",width:"100px",height:"50px" ,color:"red"}}>close</Button>
                    </div>
                </Box>
                </Fade>
            </Modal>        */}
            
      
        

        </Grid>
        </Grid>
        </Card>
        
    );
};

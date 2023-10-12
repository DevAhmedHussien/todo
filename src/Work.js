import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDrag } from 'react-dnd';


export default function Work({todo , openModal , updateModal , onChange}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "todo" ,
        item: {id: todo.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
console.log(isDragging)
    function changeTask(){
        onChange(todo)
    }
    function handleOpen(){JSON.stringify(todo.startTime)
    openModal(todo)
    }
    function handleUOpen(){
        updateModal(todo);
    } 
    return (
      <Accordion sx={{ minWidth: 275 ,marginTop:2 ,background:"#827717d1" , borderRadius:5}} className='card'  ref = {drag}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Card  sx={{ minWidth: "100%" ,background:"#827717d1", borderRadius:5}} >
        <Grid container spacing={2}>
        <Grid xs={6}  style={{display:"flex",justifyContent:"space-around", 
        alignItems:"center"}}>                
                <IconButton aria-label="delete"  onClick={handleOpen}>
                    <DeleteForeverIcon 
                    style={{
                        fontSize:"30px" ,
                        color:"#ab003c" ,
                        }}Y
                    />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm" 
                 onClick={handleUOpen} >
                    <AlarmIcon style={{
                        fontSize:"30px" ,
                        color:"#ffc107",
                        }}  />
                </IconButton>

                <IconButton color="primary" aria-label="add to shopping cart" 
                style={{
                    fontSize:"30px" ,
                    color:"#357a38",
                    background : todo.isCompleted ?"white" :"green"}}
                onClick={changeTask}> 
                    <FileDownloadDoneIcon   />
                </IconButton>
        </Grid>
        <Grid xs={6} style={{ textAlign:"right"}} > 
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
        </Grid>
        </Grid>
        </Card>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span> Comment: </span> {todo.comment}
          </Typography>
          <div>
            <p>start at : {JSON.stringify(todo.startTime)}</p>
            <p>start end : {JSON.stringify(todo.endTime)}</p>
            
            <div>
              
    </div>
          </div>
        </AccordionDetails>
      </Accordion>
   

    );
};

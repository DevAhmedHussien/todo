
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Work from './Work';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2'; 
import Button from '@mui/material/Button';
// import { v4 as uuidv4 } from 'uuid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import  { useTodo}  from './Contexts/TodoContext';
// import { ToastContext } from './Contexts/ToastContext';
import { useToast } from './Contexts/ToastContext';
import { useEffect, useState  , useMemo  } from 'react';
// import ReducerTodo from './ReducerTodo';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height:200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const add = "successfuly you added massege"
const deleted = " msg is deleted okey "
const updated = " msg has been updated " 

export default function BasicCard() {
    
    let [sendTodo,setSendTodo] = useState()
    let [value , setVlaue] = useState('');
    let [valueM , setVlaueM] = useState('');

    // when i used context for state 
    // let [todoD,setTodos] = useContext(TodoContext)


    let [display,setDisplay] = useState('all')
    const [open, setOpen] = useState(false);
    const [openU, setOpenU] = useState(false); 
       // reduce 
    // let [todos,dispatch] = useReducer(ReducerTodo,[])

    // context and provider from context 
    // let {todos,dispatch} = useContext(TodoContext)

    // context and provider from context with custom
    let {todos,dispatch} = useTodo()

    const[updatedV , setUpdatedV] = useState({ title:value , details:valueM})

    // const {showBar} = useContext(ToastContext) 
    const {showBar} = useToast() 
    
    const handleUClose = () => setOpenU(false);
    const handleClose = () => setOpen(false);
    

    // to change isCompleted to true to change color line under 
    function handleClick(todo){

        // 7ARAKET USE STATE EL 3ADI 
        // let Utodo = todos.map((element)=>{
        //     if (element.id === todo.id){
        //         element.isCompleted= !element.isCompleted; // law true 5aliha false 
        //     }
        //     return element;
        //     });
        //     setTodos(Utodo);
        //     localStorage.setItem("todos",JSON.stringify(todos))
        //     console.log(todo)
        // 7ARAKET L USE REDUSER 
        dispatch({
            type:'click',
            payload :todo
        })

            if(todo.isCompleted){
                showBar('U did')
            }else{
                showBar('U didnt ')
            }
            
    } 
    //sending value to todo (card componnents)
    function boxModal(todo){
        setOpen(true)
        setSendTodo(todo)
        console.log(todo)
    }
    // 
    function showUModal(todo){
        setOpenU(true)
        setSendTodo(todo)
    }

    
    // to add new todo 
        function handleAdd(){
        // let newTodo = 
        // {                                     
        //     id : uuidv4() ,                                     
        //     title : value ,                                     
        //     details :valueM,                                        
        //     isCompleted : false                                     
        // }

        // let setNewTodo =[...todos , newTodo];
        // setTodos(setNewTodo)  
        // localStorage.setItem("todos",JSON.stringify(setNewTodo))            
        // setVlaue('')                                        
        // setVlaueM('');   
        // showBar(add)  
         // way reduce        
        dispatch({
            type:'add',
            payload:{
                title:value,
                details:valueM}})
        setVlaue('')                                        
        setVlaueM('');   
        showBar(add)   
    }
    //DELETED TODO
    function handleDclicked(){
        // const DeleteTodo = 
        // todos.filter((element) => element.id !== sendTodo.id); // emsa7 el element 
        // setTodos(DeleteTodo);
        // localStorage.setItem("todos",JSON.stringify(todos))

        // way reduce 
        dispatch({
            type:'delete',
            payload:sendTodo
        })
        
        setOpen(false)
        showBar(deleted)
    }
     //  tod editin or updating todo 
    function handleUpdating (){

        //way el state el 3adi 


        // console.log(sendTodo)
        // const UpdatingTodo = todos.map( (element) => {
        //     if (element.id ==  sendTodo.id){    
        //     return {...element ,title: updatedV.title, details : updatedV.details,
        //     }} 
        //     else {
        //             return element;
        //         }
        //         })
        // setTodos(UpdatingTodo)
        // localStorage.setItem("todos",JSON.stringify(todos))      
        // setOpenU(false);
        // showBar(updated)

        // way reduce 
        dispatch({
            type:'update',
            payload:{
                title:updatedV.title,
                details:updatedV.details,
                targetTodo:sendTodo}})
        setOpenU(false);
        showBar(updated)
            }
    // awel ma el saf7a t3mel load btgiib el local storage w t3redo 
        useEffect(()=>{
            // ma3na el kalam dah law el getLocalStorage == null or undefiend 
            //raga3 el masfofoa el fadia 
            // let getLocalStorage = JSON.parse(localStorage.getItem('todos')) ?? []
            // setTodos(getLocalStorage)
            dispatch({type:'get'})
        },[])

        //vhangiing values by buttons 
        const handleAlignment=(event)=>{
            setDisplay(event.target.value)
            }
    
            let isCompleted = useMemo(()=>{  // do copmute this function when has a changed in todos 
                return todos.filter(element =>{
                    return element.isCompleted
            }) 
            },[todos])
            
            let nonCompleted = useMemo(()=>{
                return todos.filter(element =>{
                    return !element.isCompleted
            }) 
            },[todos])
    

// RENDERING AFTER GET 
        let todoBeRender = todos
            if (display == "is-Completed"){
                todoBeRender = isCompleted
            }else if(display == "no-completed"){
                todoBeRender = nonCompleted
            }

        let pageTodo = todoBeRender.map(element =>{
            return <Work key={element.id}  todo= {element} openModal={boxModal} updateModal={showUModal} 
                onChange={handleClick}
                />
            })

    return (

        <>
        {/* delteted modal  */}
        <Modal
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
        </Modal> 
        {/* modal for update  */}
        <Modal 
            open={openU}
            onClose={handleUClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 600 ,height: 300 , textAlign:'left'}}>
                <div >
                    <h2 >  Update  ? </h2>
            <TextField id="outlined-basic" label="title" variant="outlined" sx={{  width: 500  }}
            value ={updatedV.title} onChange={(e)=>{
                setUpdatedV({...updatedV, title:e.target.value })}}/>

            <TextField id="outlined-basic" label="details" variant="outlined" 
            sx={{  width: 500 , marginTop:1 }}
            value ={updatedV.details} onChange={(e)=>{
                setUpdatedV({...updatedV, details:e.target.value })}}/>
            </div>
            <Button onClick={handleUpdating} sx={{  width: 150 , marginTop:1  ,fontSize:18 }}> Updating </Button>
            <Button onClick={handleUClose} sx={{  width: 150 , marginTop:1  ,fontSize:18 }}> close </Button>
            </Box>
        </Modal>
            
        <Card sx={{ minWidth: 275 , width:700 , maxHeight: "70vh", overflow:"scroll" }}>
            <CardContent>
                <Typography variant="h1" sx={{ fontSize: 40 }} 
                    color="text.secondary" gutterBottom>
                My Tasks
                </Typography>
                <Divider />
                <ToggleButtonGroup 
                    value={display}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    color="secondary"
                    >
                    <ToggleButton className='icon' value="all" aria-label="left aligned" 
                        onClick={ ()=>{}}>
                        all
                    </ToggleButton> 
                    <ToggleButton  className='icon'  value="is-Completed" aria-label="centered" 
                        onClick={ ()=>{}}>
                        I DID  
                    </ToggleButton>
                    <ToggleButton   className='icon'  value="no-completed" aria-label="right aligned"
                        onClick={ ()=>{}}> 
                        I Didnt
                    </ToggleButton>
                    </ToggleButtonGroup>
                <Typography component="div" sx={{ marginTop: 3 }} >
                {pageTodo}
                </Typography>
            </CardContent>
            <div style={{display:"flex", 
                    justifyContent:"center",alignItems:"center" , marginBottom:"15px"}}>
                <Grid container spacing={4} style={{display:"flex", 
                        justifyContent:"center",alignItems:"center"}}>
                    <Grid xs={4} >
                    <Button variant="contained" style={{width:"100%" }}
                        onClick={()=>{handleAdd()}} disabled={value.length == 0 || valueM.length == 0 } >Add</Button>
                    </Grid> 
                    <Grid xs={8}>
                        < TextField id="outlined-basic" label="Write your Task" 
                            variant="outlined" style={{width:"100%"}} value={value} 
                            onChange={(e)=>{
                        setVlaue(e.target.value)}}/>
                    </Grid>
                </Grid>
            </div>
            < TextField autoFocus id="outlined-basic" label="here what i will do " 
                            variant="outlined" style={{width:"100%"}} value={valueM} 
                            onChange={(e)=>{
                        setVlaueM(e.target.value)}}/>
            
        </Card>
        </>
    );
    
}
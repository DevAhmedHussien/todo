import './App.css';
import SimpleContainer from'./TodoApp'
import { createTheme,ThemeProvider } from '@mui/material';
import {ToastProvider } from './Contexts/ToastContext'
import TodoProvider from './Contexts/TodoContext'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SearchAppBar from './Nav'
import { Route,Routes ,Link } from 'react-router-dom';
import BasicCard from'./Card'
import Button from '@mui/material/Button';
import WhowIam from './whowIam'

function App() {
  const theme =createTheme({
    typography:{
      fontFamily: ["AhmedBold"],
      fontWeightLight:300
    },
    palette:{
      primary :{
        main:"#827717" 
      },
      secondary:{
        main:"#825457"
      }
    }
  })
  return (
  <ThemeProvider theme={theme}>
    <DndProvider backend={HTML5Backend}>
        <TodoProvider>
          <ToastProvider> 
            {/* <SearchAppBar/> */}
            <div style={{ background:"#8b4513a3" , display:'flex', justifyContent:"center",alignItems:"center", padding:"10px 0 10px" ,gap:10}}>
              <Link to='/Todo'>
              <Button  variant="contained">Todo</Button>
              </Link>
              <Link to='/whowIam'>
              <Button  variant="contained">About me</Button>
              </Link>
            </div>
            <Routes>
              <Route path='Todo' element = {<BasicCard/>} />
              <Route path='whowIam' element = {<WhowIam/>} />
            </Routes>
          </ToastProvider>
        </TodoProvider>
      </DndProvider>
    </ThemeProvider>
    
  );
}

export default App;

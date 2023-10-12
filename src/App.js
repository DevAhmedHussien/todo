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

function App() {
  

  const theme =createTheme({
    typography:{
      fontFamily: ["AhmedBold"],
      fontWeightLight:300
    },
    palette:{
      primary :{
        main:"#827717" //#827717
      },
      secondary:{
        main:"#825457"
      }
    }
  })
  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <TodoProvider>
          <ToastProvider> 
            <SearchAppBar/>
            <div style={{ background:"#8b4513a3" , display:'flex', justifyContent:"center",alignItems:"center", padding:"10px 0 10px"}}>
              <Link to='/Todo'>
              <Button  variant="contained">Todo</Button>
              </Link>
            </div>
            <Routes>
              <Route path='Todo' element = {<BasicCard/>} />
            </Routes>
              <div className="App">
              {/* <DrawerAppBar/> */}
                {/* <SimpleContainer/> */}
              </div>
          </ToastProvider>
        </TodoProvider>
      </ThemeProvider>
      </DndProvider>
    
  );
}

export default App;

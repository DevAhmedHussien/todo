import './App.css';
import SimpleContainer from'./TodoApp'
import { createTheme,ThemeProvider } from '@mui/material';
// import { useState } from 'react';
// import { TodoContext } from './Contexts/FirstContext';//ay context el 8alb ht3mlo provide mn app 
import {ToastProvider } from './Contexts/ToastContext'
import TodoProvider from './Contexts/TodoContext'
function App() {
  
  // let initialTodo = [];
  // let [todos , setTodos] = useState(initialTodo);

  //declare font-size 5sosan lel typography 
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
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <ToastProvider> 
          {/* <TodoContext.Provider value={[todos,setTodos]}> */}
            <div className="App">
              <SimpleContainer/>
            </div>
          {/* </TodoContext.Provider> */}
        </ToastProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;

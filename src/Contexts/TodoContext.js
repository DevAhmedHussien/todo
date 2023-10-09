import ReducerTodo from '../ReducerTodo'
import { useReducer,createContext , useContext} from 'react'

export let TodoContext = createContext({})

let TodoProvider = ({children})=>{
    let [todos,dispatch] = useReducer(ReducerTodo,[])
    return(
        <>
        <TodoContext.Provider value={{todos:todos,dispatch:dispatch}}> 
            {children}
        </TodoContext.Provider>
        </>
    )
}
export default TodoProvider
export const useTodo = ()=>{
    return useContext(TodoContext)  //usecontext is a hook that allows us to access the context in any component we want
}
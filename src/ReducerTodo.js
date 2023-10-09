
import { v4 as uuidv4 } from 'uuid';
export default function ReducerTodo(currentTodo,action){
    if(action.type == 'add'){
        let newTodo = 
        {                                     
            id : uuidv4() ,                                     
            title : action.payload.title ,                                     
            details :action.payload.details,                                        
            isCompleted : false                                     
        }
        let setNewTodo =[...currentTodo , newTodo];
        localStorage.setItem("todos",JSON.stringify(setNewTodo))
        return setNewTodo  
    }   
        else if(action.type=='update'){
        const UpdatingTodo = currentTodo.map( (element) => {
            if (element.id ==  action.payload.targetTodo.id){    
            return {...element ,title: action.payload.title, details :action.payload.details,
            }} 
            else {
                    return element;
                }
                })
            localStorage.setItem("todos",JSON.stringify(UpdatingTodo))     
            return UpdatingTodo
    }
        else if(action.type == 'delete'){
            const DeleteTodo = currentTodo.filter((element) => element.id !== action.payload.id); // emsa7 el element 
            localStorage.setItem("todos",JSON.stringify(DeleteTodo))
            return DeleteTodo;
    }
        else if (action.type =='click'){
            let Utodo = currentTodo.map((element)=>{
                if (element.id === action.payload.id){
                    const updateTodo = {...element , isCompleted:!element.isCompleted}
                    // element.isCompleted= !element.isCompleted; FE 7ALET REDUCE HATEB2A MUTATIION      
                    return updateTodo   
                }
                return element;
                })
                console.log(action.payload)
                localStorage.setItem("todos",JSON.stringify(Utodo))
                return Utodo;
            }
        else if (action.type=='get'){
            let getLocalStorage = JSON.parse(localStorage.getItem('todos')) ?? []
            return getLocalStorage
        }
    
}
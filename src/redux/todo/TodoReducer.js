import { Create_Todo_Fullfilled, Create_Todo_Pending, Create_Todo_Rejected, Delete_Todo_Fullfilled, Delete_Todo_Pending, Delete_Todo_Rejected, Getall_Todo_Fullfilled, Getall_Todo_Pending, Getall_Todo_Rejected, Update_Todo_Fullfilled, Update_Todo_Pending, Update_Todo_Rejected } from "./actionType";
import { initialState } from "./initialState";

// create a  reducer ;
const todoReducer = (state=initialState, action) =>{
        
    switch(action.type){
        case Getall_Todo_Pending:
            return {
                ...state,
                loading: true,
            };

        case Getall_Todo_Fullfilled: 
            return{
                ...state,
                todos:  action.payload,
                loading: false,
                message: "Todos get successfull",
            }
        case Getall_Todo_Rejected: 
            return{
                ...state,
                loading: false,
                error: "Todos Data get rejected",
            }
        case Create_Todo_Pending: 
            return{
                ...state,
                loading: true,
            }

        case Create_Todo_Fullfilled: 
            return {
                ...state,
                loading: false,
                todos: [...state.todos, action.payload],
                message: "Todo Create Success fully",
            };
        case Create_Todo_Rejected:
            return{
                ...state,
                loading: false,
                error: "Todo Data Create rejsected"
            }


        case Delete_Todo_Pending:
            return{
                ...state, 
                loading: true,

            };

        case Delete_Todo_Fullfilled:
            return{
                ...state,
                loading: false,
                todos: state.todos.filter((item) => item.id !== action.payload),
                message: "Todo Data delete successfully",
                
            };
        case Delete_Todo_Rejected:
            return{
                ...state,
                loading: true,
                error: "Todo delete Rejected",
            }

        case Update_Todo_Pending:
            return{
                ...state,
                loading: true,
            };

        case Update_Todo_Fullfilled:
            return{
                ...state,
                loading: false,
                todos:state.todos.map((item) =>{
                    if(item.id === action.payload.id ){
                        return(action.payload);
                    }else{
                        return(item);
                    }
                }),
                message: "Todo Update success full",

            };
        case Update_Todo_Rejected:
            return{
                ...state,
                loading:false,
                error: "Todo update rejected",
            }


        default: 
        return state;
    }
};

// export default Todo reducer ;
export default todoReducer;

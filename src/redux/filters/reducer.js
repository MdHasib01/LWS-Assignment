import { ALLBLOGS, AUTHOR, CATEGORY, QUERY } from "./actionTypes";
import initialState from "./initialState";

const reducer=(state=initialState,action)=>{

    switch (action.type) {
        case ALLBLOGS:
            return{
                ...state,
                filters:{
                    ...state,
                    category:'all',
                    author:'all',
                    query:''
                }
            }
        case CATEGORY:
            return{
                ...state,
                filters:{
                    ...state.filters,
                    category:action.payload
                }
            }
        case AUTHOR:
            return{
                ...state,
                filters:{
                    ...state.filters,
                    author:action.payload
                }
            }
        case QUERY:
            return {
                ...state,
                filters:{
                    ...state.filters,
                    query:action.payload
                }
            }
        default:
            return state;
    }

}

export default reducer;
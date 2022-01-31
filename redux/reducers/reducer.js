import * as types from '../actions/types';



const initialState = {
    data: null,
    loading: false,
    error: null
}

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_START:
            return{
                ...state,
                loading: true,
                error: null
            }
        case types.FETCH_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case types.FETCH_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
            
    
        default: 
            return state;
    }
}

export default apiReducer;
import { ADD_USER, DELETE_USER } from '../action/action.js'

const intialState = {
    users: [],
};

const userReducer = (state = intialState, action) => {
    switch(action.type){
            case ADD_USER:
                return{
                    ...state,
                    users:action.payload
            };
            case DELETE_USER:
                    return {
                      ...state,
                      users: state.users.filter((user) => user.id !== action.payload),
            };
            default :
                return state;
    }
}

export default userReducer;

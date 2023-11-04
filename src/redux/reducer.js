// import { DISHES } from "../shared/dishes";
// import { COMMENTS } from "../shared/comments";
// import { PROMOTIONS } from "../shared/promotions";
// import { LEADERS } from "../shared/leaders";
// import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actionRedux';
// import { actions } from "react-redux-form";

// export const initialState = {
//   dishes: DISHES,
//   comments: COMMENTS,
//   promotions: PROMOTIONS,
//   leaders: LEADERS,
//   tasks: [],

// };

// export const Reducer = (state = initialState, action) => {
//   return state;
// };


// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {

//     case ADD_TASK:
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case EDIT_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload.taskId
//             ? { ...task, 
//               text: action.payload.updatedTask,
//               mail: action.payload.updatedMail //-------------
            
//             }
//             : task
//         ),
//       };
//     case DELETE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "../redux/actionRedux"

const initialstate = {
    loading: true,
    userlist: [],
    userobj: {},
    errmessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return {
                loading: false,
                errmessage: '',
                userlist:action.payload,
                userobj:{}
            }
            case DELETE_USER:return{
                ...state,
                loading:false
            }
            case ADD_USER:return{
                ...state,
                loading:false
            }
            case UPDATE_USER:return{
                ...state,
                loading:false
            }
            case GET_USER_OBJ:return{
                ...state,
                loading:false,
                userobj:action.payload
            }
        default: return state
    }
}

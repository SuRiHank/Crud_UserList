// src/actions.js
// export const ADD_TASK = 'ADD_TASK';
// export const EDIT_TASK = 'EDIT_TASK';
// export const DELETE_TASK = 'DELETE_TASK';


// export const addTask = (task) => ({
//   type: ADD_TASK,
//   payload: task,
// });

// export const editTask = (taskId, updatedTask, updatedEmail) => ({
//   type: EDIT_TASK,
//   payload: { taskId, 
//             updatedTask,
//             updatedEmail },
// });

// export const deleteTask = (taskId) => ({
//   type: DELETE_TASK,
//   payload: taskId,
// });
//------------------------------------------------------------------------//
import axios from "axios"
import { toast } from "react-toastify"

export const MAKE_REQUEST='MAKE_REQUEST'
export const FAIL_REQUEST='FAIL_REQUEST'
export const GET_USER_LIST='GET_USER_LIST'
export const DELETE_USER='DELETE_USER'
export const ADD_USER='ADD_USER'
export const UPDATE_USER='UPDATE_USER'
export const GET_USER_OBJ='GET_USER_OBJ'
export const LOGIN = 'LOGIN'




export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}

export const geUserList=(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}
export const deleteUser=()=>{
    return{
        type:DELETE_USER
    }
}
export const addUser=()=>{
    return{
        type:ADD_USER
    }
}
export const updateUser=()=>{
    return{
        type:UPDATE_USER
    }
}
export const getUserObj=(data)=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}


export const FetchUserList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:3001/user').then(res=>{
            const userlist=res.data;
            dispatch(geUserList(userlist));
          }).catch(err=>{
         
          })
     // }, 2000);
     
    }
}

export const Removeuser=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.delete('http://localhost:3001/user/'+code).then(res=>{
            dispatch(deleteUser());
          }).catch(err=>{
         
          })
     // }, 2000);
     
    }
}

export const FunctionAddUser=(data)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.post('http://localhost:3001/user',data).then(res=>{
            dispatch(addUser());
            toast('User Added successfully.')
          }).catch(err=>{
      
          })
     // }, 2000);
     
    }
}

export const FunctionUpdateUser=(data,code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.put('http://localhost:3001/user/'+code,data).then(res=>{
            dispatch(updateUser());
            toast('User Updated successfully.')
          }).catch(err=>{
   
          })
     // }, 2000);
     
    }
}
export const FetchUserObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:3001/user/'+code).then(res=>{
            const userlist=res.data;
            dispatch(getUserObj(userlist));
          }).catch(err=>{

          })
     // }, 2000);
     
    }
}
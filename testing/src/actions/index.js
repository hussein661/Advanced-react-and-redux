import {SAVE_COMMENT,FETCH_COMMENTS,CHANGE_AUTH} from './types'
import Axios from 'axios'
export const  saveComment = (comment)=>{
return{
    type:SAVE_COMMENT,
    payload:comment
}
} 

export async function fetchComments(){
  const response =  await Axios.get('http://jsonplaceholder.typicode.com/comments')
  return {
        type:FETCH_COMMENTS,
        payload:response
    }
}

export function changeAuth(isLoggedIn){
    return{
        type:CHANGE_AUTH,
        payload:isLoggedIn
    }
}
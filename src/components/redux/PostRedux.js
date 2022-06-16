
export const getAllPost = ({postStore}) => postStore.allPost;


const reducerName = 'addPost'
const createActionName = name => `app/${reducerName}/${name}`;
const ADD_POST = createActionName('ADD_POST')

export const addPost = payload => ({payload, type: ADD_POST})

export default function reducer(statePart=[], action={}) {
    switch(action.type) {
  
      case ADD_POST:
        return {...statePart, allPost: [...statePart.allPost, action.payload]}
  
      default: 
        return statePart
    } 
  }
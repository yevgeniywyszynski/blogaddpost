
export const getAllPost = ({postStore}) => postStore.allPost;
export const getPostById = ({postStore}, id) => (postStore.allPost.filter(e => e.id == id));

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
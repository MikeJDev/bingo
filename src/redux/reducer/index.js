import {
  ADD_ITEM,
  } from '../action-types/index'

const initialState = {
  items: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: 
    return Object.assign({}, state, {
      ...state,
      items: action.payload
    })
      
    default:
      return state
    }
}


export default rootReducer

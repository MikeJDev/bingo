import {
  ADD_ITEM,
  REMOVE_ITEM
} from '../action-types/index'

const initialState = {
  items: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:

      let addItemsNewArray = [...state.items]
      addItemsNewArray.push(action.payload)
      return Object.assign({}, state, {
        ...state,
        items: addItemsNewArray
      })

    case REMOVE_ITEM:
      return Object.assign({}, state, {
        ...state,
        items: state.items
      })

    default:
      return state
  }
}


export default rootReducer

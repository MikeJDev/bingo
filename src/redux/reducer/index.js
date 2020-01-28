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
      console.log(action.payload)
      let removeArray = [...state.items]
      removeArray.splice(action.payload, 1)

      return Object.assign({}, state, {
        ...state,
        items: removeArray
      })

    default:
      return state
  }
}


export default rootReducer

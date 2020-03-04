import {
  ADD_ITEM,
  REMOVE_ITEM,
  RANDOMIZE_ARRAY,
  FILL_BOARD,
  CLEAR_BOARD
} from '../action-types/index'
import data from '../../data/index'

const initialState = {
  items: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:

      let addItemsNewArray = [...state.items]
      if (addItemsNewArray.length <= 24) {
        addItemsNewArray.push(action.payload)
      }
      return Object.assign({}, state, {
        ...state,
        items: addItemsNewArray
      })

    case REMOVE_ITEM:
      let removeArray = [...state.items]
      removeArray.splice(action.payload, 1)

      return Object.assign({}, state, {
        ...state,
        items: removeArray
      })

    case RANDOMIZE_ARRAY:
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array
      }
      let randomArray = [...state.items]
      shuffleArray(randomArray)
      return Object.assign({}, state, {
        ...state,
        items: randomArray
      })

    case FILL_BOARD:
      let fillBoardArray = [...state.items]
      let n = 25 - fillBoardArray.length
      const shuffled = data.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, n);
      for (let i = 0; i < selected.length; i++) {
        fillBoardArray.push(selected[i])
      }

      return Object.assign({}, state, {
        ...state,
        items: fillBoardArray
      })

    case CLEAR_BOARD:
      return Object.assign({}, state, {
        ...state,
        items: []
      })
    default:
      return state
  }
}


export default rootReducer

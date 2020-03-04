import {
  ADD_ITEM,
  REMOVE_ITEM,
  RANDOMIZE_ARRAY
} from '../action-types/index'

const initialState = {
  items: ['American flag', 'city skyline', 'barn', 'national park sign', 'cow', 'state line', 'mountain', 'tree', 'RR crossing', 'bridge', 
    'camper', 'wild flowers', 'time zone line', 'lake', 'motorcycle', 'rest area', 'police car', 'historic highway', 'windmill', 'boat',
    'horse', 'bus', 'bird', 'traffic cone', 'appliance'
],
  // displayArray: ['hi']
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
      console.log('hellwefdwefwef')
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

    default:
      return state
  }
}


export default rootReducer

import {
  ADD_ITEM,
} from '../action-types/index'

export function addItem(payload) {
  return { type: ADD_ITEM, payload}
}

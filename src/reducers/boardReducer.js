import { CHANGE_BOARD_STATUS } from '../actions/types'
import { boardsMockup } from '../utils/boardMockup'

const INITIAL_STATE = {
  board: boardsMockup,
}

export default function boards(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_BOARD_STATUS:
      return { ...state, board: action.payload }

    default:
      return state
  }
}

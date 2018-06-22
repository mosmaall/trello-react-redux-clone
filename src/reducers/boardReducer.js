import {
  FETCH_BOARD,
  CREATE_BOARD,
  DELETE_BOARD,
  CHANGE_BOARD_STATUS,
} from '../actions/types'

const INITIAL_STATE = {
  board: [],
  createBoard: false,
}

export default function boards(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BOARD:
      return { ...state, board: action.payload }

    case CREATE_BOARD:
      return { ...state, board: action.payload }

    case DELETE_BOARD:
      return {
        board: state.board.filter(board => board.nodeRef !== action.payload),
      }

    case CHANGE_BOARD_STATUS:
      return { ...state, createBoard: action.payload }

    default:
      return state
  }
}

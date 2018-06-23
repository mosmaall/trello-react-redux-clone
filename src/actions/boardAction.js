import { MOVE_BOARD } from './types'

export const moveBoard = (item, allBoard) => dispatch => {
  console.log('moveBoard Action !!')
  const boards = Array.from(allBoard)
  const startIndex = item.source.sourceIdx
  const endIndex = item.target.targetIdx

  //Remove Source Board
  const [removed] = boards.splice(startIndex, 1)
  //Insert Source Board to targetIndex
  boards.splice(endIndex, 0, removed)

  //Now We have NewBoards
  console.log('Newboards =', boards)

  //Update Backend here

  //Then update our state
  dispatch({
    type: MOVE_BOARD,
    payload: boards,
  })
}

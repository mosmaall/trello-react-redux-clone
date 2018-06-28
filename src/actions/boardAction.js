import { MOVE_BOARD, MOVE_CARD, ATTACH_CARD } from './types'

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

  boards.map((b, index) => {
    b.index = index
  })

  console.log('Newboards =', boards)

  //Update Backend here

  //Then update our state
  dispatch({
    type: MOVE_BOARD,
    payload: boards,
  })
}

export const moveCard = (item, allBoard) => dispatch => {
  console.log('moveCard Action !!')

  const boards = Array.from(allBoard)
  const startIndex = item.s.sourceIdx
  const endIndex = item.t.targetIdx

  //move in same lane
  if (item.s.sourceBoard === item.t.targetBoard) {
    console.log('same')
    const bIndex = boards.findIndex(b => b.id === item.s.sourceBoard)
    const [removed] = boards[bIndex].cards.splice(startIndex, 1)

    boards[bIndex].cards.splice(endIndex, 0, removed)

    boards.map(b => {
      b.cards.map((c, idx) => {
        c.index = idx
      })
    })

    console.log('NewBoards =', boards)

    dispatch({
      type: MOVE_CARD,
      payload: boards,
    })
  }

  //move to another lane
  else {
    const sbIndex = boards.findIndex(b => b.id === item.s.sourceBoard)
    const tbIndex = boards.findIndex(b => b.id === item.t.targetBoard)

    const [removed] = boards[sbIndex].cards.splice(startIndex, 1)

    boards[tbIndex].cards.splice(endIndex, 0, removed)

    boards.map(b => {
      b.cards.map((c, idx) => {
        c.index = idx
      })
    })

    console.log('NewBoards =', boards)

    dispatch({
      type: MOVE_CARD,
      payload: boards,
    })
  }
}

export const attachToBoard = (item, allBoard) => dispatch => {
  console.log('attach Action !!')
  const boards = Array.from(allBoard)
  const startIndex = item.source.sourceIdx
  const endIndex = item.target.targetIdx
  const sbIndex = boards.findIndex(b => b.id === item.source.sourceBoard)
  const tbIndex = boards.findIndex(b => b.id === item.target.targetBoard)

  const [removed] = boards[sbIndex].cards.splice(startIndex, 1)
  boards[tbIndex].cards.push(removed)

  boards.map(b => {
    b.cards.map((c, idx) => {
      c.index = idx
    })
  })

  console.log('NewBoards =', boards)

  dispatch({
    type: MOVE_CARD,
    payload: boards,
  })
}

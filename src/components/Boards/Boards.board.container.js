import Board from './Boards.board.js'

import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import { DropTarget } from 'react-dnd'

import { moveBoard } from '../../actions/boardAction'

const boardSource = {
  beginDrag(props, component) {
    console.log(props)
    const item = {
      id: props.board.id,
      title: props.board.title,
      index: props.index,
    }
    return item
  },

  isDragging(props, monitor) {
    return props.id === monitor.getItem().id
  },
}

const boardTarget = {
  drop(targetProps, monitor, component) {
    const targetId = targetProps.board.id
    const targetIdx = targetProps.index

    const sourceProps = monitor.getItem()
    const sourceId = sourceProps.id
    const sourceType = monitor.getItemType()
    const sourceIdx = sourceProps.index

    const item = {
      source: {
        sourceId,
        sourceIdx,
      },
      target: {
        targetId,
        targetIdx,
      },
    }

    if (targetId !== sourceId && sourceType === 'BOARD') {
      targetProps.onMoveBoard(item, targetProps.allBoard)
    }
  },
}

const collectDragSource = (DnDconnect, monitor) => ({
  connectDragSource: DnDconnect.dragSource(),
  connectDragPreview: DnDconnect.dragPreview(),
  isDragging: monitor.isDragging(),
})

const collectDropTarget = (DnDconnect, monitor) => ({
  connectDropTarget: DnDconnect.dropTarget(),
  isOver: monitor.isOver(),
})

const mapStateToProps = state => ({
  allBoard: state.boards.board,
})

const mapDispatchToProps = dispatch => ({
  onMoveBoard(item, allBoard) {
    dispatch(moveBoard(item, allBoard))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  DragSource('BOARD', boardSource, collectDragSource)(
    DropTarget(['BOARD', 'BOARD'], boardTarget, collectDropTarget)(Board)
  )
)

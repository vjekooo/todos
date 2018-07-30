
import React, { Fragment } from 'react'
import Overlay from './Overlay'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

class ToDoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pathname: ''
    }
  }
  componentDidMount () {
    this.setState({
      pathname: this.props.location.pathname
    })
    this.props.sendPathname(this.props.location.pathname)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({
        pathname: nextProps.location.pathname
      })
      this.props.sendPathname(nextProps.location.pathname)
    }
  }

  render () {
    const {
      input, todos, overlay, currentUser, currentTodo, addButtonActive,
      removeToDo, toggleToDo, overlayToggle, editToDo, handleChange, handleSubmit
    } = this.props
    const toDo = Object.keys(todos).map(todo => {
      return (
        <ToDo
          key={todo}
          todoId={todo}
          todo={todos[todo]}
          removeToDo={removeToDo}
          toggleToDo={toggleToDo}
          overlayToggle={overlayToggle}
        />
      )
    }).sort((a, b) => {
      return a.props.todo.timestamp < b.props.todo.timestamp
    }).sort((a, b) => {
      return a.props.todo.checked > b.props.todo.checked
    })

    const filteredTodos = toDo.filter(item => item.props.todo.list === this.state.pathname)

    const renderToDo = Object.keys(todos).length !== 0
      ? filteredTodos
      : <h3 className="no-todo">Such empty, do something</h3>

    const activeClass = addButtonActive
      ? 'active'
      : 'non-active'

    const signedUser = currentUser
      ? renderToDo
      : <h3>Please sign in</h3>

    return (
      <Fragment>
        <div className="todo">
          <ul>
            {signedUser}
          </ul>
        </div>
        <span className={`icon add ${activeClass}`}
          onClick={overlayToggle}
        >
        </span>
        <Overlay
          input={input}
          currentTodo={currentTodo}
          overlay={overlay}
          editToDo={editToDo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        >
        </Overlay>
      </Fragment>
    )
  }
}

ToDoList.propTypes = {
  todos: PropTypes.object,
  currentUser: PropTypes.object,
  input: PropTypes.string,
  filter: PropTypes.string,
  overlay: PropTypes.bool,
  location: PropTypes.object,
  currentTodo: PropTypes.string,
  addButtonActive: PropTypes.bool,
  addToDo: PropTypes.func,
  removeToDo: PropTypes.func,
  toggleToDo: PropTypes.func,
  editToDo: PropTypes.func,
  overlayToggle: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  sendPathname: PropTypes.func
}

export default ToDoList

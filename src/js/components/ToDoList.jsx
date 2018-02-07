
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = (props) => {
  const { todos, addToDo, removeToDo, toggleToDo } = props
  return (
    <Fragment>
      <button
        onClick={addToDo}
      >
        add todo
      </button>
      <div className="todo">
        {
          todos
            .map(todo =>
              <ToDo
                key={todo.text}
                todo={todo}
                removeToDo={removeToDo}
                toggleToDo={toggleToDo}
              />
            )
        }
      </div>
    </Fragment>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  addToDo: PropTypes.func,
  removeToDo: PropTypes.func,
  toggleToDo: PropTypes.func
}

export default ToDoList

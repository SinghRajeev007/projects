import React from 'react'

function TodoList({taskInfo, index, onCompleteTask}) {

    const handleTaskStatus = () => {
        taskInfo.status = 'completed';
        console.log(taskInfo)
    }

  return (
    <div>
    <div>{taskInfo.name}</div>
    <div>
    <button onClick={() => onCompleteTask(index)}>complete
    </button>
    <span style={{cursor: 'pointer', padding: '1rem', color: 'white', background: 'red', borderRadius: '2px'}} onClick={() => onCompleteTask(index, 'del')}>X</span>
    </div>

    </div>
  )
}

export default TodoList
import React, { useState } from 'react';
import TodoList from '../to-do-list/TodoList';

function TodoContainer() {
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState(0);

    const storeTaskName = (event) => {
        setTaskName(event.target.value)
    }

    const createTask = (event) => {
        if(event.key == 'Enter') {
            const taskToCreate = {
                status: 'pending',
                name: taskName
            }
            setTasks([...tasks, taskToCreate])
        }
    }

    const onComplete = (index, type) => {
        if(type == 'del') {
            const updatedTasks = tasks.filter((task, i) => index !== i);
            setTasks([...updatedTasks])
        } else {
            const task = tasks[index];
            task.status = 'complete';
            setTasks([...tasks])
        }
    }

  return (
    <div>
        <div>
        Pending task ({tasks.filter(task => task.status == 'pending').length})
        </div>
        {tasks.length ? tasks.map((task, i) => <TodoList key={i} index={i} taskInfo={task} onCompleteTask={onComplete}/>) : ''}
        <div>
        <input placeholder='add new task' onChange={storeTaskName} onKeyDown={createTask}/>
        </div>
    </div>
  )
}

export default TodoContainer
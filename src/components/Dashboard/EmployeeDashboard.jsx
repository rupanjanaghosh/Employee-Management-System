import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  if (!props.data) {
    return (
      <div className='p-10 bg-[#1C1C1C] h-screen flex items-center justify-center text-white'>
        Loading or no user data found.
      </div>
    )
  }

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} /> {/* Show the employee's tasks */}
    </div>
  )
}

export default EmployeeDashboard
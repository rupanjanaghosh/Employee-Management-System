import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)
  const [showSignup, setShowSignup] = useState(false)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
  if (email === 'admin@example.com' && password === '123') {
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
  } else if (userData) {
    const employee = userData.find((e) => email === e.email && e.password === password)
    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
    } else {
      alert("Invalid Credentials")
    }
  } else {
    alert("Invalid Credentials")
  }
}

 
const handleSignup = ({ firstName, email, password }) => {
  if (userData && userData.find((e) => e.email === email)) {
    alert("User already exists")
    return
  }
  const newUser = {
    id: Date.now(),
    firstName,
    email,
    password,
    taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
    tasks: []
  }
  const updatedUsers = userData ? [...userData, newUser] : [newUser]
  SetUserData(updatedUsers)
  localStorage.setItem('employees', JSON.stringify(updatedUsers))
  alert("Signup successful! Please log in.")
  setShowSignup(false)
}

  const goToSignup = () => setShowSignup(true)
  const goToLogin = () => setShowSignup(false)

  return (
    <>
      {!user && !showSignup && <Login handleLogin={handleLogin} goToSignup={goToSignup} />}
      {!user && showSignup && <Signup handleSignup={handleSignup} goToLogin={goToLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  )
}

export default App
import { Route, Routes } from "react-router-dom"
import { NavBar } from "../ui/NavBar"
import { TodosScreen } from '../pages/TodosScreen'
import { TaskContext } from "../context/TaskContext"

export const DashboardRoutes = () => {

  const tasks = [
    {
      id: 1,
      title: 'Completar prácticos',
      description: 'Completar el práctico de useContext'
    }
  ];


  return (
    <TaskContext.Provider value = {{ tasks }}>
      <NavBar />
      <Routes>
        <Route path="/todosScreen" element={ <TodosScreen/> } />  
      </Routes>
    </TaskContext.Provider>
  )
}

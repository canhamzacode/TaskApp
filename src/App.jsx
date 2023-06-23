import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Main from "./pages/Main"
import Login from "./pages/Login"
import CreateTask from "./pages/CreateTask"
import Tasks from "./pages/Tasks"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

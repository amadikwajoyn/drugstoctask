import { Route, Routes } from "react-router-dom";
import "../App.css";
import Main from "../pages/main";
import AddTask from "../components/addTask";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/addtask" element={<AddTask />} />
    </Routes>
  );
}

export default App;

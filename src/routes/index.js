import { collection, addDoc } from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import Main from "../pages/main";
import AddTask from "../components/addTast";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add" element={<AddTask />} />
    </Routes>
  );
}

export default App;

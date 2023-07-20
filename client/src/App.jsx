import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000");
        dispatch(getUser(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <main>
      <h3 className="text-center text-white">CRUD by Nadim Chowdhury</h3>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </main>
  );
}

export default App;

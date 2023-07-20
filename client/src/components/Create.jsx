import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/userSlice";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/create", { name, email, age })
      .then((res) => {
        dispatch(addUser(res.data));
        console.log(res.data);
        navigate("/");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-4 bg-white p-4 rounded"
    >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Age
        </label>
        <input
          type="text"
          name="age"
          value={age}
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => setage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
}

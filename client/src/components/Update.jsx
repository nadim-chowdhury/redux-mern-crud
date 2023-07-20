import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/userSlice";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setage] = useState("");

  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.find((u) => u.id === id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:8000/update/${id}`, { name, email, age })
      .then((res) => {
        dispatch(updateUser({ id, name, email, age }));
        console.log(res.data);
        navigate("/");
      });
  };

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setage(user.age);
  }, [user.age, user.email, user.name]);

  return (
    <form
      onSubmit={handleUpdate}
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
        Update
      </button>
    </form>
  );
}

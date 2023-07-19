import { useEffect } from "react";
import axios from "axios";

export default function Users() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <button className="btn btn-primary">Add +</button>

        <table className="table mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";
import * as yup from "yup";
import Form from "./Component/Form";
import AddedUsers from "./Component/AddedUsers";
import schema from "./Validation/FormSchema";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    checked: false,
  });
  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    checked: "",
  });
  const [users, setUsers] = useState([]);

  const handleChange = (name, value) => {
    validate(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("https://reqres.in/api/users", form)
      .then((res) => {
        setUsers([res.data, ...users]);
      })
      .catch((err) => console.error(err));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  return (
    <div className="App">
      <h1>Welcome to the Form Page</h1>

      <Form
        values={form}
        change={handleChange}
        errors={errors}
        submit={handleSubmit}
      />
      <AddedUsers people={users} />
      {/* {users.map((user, idx) => (
        <div key={idx} className="user-card">
          <span>{user.fname}</span>&nbsp;
          <span>{user.lname},</span>&nbsp;
          <span>{user.email}</span>&nbsp;
        </div>
      ))} */}
    </div>
  );
}

export default App;

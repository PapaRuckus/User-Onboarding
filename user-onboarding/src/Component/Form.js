import React from "react";

export default function Form(props) {
  const { change, submit, values, errors } = props;
  const { fname, lname, email, password, tos } = values;

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const newVal = type === "checkbox" ? checked : value;
    change(name, newVal);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <h2>Make your Account</h2>
      <p style={{ color: "red" }}>{errors.fname}</p>
      <p style={{ color: "red" }}>{errors.lname}</p>
      <p style={{ color: "red" }}>{errors.email}</p>
      <p style={{ color: "red" }}>{errors.password}</p>
      <p style={{ color: "red" }}>{errors.tos}</p>

      <form className="form container" onSubmit={onSubmit}>
        <label>
          First Name:
          <input type="text" value={fname} name="fname" onChange={onChange} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lname} name="lname" onChange={onChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} name="email" onChange={onChange} />
        </label>
        <label>
          PassWord:
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
          />
        </label>
        <label>
          Terms of Service
          <input
            type="checkbox"
            name="tos"
            checked={tos || false}
            onChange={onChange}
          />
        </label>
        <input type="submit" value="Make your team" />
      </form>
    </div>
  );
}

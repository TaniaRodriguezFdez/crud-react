import React, { useState } from "react";
import App from '../App'
import { AppContext, useAppContext } from "../context/appContext";

const Create = () => {
       const {createStudent} =  useAppContext(AppContext)
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name} - Age: ${age}`);
    createStudent({id: Date.now(), name:name, age:age})
    setName('')
    setAge('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Name"
        />
        <label>Name</label>
      </div>
      <div className="form-floating">
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          className="form-control"
          placeholder="Password"
        />
        <label>Age</label>
      </div>
      <div className="d-grid mt-2">
        <button className="btn btn-primary" type="submit">
          <i className="fa-solid fa-circle-plus fa-2xPP"></i>
        </button>
      </div>
    </form>
  );
};

export default Create;

import React, { useState, useEffect } from "react";

const FormFunctionalComponent = ({ onSubmit, userData }) => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    } else {
      setFormData({ name: "", email: "", mobile: "" });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.mobile =
      formData.mobile.length === 10 ? "" : "Mobile number must be 10 digits";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({ name: "", email: "", mobile: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-5">
      <div className="flex flex-col">
        <label>Name</label>
        <input
          className="border-2 border-black"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          className="border-2 border-black"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className="flex flex-col">
        <label>Mobile</label>
        <input
          className="border-2 border-black"
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <span>{errors.mobile}</span>}
      </div>
      <div className="flex justify-center items-end">
        <button className="border-2 px-4 py-1 bg-blue-400 font-medium" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormFunctionalComponent;

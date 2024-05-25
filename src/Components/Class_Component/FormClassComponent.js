import React, { Component } from "react";

class FormClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { name: "", email: "", mobile: "" },
      errors: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.userData !== prevProps.userData) {
      if (this.props.userData) {
        this.setState({ formData: this.props.userData });
      } else {
        this.setState({ formData: { name: "", email: "", mobile: "" } });
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  validate = () => {
    const { formData } = this.state;
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.mobile =
      formData.mobile.length === 10 ? "" : "Mobile number must be 10 digits";
    this.setState({ errors: tempErrors });
    return Object.values(tempErrors).every((x) => x === "");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.props.onSubmit(this.state.formData);
      this.setState({ formData: { name: "", email: "", mobile: "" } });
    }
  };

  render() {
    const { formData, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="flex gap-5">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            className="border-2 border-black"
            type="text"
            name="name"
            value={formData.name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
          {errors.mobile && <span>{errors.mobile}</span>}
        </div>
        <div className="flex justify-center items-end">
          <button
            className="border-2 px-4 py-1 bg-blue-400 font-medium"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default FormClassComponent;

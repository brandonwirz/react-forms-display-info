import React from "react";
// import Todo from "./Todo";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    favColor: "",
  });
  const [messages, setMessages] = React.useState("");
  // console.log(formData.employment);
  // console.log(formData.favColor);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // computed properties
        [name]: type === "checkbox" ? checked : value,
        // [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData.firstName);
    // console.log(formData.lastName);
    // console.log(formData);
    setMessages(
      `Hey, ${formData.firstName}  ${formData.lastName}  ${formData.email}  ${formData.comments}`
    );

    // setMessages("");
    // event.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <textarea
          type="text"
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
          value={formData.comments}
        />
        <input
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />

        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <br />
      {/* <p>{message}</p> */}
      <div className="app">
        <div className="todo-list">
          <h2>{messages}</h2>
        </div>
      </div>
    </>
  );
}

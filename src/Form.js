import React from "react";
// import Todo from "./Todo";

export default function Form() {
  const [formData, setFormData] = React.useState([
    { firstName: "" },
    { lastName: "" },
    { email: "" },
    { comments: "" },
    { isFriendly: true },
    { favColor: "" },
  ]);

  //  firstName: "",
  //   lastName: "",
  //   email: "",
  //   comments: "",
  //   isFriendly: true,
  //   favColor: "",
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
    console.log(formData);
    setMessages(
      `Hey, ${formData.firstName}  ${formData.lastName}  ${formData.email}  ${formData.comments} ${formData.favColor}`
    );
    // const myData = messages.map((formDat) => {
    //   return `<p>{formDat}</p>`;
    // });
    // console.log(myData);
    // resetForm();
    // setMessages("");
    // event.target.reset();
  }
  // function toggleShown() {
  //   console.log(messages);
  //   setMessages((prevMes) => !prevMes);
  // }

  // const resetForm = () => {
  //   setMessages("");
  //   // formData.lastName === "";
  //   console.log("reset form........");
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          // value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          // value={formData.lastName}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          // value={formData.email}
        />
        <textarea
          type="text"
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
          // value={formData.comments}
        />
        <textarea
          type="text"
          placeholder="Favorite Color"
          onChange={handleChange}
          name="favColor"
          // value={formData.comments}
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

          {/* <h2 onClick={toggleShown}>{messages}</h2> */}
          {/* <p>{formData.firstName}</p>
          <p>{formData.lastName}</p>
          <p>{formData.email}</p>
          <p>{formData.comments}</p> */}
        </div>
      </div>
    </>
  );
}
